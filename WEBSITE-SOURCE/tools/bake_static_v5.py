#!/usr/bin/env python3
"""
bake_static_v5.py — bake the Mike Builds static deploy package (v5 recipe).

v5 = the hydration-safe recipe. What changed vs v4 and WHY:

  v4 rewrote every /_next/... href/src to page-relative paths
  (../_next/... on the door pages) and inlined the stylesheets.
  That "portability" feature silently killed React hydration:
  the turbopack runtime identifies loaded chunks via
  script.getAttribute("src") and requires it to start with the
  publicPath ("/_next/"). A "../_next/..." src fails that check,
  the chunk never registers in the module map, and the app never
  mounts — no errors, no console output, nothing. On the live
  site this surfaced as: /realtor fan-out grid invisible (its
  tiles were opacity-0 until client JS), sticky call/text bar
  never appearing, and any other JS-dependent enhancement dead.

  v5 therefore:
    - keeps every /_next/... reference ABSOLUTE. The package is
      deployed at the mikebuilds.tech domain root (Cloudflare
      Pages), so absolute paths are correct AND required for
      hydration.
    - keeps <link rel="stylesheet"> tags + the css files on disk
      (React Float's hydration contract; no double css load).
    - keeps the v4 niceties: dark-mode meta injection, .nojekyll,
      .map / RSC-payload / 404-dir pruning.

  Source fixes shipped in the same bake:
    - fan-out.tsx: tiles render visible WITHOUT JS (adopts
      Reveal's "animation is enhancement, never a gate" contract)
    - door-parts.tsx: TEXT MIKE button gets justify-center +
      whitespace-nowrap (no more wrapped/off-center label on
      narrow screens)

Run:  python3 scripts/bake_static_v5.py
"""
import os
import shutil
import subprocess
import sys

ROOT = "/home/z/my-project"
OUT = os.path.join(ROOT, "out")
V5DIR = os.path.join(ROOT, "download", "website-package-v5")
DEST = os.path.join(V5DIR, "site-static")
BACKUP = os.path.join(ROOT, ".bake-backup")

EXPORT_CONFIG = """import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  output: "export",
  trailingSlash: true,
  typescript: {
    ignoreBuildErrors: true,
  },
  reactStrictMode: false,
};

export default nextConfig;
"""

HEAD_INJECT = (
    '<meta name="color-scheme" content="dark"/>'
    '<meta name="darkreader-lock"/>'
)


def log(msg):
    print(f"[bake-v5] {msg}", flush=True)


def phase(msg):
    print(f"\n[bake-v5] === {msg} ===", flush=True)


def inject_dark_metas(html_path):
    """The ONLY html transform: dark-mode locks right after <head>."""
    with open(html_path, encoding="utf-8") as f:
        html = f.read()
    if '<meta name="color-scheme"' in html:
        return  # already injected (idempotent)
    if "<head>" in html:
        html = html.replace("<head>", "<head>" + HEAD_INJECT, 1)
    else:
        # no literal <head>; insert before </head>
        idx = html.lower().find("</head>")
        if idx != -1:
            html = html[:idx] + HEAD_INJECT + html[idx:]
    with open(html_path, "w", encoding="utf-8") as f:
        f.write(html)


def main():
    os.makedirs(BACKUP, exist_ok=True)
    cfg = os.path.join(ROOT, "next.config.ts")
    cfg_bak = os.path.join(BACKUP, "next.config.ts")
    api = os.path.join(ROOT, "src", "app", "api")
    api_bak = os.path.join(BACKUP, "api")

    # recover from any stale v4-era backup first
    if os.path.exists(api_bak):
        log("stale api backup found — restoring it first")
        shutil.move(api_bak, api)
    if os.path.exists(cfg_bak):
        shutil.copy2(cfg_bak, cfg)

    ok = False
    try:
        phase("1/6 switching to export mode")
        shutil.copy2(cfg, cfg_bak)
        with open(cfg, "w", encoding="utf-8") as f:
            f.write(EXPORT_CONFIG)
        if os.path.exists(api):
            shutil.move(api, api_bak)
        log("next.config.ts -> output:'export' + trailingSlash, api route parked")

        phase("2/6 running next build")
        env = dict(os.environ, NEXT_TELEMETRY_DISABLED="1")
        r = subprocess.run(
            ["node_modules/.bin/next", "build"],
            cwd=ROOT, env=env, capture_output=True, text=True, timeout=540,
        )
        tail = (r.stdout or "")[-1200:]
        if tail.strip():
            print(tail)
        if r.returncode != 0 or not os.path.exists(OUT):
            log(f"BUILD FAILED (rc={r.returncode})")
            print((r.stderr or "")[-1800:])
            sys.exit(1)
        log("build ok — out/ emitted")

        phase("3/6 copying out/ -> site-static (dropping .map)")
        if os.path.exists(DEST):
            shutil.rmtree(DEST)
        shutil.copytree(OUT, DEST, ignore=shutil.ignore_patterns("*.map"))
        log(f"copied to {DEST}")

        phase("4/6 injecting dark-mode locks (paths stay ABSOLUTE)")
        pages = 0
        for dirpath, _dirs, files in os.walk(DEST):
            for name in files:
                if name.endswith(".html"):
                    inject_dark_metas(os.path.join(dirpath, name))
                    pages += 1
        log(f"dark-mode metas injected into {pages} pages")

        # prune: RSC payload .txt (site has zero internal navigation),
        # next's internal not-found duplicates, unused scaffold logo
        txts = []
        for dirpath, _dirs, files in os.walk(DEST):
            for name in files:
                if name.endswith(".txt") and name != "robots.txt":
                    txts.append(os.path.join(dirpath, name))
        for t in txts:
            os.remove(t)
        log(f"removed {len(txts)} RSC payload .txt files")

        nf = os.path.join(DEST, "_not-found", "index.html")
        if os.path.exists(nf):
            os.remove(nf)
        shutil.rmtree(os.path.join(DEST, "404"), ignore_errors=True)
        logo = os.path.join(DEST, "logo.svg")
        if os.path.exists(logo):
            os.remove(logo)
        for dirpath, dirs, files in os.walk(DEST, topdown=False):
            if dirpath != DEST and not dirs and not files:
                os.rmdir(dirpath)

        with open(os.path.join(DEST, ".nojekyll"), "w") as f:
            f.write("")
        log(".nojekyll written")

        phase("5/6 zipping (archive root = site-static/ folder, like v4)")
        zip_path = os.path.join(V5DIR, "mikebuilds-site-static-v5.zip")
        if os.path.exists(zip_path):
            os.remove(zip_path)
        subprocess.run(
            ["zip", "-r", "-q", os.path.basename(zip_path), "site-static"],
            cwd=V5DIR, check=True, timeout=120,
        )
        log(f"zip written: {zip_path} ({os.path.getsize(zip_path)/1024/1024:.2f} MB)")

        phase("6/6 summary")
        total = 0
        size = 0
        for dirpath, _dirs, files in os.walk(DEST):
            for name in files:
                total += 1
                size += os.path.getsize(os.path.join(dirpath, name))
        log(f"files: {total}  size: {size/1024/1024:.2f} MB")
        ok = True
    finally:
        if os.path.exists(cfg_bak):
            shutil.copy2(cfg_bak, cfg)
        if os.path.exists(api_bak):
            shutil.move(api_bak, api)
        log("config + api route restored")

    if ok:
        print("\n[bake-v5] DONE — package at download/website-package-v5/site-static/")
        print("[bake-v5] NEXT: python3 scripts/preflight_v5.py")


if __name__ == "__main__":
    main()
