# MASTER-CONTEXT.md — everything, on one page

The consolidated state of the whole Mike Builds estate as of **2026-10-18**.
Written to be read cold — no chat history required. If anything here conflicts
with an older document, THIS file wins (it carries the 2026-10-04 state
correction).

---

## 1. The owner and the constraints

- **Michael Mazique** — Baltimore, MD ("Charm City")
- Full-time sprint, 6+ hours/day, split with the **WGU AI Engineering degree**
  (started Oct 1, 2026)
- Hardware: Windows laptop (a Mac M5 was in transit as of early Oct)
- Working style: **vibe coder** — builds by directing AI tools, not hand-writing code
- Budget: **$0 — as a design constraint, not a phase.** Legitimate free tiers
  only; no cracked or gray-market services
- Hates manual tasks — every system here was built to minimize them; the
  remaining manual steps are inventoried in Flight Plan Ch. 2

## 2. The brand and the site

**mikebuilds.tech** — one roof over every business line. Design: Night Garage
v2 (dark workshop aesthetic, Barlow type). Stack: Next.js 16 + Tailwind 4 +
framer-motion, deployed as static files on Cloudflare Pages.

Four pages, one door per audience:

| Page | Audience | Only exits |
|---|---|---|
| `/` (the porch) | everyone — brand only, no niche doors visible | `tel:` / `sms:` |
| `/plumber` | plumbers/HVAC/electricians | `tel:` / `sms:` |
| `/realtor` | realtors | `tel:` / `sms:` |
| `/automation` | business owners who already know you | `tel:` / `sms:` |

**The governing rule: method transfers, information doesn't.** Doors never
link to each other; a plumber never sees the realtor pitch. All contact goes
to **(410) 575-4192** (call/text) — printed on every page, flyer, and QR.

## 3. Current state — the corrected, honest snapshot

**Set up and running — exactly three things:**

1. **The website** — live on Cloudflare Pages, still serving the v4 build
   (which carries two bugs: invisible /realtor fan-out grid, off-center TEXT
   MIKE bubble on mobile — both fixed in v5, which is built, verified 89/89,
   and waiting on a ~30-minute redeploy)
2. **The Cloudflare layer** — account, DNS, the Pages project, domain at get.tech
3. **Email** — Zoho mailboxes + the alias map on the domain

**Everything else is at zero.** No DNS auth records, no warmup, no factory
install, no AssetForge nights, no gigs posted, no profiles, no outreach —
nothing from any earlier guide has been implemented or configured yet.

> Earlier versions of some documents described what was BUILT as if it were
> SET UP. The distinction is the whole point: **built** = exists on a shelf;
> **set up** = a human finished the install/config steps and it runs. Only
> the three items above are set up.

## 4. The four machines

| Machine | What it does | Built? | Set up? | Next step to go live |
|---|---|---|---|---|
| **The website (v5)** | storefront + doors | yes — 89/89 checks | live, but on buggy v4 | redeploy v5 (`../DEPLOY/REDEPLOY-GUIDE.md`, ~30 min) |
| **Email engine** | Zoho + aliases + warmup | addresses planned | mailboxes live | 3 DNS records + warmup notes (checklist boxes 1–4, today) |
| **Charm City factory** | builds client sites from sheet rows | fully built + verified | NO | Docker install afternoon (boxes 5–9) + 2 credentials |
| **AssetForge engine** | video → content packs | 32/32 tests green | NO | Night 1 smoke + Night 2 real video (boxes 10–11) |
| **Lane B channels** | Fiverr gigs + Upwork + flyers | all copy pre-written | NO | paste during warmup window (boxes 16–21) |

## 5. The money plan

- **The 2K Sprint:** ≥$2,000 by ~**Nov 23, 2026** (8 weeks from Sep 28). Lanes:
  local sites (Charm City), gig ladder (Fiverr/Upwork), product lane (AssetForge).
- **Charm City window:** 3 sites ($1,950) + 1 missed-call add-on ($400) =
  **$2,350 net in 45 days** from first real outreach.
- **Personal ceiling target:** $2–4k by Black Friday.
- **Gumroad products:** deferred to December, gated by the 2-customer rule.

## 6. Pricing (reconciled everywhere — site, flyers, offer sheet)

| Offer | Price |
|---|---|
| Plumber site ladder | $500 / $650 / $800 — built before payment |
| Realtor packs | $297/mo + $497/mo |
| Missed-Call Texter | $400 |
| Review Robot | $300 |
| Invoice Chaser | $300–500 |
| 24/7 Receptionist | $297/mo |
| Automation Fix (new, Oct) | $500 flat |
| Care Plan (new, Oct) | $99/mo |

## 7. Key decisions and rules (do not re-litigate)

1. **One door per audience** — homepage shows no doors; doors never cross-link.
2. **Two-stage funnel** — Charm City sells the site; automation upsell only
   AFTER delivery. No overlap, no rebrand.
3. **Do NOT redo** Charm City or AssetForge — they are built. The sprint's job
   is starting machines, not rebuilding them.
4. **$0 budget** is structural — free tiers, self-hosted n8n, local models.
5. **Prices are fixed** — stated once, in writing, no haggling.
6. **Domain stays at get.tech** ($29.99/yr renewal). Cloudflare Registrar's
   at-cost .tech runs ~$49–59 — transferring would RAISE cost. Re-compare
   registrars before Sep 2027.
7. **v4 is poisoned** — its relative-path rewrite silently killed React
   hydration (invisible fan-out, dead sticky bar). Never redeploy v4; the v5
   bake recipe (absolute `/_next/` paths, real stylesheet links, no-JS-visible
   server HTML) is the only sanctioned pipeline. Run `preflight_v5.py` before
   any deploy.
8. **Client data never leaves the box** (AssetForge) — local Ollama lane for
   client work; free-tier aggregators are research bookmarks only.
9. **TEXT MIKE QR has no prefilled message** — blank SMS works on every phone.

## 8. The order of operations (current state → DONE)

`../DOCS/MikeBuilds-Setup-Checklist.pdf` is the authoritative sequence — 3
filled green boxes (site live, Cloudflare, email) + 27 numbered steps:

- **Boxes 1–4, TODAY:** redeploy v5 + phone check; 3 email DNS records; first
  2–3 warmup notes
- **Boxes 5–15, this week:** factory install afternoon (Docker, workflows,
  sheets, 3 test rows); AssetForge Night 1 (smoke) + Night 2 (real video);
  flyers to the print shop
- **Boxes 16–21, during warmup:** paste Lane B live — Fiverr gigs, Upwork
  profile, the channel aliases
- **Boxes 22–24, Day 14:** open the taps — first real outreach; the 45-day
  Charm City clock starts
- **Boxes 25–27, steady state:** the daily rhythm; keep score in the tracker;
  upsell delivered clients to `/automation`

The manual behind every box: `../DOCS/MikeBuilds-Production-Flight-Plan.pdf`
(20 pages — corrected machine states, the manual-step audit, phase chapters,
the rules).

## 9. The asset inventory (this repo)

| Asset | Where |
|---|---|
| Website source (buildable) | `../WEBSITE-SOURCE/` |
| Static build v5 + redeploy guide | `../DEPLOY/` |
| Setup Checklist (START HERE) | `../DOCS/MikeBuilds-Setup-Checklist.pdf` |
| Production Flight Plan (the manual) | `../DOCS/MikeBuilds-Production-Flight-Plan.pdf` |
| Phase 2 Offer Sheet (every price) | `../DOCS/MikeBuilds-Phase2-Offer-Sheet.pdf` |
| Free-Stack Sprint Playbook (the $0 stack) | `../DOCS/The-Free-Stack-Sprint-Playbook.pdf` |
| Master Map (8-page estate map) | `../DOCS/Mike-Builds-Master-Map.docx` |
| Business update (probation meeting) | `../DOCS/Business-Development-Update-Michael-Mazique.docx` |
| Traffic Kit + QRs + flyers + tracker | `../MARKETING/Traffic-Kit/` |
| Marketing strategy (consolidated) | `../MARKETING/MARKETING-STRATEGY.md` |
| 2K Sprint marketing kit + copyblocks | `../MARKETING/2K-Sprint-Marketing-Kit/` |
| Sibling-repo entry docs + overviews | `../OTHER-REPOS/` |
| Conversation archive (11 exports + early extracts) | `./CONVERSATION-ARCHIVE/` |

## 10. The education / free stack (why $0 works)

Verified 2026: GitHub Student Pack (Copilot Pro free for verified students;
DigitalOcean + Azure credits with GPU/AI restrictions), Canva Pro 12mo, Figma
Education, Notion Education, MS365 Education — all on the .edu email.
Mapped to the business: DO credit hosts the n8n factory, Copilot Pro speeds
builds, Canva Pro makes the QR flyers, Figma Edu for client mockups, Notion
Edu for the CRM. Full detail: `../DOCS/The-Free-Stack-Sprint-Playbook.pdf`.

## 11. The timeline

| When | What |
|---|---|
| Sep 28, 2026 | Sprint week 1 begins; site build conversations; deliverables v1–v3 |
| Sep 29–30 | Site built (Night Garage v2 approved); v4 bake + Traffic Kit + offer sheet; Playbook PDFs |
| Oct 1 | WGU program starts |
| Oct 3 | Three conversation exports + three repo zips uploaded; v5 hydration fix; Flight Plan; Setup Checklist |
| Oct 4 | State correction (built ≠ set up); sibling handoffs written |
| **Oct 18** | **This package compiled — repo hub assembled (site v5 + all knowledge)** |
| Next | Boxes 1–4 today; factory + AssetForge nights this week |
| Day 14 after warmup start | Taps open, outreach begins, 45-day clock starts |
| ~Nov 23, 2026 | 8-week sprint mark — $2,000 target |
| Black Friday | Personal ceiling target $2–4k |

## 12. If you are an AI (or a human) picking this up cold

Read in this order:

1. `../README.md` — the repo map
2. `../DOCS/MikeBuilds-Setup-Checklist.pdf` — the order of operations
3. `../DOCS/MikeBuilds-Production-Flight-Plan.pdf` — the manual
4. `../OTHER-REPOS/REPOS-AT-A-GLANCE.md` — the estate
5. This file, again, as the index

The full conversation histories behind all of it are archived in
`./CONVERSATION-ARCHIVE/` — consult them only when a decision's *why* is
missing from the documents. The documents are the distilled truth.
