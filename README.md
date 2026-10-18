# Mike Builds — the umbrella repo

**mikebuilds.tech** — one roof over every business line: fixed-price websites for
Baltimore home-service trades, automation builds, and a content repurposing engine.

This repo is the **central hub** for the whole estate:

- the **website source** (Next.js) for mikebuilds.tech and its four pages
- the **deployable static build** (v5 — the current, bug-fixed build) + redeploy guide
- the **operating guides** (Setup Checklist, Production Flight Plan, offer sheet, playbook)
- the **full marketing stack** (Traffic Kit, QR codes, flyers, copy-paste scripts, tracker)
- the **info + entry documents of the three sibling repos** (AssetForge, Charm City
  Sites, The 2K Sprint) so this one repo can stand in for all of them
- the **master context** of where every business stands, plus the conversation archive

> **Make this repo PRIVATE.** It carries business plans, pricing strategy, marketing
> copy, and personal contact details. Nothing here needs to be public — the website
> itself is already live on Cloudflare Pages. (The phone number and email are already
> printed on the public site, so those are not new exposure; everything else is.)

---

## Where things stand (the honest snapshot)

**Live and running — three things:**

1. **The website** — mikebuilds.tech on Cloudflare Pages. Still serving the older v4
   build until v5 here is redeployed (30 minutes, guide included).
2. **Cloudflare + DNS + the Pages project** behind it.
3. **Email** — Zoho mailboxes + the alias map on the same domain.

**Everything else is at zero** — no warmup, no factory install, no gigs posted, no
outreach. That is the starting line, not a problem. The order of operations is
`DOCS/MikeBuilds-Setup-Checklist.pdf` — 3 boxes already filled green, 27 numbered
steps from today to production, every row pointing at its full instructions.

---

## Repo map

| Folder | What it is | Start with |
|---|---|---|
| `WEBSITE-SOURCE/` | The Next.js source for mikebuilds.tech — homepage + `/plumber`, `/realtor`, `/automation` door pages, site components, build + bake tooling | `README.md` inside |
| `DEPLOY/` | The current static build (v5): extracted pages + the deploy zip + `REDEPLOY-GUIDE.md` (6-step redeploy, phone check, rollback) | `REDEPLOY-GUIDE.md` |
| `DOCS/` | The operating guides: Setup Checklist (START HERE), Production Flight Plan (the manual), Phase 2 Offer Sheet, Free-Stack Sprint Playbook, Master Map, business update | `MikeBuilds-Setup-Checklist.pdf` |
| `MARKETING/` | Everything that sells: Traffic Kit (30-day playbook, 14 QR PNGs, 3 flyers, cheat sheet, XLSX tracker) + the 2K Sprint Marketing Kit with paste-ready copyblocks | `MARKETING-STRATEGY.md` |
| `OTHER-REPOS/` | Info + entry documents (HANDOFF / PROJECT_CONTEXT / business plans) for the three sibling repos: AssetForge, Charm City Sites, 2K Sprint | `REPOS-AT-A-GLANCE.md` |
| `CONTEXT/` | `MASTER-CONTEXT.md` (the whole estate on one page) + the conversation archive (11 exported histories + early source extracts) | `MASTER-CONTEXT.md` |

---

## The four businesses on one page

| Business | What it is | Status |
|---|---|---|
| **Charm City Sites** | Build-first websites for local trades ($500/$650/$800, +$400 missed-call texter). The factory machine is fully built; two credentials from launch. | Built, pre-production |
| **Automation Mechanic** | Stage-two upsells to site clients — Missed-Call Texter, Review Robot, Invoice Chaser, 24/7 Receptionist. Sold from `/automation`. | Offers defined, not yet sold |
| **AssetForge** | Local content repurposing engine: long video → client-ready asset pack. $297/$497 retainers. 32/32 tests green; awaits the on-device gate. | Built, gated on Night 1–2 |
| **Mike Builds (this site)** | The umbrella: the storefront, the doors, the brand. | **LIVE** (v4 → redeploy v5) |

The rule that governs all of it: **method transfers, information doesn't.** One door
per audience — a plumber never lands on the realtor pitch, and the homepage shows no
niche entry points at all.

---

## Fast paths

- **Fix the live site** → `DEPLOY/REDEPLOY-GUIDE.md` (redeploy v5, ~30 min, includes
  the 5-line phone check and one-click rollback)
- **Rebuild the site from source** → `WEBSITE-SOURCE/README.md` (dev server, build,
  and the hydration-safe static bake)
- **Start the sprint** → `DOCS/MikeBuilds-Setup-Checklist.pdf`, boxes 1–4 today
- **Quote a price** → `DOCS/MikeBuilds-Phase2-Offer-Sheet.pdf`
- **Work the street** → `MARKETING/Traffic-Kit/MikeBuilds-Traffic-Kit.pdf`

---

*Owner: Michael Mazique — Baltimore, MD. Contact: mike@mikebuilds.tech / (410)
575-4192 — both already printed on the public site. Repo compiled 2026-10-18.*
