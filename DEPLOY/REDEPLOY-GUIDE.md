# Mike Builds — v5 Production Redeploy Guide

**What this is**: The fixed site build. Two live bugs are corrected:

| Bug | Root cause | Fix |
|---|---|---|
| `/realtor/` fan-out grid ("ONE BECOMES THIRTY") invisible on desktop + mobile | v4 rewrote script `src` to `../_next/...` — the turbopack runtime matches chunks by `src` starting with `/_next/`, so **React hydration silently never ran**. The grid was `opacity-0` until JS that never executed. | v5 keeps all `/_next/...` paths absolute (correct for root deployment). Hydration verified working. Bonus: grid now renders visible even with JS blocked/off. |
| "TEXT MIKE" button (top right, all door pages) text wrapped + off-center on mobile | Narrow screens squeezed the button; label wrapped to 2 lines and sat left-aligned. | Button now has `whitespace-nowrap` + `justify-center` — one line, dead-centered, verified at 390px. |

Also fixed silently by the hydration repair: the **mobile sticky CALL/TEXT bar** (appears after scrolling) never appeared on the live v4 site — it works now.

QA: preflight 89/89 PASS · hydration verified on all 4 pages · fan-out visible with AND without JS · button centered on plumber/realtor/automation at mobile + desktop · sticky bar verified.

---

## Redeploy — 6 steps, ~5 minutes

The Pages project `mikebuilds` already exists and mikebuilds.tech already points at
it. You are NOT creating anything new — just pushing a new deployment.

### Step 1 — Get the package
Download from this deliverables folder:

```
website-package-v5/mikebuilds-site-static-v5.zip
```

Unzip it. You get a folder called **`site-static`** (47 files, 1.18 MB).

### Step 2 — Open the Pages project
Cloudflare dashboard → **Workers & Pages** → click your **`mikebuilds`** project
(the one already serving mikebuilds.tech).

### Step 3 — Create a new deployment
Click **Create new deployment** (direct upload — same flow you used the first
time; on older dashboards it's "Deploy" / the upload-assets drop zone).

**Drag the `site-static` FOLDER itself into the drop zone** — not its parent,
not the zip. The root of what you upload must directly contain `index.html`,
`_next/`, `plumber/`, `realtor/`, `automation/`, `404.html`, `robots.txt`.

### Step 4 — Deploy
Click **Deploy / Save and deploy**. ~30 seconds. Cloudflare gives you a new
deployment URL and immediately switches mikebuilds.tech to it.

No cache worries: every JS/CSS chunk has a new content hash, and Pages serves
HTML with `max-age=0, must-revalidate` — the swap is instant for visitors.

### Step 5 — The 5-line phone check (do all of it)
1. `https://mikebuilds.tech/realtor/` — scroll to **ONE BECOMES THIRTY** → the
   grid of ~30 post tiles is visible. Scroll a little — tiles pop in with a
   stagger if you arrive fresh.
2. Same page on your phone — grid still visible, and after scrolling ~400px the
   **CALL / TEXT bar pins to the bottom** (this was silently dead before).
3. `/plumber/`, `/realtor/`, `/automation/` on your phone — orange **TEXT MIKE**
   button top right: one line, centered.
4. Tap CALL and TEXT on the sticky bar → both dial/text **410-575-4192**.
5. Porch `mikebuilds.tech` — loads styled, no raw HTML anywhere.

### Step 6 — If anything looks wrong
- **Rollback**: project → **Deployments** tab → the previous deployment →
  **Promote to production** (instant, zero risk — this is your safety net).
- **Pages 404s**: you dragged the parent folder. Redo Step 3 with `site-static`
  itself.

---

## What changed in the package (for the record)

- v5 = same 4 pages, same copy, same design — only plumbing + the two bug fixes.
- All `/_next/...` references absolute (deployment must sit at the domain root —
  it does). CSS ships as real `<link>` tags + files again (React's contract).
- `fan-out.tsx`: tiles render server-side visible; the stagger animation is now
  enhancement-only. No JS = grid still shows.
- `door-parts.tsx`: TEXT MIKE gets `justify-center whitespace-nowrap`.
- Local preview: `cd site-static && python3 -m http.server 8000` →
  `http://localhost:8000/` (must serve from the folder root; opening
  index.html by double-click won't resolve `/_next/...`).

**Do not** hand-edit files inside `site-static/` — fixes belong in the source
(`src/`), then re-bake with `python3 scripts/bake_static_v5.py` and re-gate
with `python3 scripts/preflight_v5.py`.
