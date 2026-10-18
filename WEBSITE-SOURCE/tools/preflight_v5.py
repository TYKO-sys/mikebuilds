#!/usr/bin/env python3
"""
preflight_v5.py — Mike Builds v5 static package publish gate.

Hard rule: NO deploy unless this prints ALL CHECKS PASS.

v5 invariants (differs from v4 on purpose):
  - every <script src> MUST be absolute /_next/... (hydration-critical:
    turbopack's runtime matches getAttribute("src") against the
    "/_next/" publicPath — relative srcs silently kill hydration)
  - stylesheets stay as <link rel=stylesheet> + css files on disk
    (React Float hydration contract)
  - server HTML fully painted — fan-out tiles are NOT opacity-0
    (no-JS contract: animation is enhancement, never a gate)
  - dark-mode locks on every page
  - copy integrity: phone counts, verbatim automation strings
  - architecture rules: tel:/sms: links only, zero cross-door links

Run:  python3 scripts/preflight_v5.py
"""
import os
import re
import sys

ROOT = "/home/z/my-project"
DEST = os.path.join(ROOT, "download", "website-package-v5", "site-static")

PAGES = {
    "porch": os.path.join(DEST, "index.html"),
    "plumber": os.path.join(DEST, "plumber", "index.html"),
    "realtor": os.path.join(DEST, "realtor", "index.html"),
    "automation": os.path.join(DEST, "automation", "index.html"),
}

VERBATIM = [
    "Your back office runs itself.",
    "One flat price. No monthly fees. You own it outright.",
    "Pick your leak.",
    "If it\u2019s not running in 7 days, you don\u2019t pay.",
    "The Missed-Call Texter",
    "She never sleeps and never has a bad Monday.",
    "Because you pay me once and it keeps working. That\u2019s the whole point.",
    "$300\u2013500",
]

PARTS = ["The Missed-Call Texter", "The Review Robot", "The Invoice Chaser", "The 24/7 Receptionist"]

results = []


def check(name, ok):
    results.append((name, bool(ok)))


def read(path):
    with open(path, encoding="utf-8") as f:
        return f.read()


def norm(s):
    return re.sub(r"\s+", " ", s).strip()


# ---------------- package shape ----------------
check("package dir exists", os.path.isdir(DEST))
for label, p in PAGES.items():
    check(f"page exists: {label}", os.path.isfile(p))
check("404.html exists (host convention)", os.path.isfile(os.path.join(DEST, "404.html")))
check(".nojekyll exists", os.path.isfile(os.path.join(DEST, ".nojekyll")))
check("robots.txt exists", os.path.isfile(os.path.join(DEST, "robots.txt")))
check("icon.svg exists", os.path.isfile(os.path.join(DEST, "icon.svg")))
check("zip exists", os.path.isfile(os.path.join(os.path.dirname(DEST), "mikebuilds-site-static-v5.zip")))

maps = [os.path.join(dp, f) for dp, _, fs in os.walk(DEST) for f in fs if f.endswith(".map")]
check("no .map files", len(maps) == 0)

stray_txt = [os.path.join(dp, f) for dp, _, fs in os.walk(DEST)
             for f in fs if f.endswith(".txt") and f != "robots.txt"]
check("no RSC payload .txt files", len(stray_txt) == 0)

check("_next/static present", os.path.isdir(os.path.join(DEST, "_next", "static")))

total_files = 0
total_size = 0
for dp, _, fs in os.walk(DEST):
    for f in fs:
        total_files += 1
        total_size += os.path.getsize(os.path.join(dp, f))
check(f"file count sane ({total_files})", 30 <= total_files <= 120)
check(f"package size sane ({total_size/1024/1024:.2f} MB)", total_size < 6 * 1024 * 1024)

# ---------------- asset resolution (absolute -> package root) ----------------
all_html = {}
for dp, _, fs in os.walk(DEST):
    for f in fs:
        if f.endswith(".html"):
            p = os.path.join(dp, f)
            all_html[p] = read(p)


def root_resolved_refs(html):
    refs = set()
    for m in re.finditer(r'(?:href|src)="(/[^"]+)"', html):
        refs.add(m.group(1))
    return refs


missing = []
for p, html in all_html.items():
    for ref in root_resolved_refs(html):
        resolved = os.path.normpath(os.path.join(DEST, ref.lstrip("/")))
        if not os.path.isfile(resolved):
            missing.append(f"{os.path.relpath(p, DEST)} -> {ref}")
check(f"all absolute refs resolve at package root (missing: {len(missing)})", len(missing) == 0)
if missing:
    for m in missing[:10]:
        print(f"        MISSING {m}")

# css files on disk must resolve their url() font refs
css_missing = []
for dp, _, fs in os.walk(os.path.join(DEST, "_next")):
    for f in fs:
        if f.endswith(".css"):
            cp = os.path.join(dp, f)
            css = read(cp)
            for m in re.finditer(r"url\(\s*['\"]?([^'\")\s]+)['\"]?\s*\)", css):
                u = m.group(1)
                if u.startswith(("data:", "http:", "https:", "//")):
                    continue
                if u.startswith("/_next/"):
                    resolved = os.path.normpath(os.path.join(DEST, u.lstrip("/")))
                else:
                    resolved = os.path.normpath(os.path.join(dp, u))
                if not os.path.isfile(resolved):
                    css_missing.append(f"{os.path.relpath(cp, DEST)} -> {u}")
check(f"css url() refs resolve (missing: {len(css_missing)})", len(css_missing) == 0)
if css_missing:
    for m in css_missing[:10]:
        print(f"        MISSING {m}")

# ---------------- per-page invariants ----------------
for label, path in PAGES.items():
    html = all_html[path]
    tag = f"[{label}]"

    check(f"{tag} html size > 15KB", len(html) > 15000)

    t = re.search(r"<title>(.*?)</title>", html, re.S)
    check(f"{tag} title present + branded", bool(t) and "Mike Builds" in t.group(1))

    d = re.search(r'<meta\s+name="description"\s+content="([^"]*)"', html)
    check(f"{tag} meta description present", bool(d) and len(d.group(1)) > 40)

    check(f"{tag} color-scheme meta", '<meta name="color-scheme" content="dark"/>' in html)
    check(f"{tag} darkreader-lock meta", '<meta name="darkreader-lock"/>' in html)

    # ---- hydration-critical checks ----
    script_srcs = re.findall(r'<script\b[^>]*\bsrc="([^"]+)"', html)
    rel_scripts = [s for s in script_srcs if not s.startswith("/_next/")]
    check(f"{tag} ALL script srcs absolute /_next/ ({len(script_srcs)} scripts, {len(rel_scripts)} relative)",
          len(script_srcs) > 0 and len(rel_scripts) == 0)

    sheet_links = re.findall(r'<link\b[^>]*rel="stylesheet"[^>]*>', html)
    check(f"{tag} stylesheet <link> tags kept ({len(sheet_links)})", len(sheet_links) >= 1)
    bad_sheets = [t2 for t2 in sheet_links if 'href="/_next/' not in t2]
    check(f"{tag} stylesheet hrefs absolute", len(bad_sheets) == 0)

    phone = html.count("410-575-4192")
    need = 3 if label == "automation" else 1
    check(f"{tag} phone number visible ({phone}x)", phone >= need)

    hrefs = re.findall(r'<a\b[^>]*?href="([^"]*)"', html)
    bad = [h for h in hrefs if not h.startswith(("tel:", "sms:"))]
    check(f"{tag} links are tel:/sms: only ({len(hrefs)} links, {len(bad)} bad)", len(bad) == 0)

    cross = [h for h in hrefs if any(d2 in h for d2 in ("/plumber", "/realtor", "/automation"))]
    check(f"{tag} zero cross-door links", len(cross) == 0)

    hidden = re.findall(r'class="[^"]*\bopacity-0\b', html)
    check(f"{tag} no opacity-0 tiles in server html (no-JS safe)", len(hidden) == 0)

    visible = re.sub(r"<style>.*?</style>", "", html, flags=re.S)
    visible = re.sub(r"<script\b.*?</script>", "", visible, flags=re.S)
    check(f"{tag} no lorem/TODO in markup", not re.search(r"lorem|TODO", visible, re.I))

# ---------------- fan-out no-JS contract (realtor) ----------------
realtor_html = all_html[PAGES["realtor"]]
check("[realtor] 30 fan tiles present in server html", realtor_html.count("fan-tile") == 30)
check("[realtor] fan-out label present", "ONE BECOMES THIRTY" in realtor_html)

# ---------------- TEXT MIKE button (door pages) ----------------
for label in ("plumber", "realtor", "automation"):
    html = all_html[PAGES[label]]
    btn = re.search(r'<a\b[^>]*class="[^"]*cta-spark[^"]*"[^>]*>', html)
    check(f"[{label}] TEXT MIKE button has justify-center", bool(btn) and "justify-center" in btn.group(0))
    check(f"[{label}] TEXT MIKE button has whitespace-nowrap", bool(btn) and "whitespace-nowrap" in btn.group(0))

# ---------------- automation verbatim + porch specifics ----------------
auto = norm(all_html[PAGES["automation"]])
for s in VERBATIM:
    check(f"[automation] verbatim: {s[:48]}{'...' if len(s) > 48 else ''}", norm(s) in auto)
check("[automation] A HUMAN ANSWERS.", "A HUMAN ANSWERS." in auto)
check("[automation] all 4 parts listed", all(p in auto for p in PARTS))

check("[porch] title exact", "<title>Mike Builds — Baltimore, MD</title>" in all_html[PAGES["porch"]])
check("[porch] phone on porch", "410-575-4192" in norm(all_html[PAGES["porch"]]))

# ---------------- report ----------------
fails = [n for n, ok in results if not ok]
print()
for i, (name, ok) in enumerate(results, 1):
    print(f"{'PASS' if ok else 'FAIL'}  {i:>2}. {name}")
print(f"\n{len(results) - len(fails)}/{len(results)} checks passed")
if fails:
    print("\nPREFLIGHT FAILED — DO NOT DEPLOY:")
    for n in fails:
        print(f"  - {n}")
    sys.exit(1)
print(f"ALL {len(results)} CHECKS PASS — v5 package is clear to deploy.")
sys.exit(0)
