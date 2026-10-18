# WEBSITE-SOURCE — mikebuilds.tech (Next.js)

The source that builds the live site. Design name: **Night Garage v2** — dark
workshop aesthetic, Barlow type, one door per audience.

## What's in here

```
src/app/                    the four pages + shell
  page.tsx                  homepage (the porch — brand only, no niche doors)
  plumber/page.tsx          the /plumber door
  realtor/page.tsx          the /realtor door
  automation/page.tsx       the /automation door
  layout.tsx globals.css icon.svg
src/components/site/        the 7 site components
  porch.tsx                 homepage composition
  door-parts.tsx            shared door-page sections (hero, TEXT MIKE, ladder…)
  fan-out.tsx               the /realtor offer grid (JS-off-safe since v5)
  reveal.tsx                scroll-reveal wrapper (framer-motion)
  sticky-bar.tsx            sticky call/text bar (framer-motion)
  demo-phone.tsx            the phone mock on /plumber
  icons.tsx
public/                     logo.svg, robots.txt
prisma/schema.prisma        db schema (template remnant — site itself is static)
tools/                      bake_static_v5.py + preflight_v5.py (see below)
package.json + configs      Next.js 16, Tailwind 4, TypeScript
```

The `components/ui` shadcn library and `src/lib/db.ts` from the original template
are **not** used by any page and were left out on purpose. Dependencies in
`package.json` are kept as-is so the lockfile (`bun.lock`) stays coherent.

## Run it locally

```bash
bun install        # or: npm install
bun dev            # or: npm run dev   → http://localhost:3000
```

Optional: copy `.env.example` to `.env` if you ever want the template's db
scripts (`db:push` etc.). The four site pages need no environment at all.

## Build it

```bash
npm run build      # produces .next/ (output: "standalone")
```

## Bake the deployable static package

The live site is deployed as **static files on Cloudflare Pages**, not as a Node
server. `next build` output alone is not that package — the bake script is:

```bash
npm run build
python3 tools/bake_static_v5.py     # → website-package-v5/site-static/
python3 tools/preflight_v5.py       # publish gate — must print ALL CHECKS PASS
```

Then deploy per `../DEPLOY/REDEPLOY-GUIDE.md` (drag the contents of
`site-static/` into the Cloudflare Pages direct-upload box, or redeploy the
existing Pages project).

## The v4 → v5 story (why the bake recipe matters)

The previous build (v4) rewrote every `/_next/...` reference to page-relative
paths (`../_next/...`) for "portability". That silently killed React hydration:
the runtime matches each chunk's `src` attribute against the `/_next/` public
path, a relative path fails the lookup, the app never mounts, and anything that
depended on client JS — the /realtor fan-out grid, the sticky call/text bar —
stayed invisible. No console errors, nothing.

v5 keeps every `/_next/` reference **absolute**, keeps real `<link
rel="stylesheet">` tags (React's hydration contract), and ships two source-level
guarantees: the fan-out tiles render visible **without JavaScript**, and the
TEXT MIKE bubble is centered and single-line at 390px viewport width.

**If you ever touch the build pipeline, keep these two invariants:** absolute
`/_next/` script srcs, and server HTML that paints without JS. `preflight_v5.py`
enforces both — never deploy without it passing.

## Architecture rules baked into the pages

- **One door per audience.** The homepage links to no door; doors never link to
  each other; each door's only exits are `tel:` and `sms:` to (410) 575-4192.
- **Method transfers, information doesn't.** Nothing on one door reveals another
  audience's pitch.
- Verbatim copy on the automation page (curly quotes, em dashes) is intentional
  and checked by preflight — don't "normalize" it.
