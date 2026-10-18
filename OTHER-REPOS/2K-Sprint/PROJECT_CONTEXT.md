# PROJECT CONTEXT — Mike Builds / The 2K Sprint

> Handoff document for the consolidated business thread.
> Written 2026-10-04. Purpose: give any person (or AI) full working
> context of this project without re-reading the source conversations.
> The two source conversation histories live in
> `3-Source-Files/research/convo1.md` and `convo2.md`.

---

## 1. What this project is

An 8-week money sprint: take Michael from zero followers, zero
portfolio, and zero clients to at least $2,000, on a $0 budget, using
AI-assisted building. The sprint started the week of Sep 28, 2026.
The 8-week mark lands around Nov 23, 2026 — effectively the Black
Friday window (personal target set earlier: $2-4k by Black Friday).

The sprint produced two canonical documents:

1. `1-The-2K-Sprint-Playbook/The_2K_Sprint_Playbook.pdf` — the plan
   (3 lanes, weekly targets, pricing, outreach cadence, 5-stage
   apprenticeship with drills).
2. `2-Automation-Mechanic-Marketing-Kit/Automation_Mechanic_Marketing_Kit.pdf`
   — every piece of marketing copy, ready to paste. The plain-text
   working file is `..._copyblocks.txt` in the same folder.

---

## 2. Owner profile and constraints

- Michael Mazique, Baltimore, MD ("Charm City").
- Full-time sprint: 6+ hours per day.
- WGU program started Oct 1, 2026 — time is split with school.
- Hardware: Windows laptop (a Mac M5 is in transit).
- Working style: vibe coder — builds by directing AI tools, not by
  hand-writing code.
- Budget: $0. Everything runs on legitimate free tiers (self-hosted
  n8n via Docker, free tiers of supported tools). No cracked or
  gray-market services.
- Personal: boyfriend Izzy.

---

## 3. Live assets (finalized as of Oct 4, 2026)

- `mikebuilds.tech` — the main landing page. One roof for every
  business line.
- Hidden audience pages — direct URL only, no links from the
  homepage, so each audience never sees the others' doors:
  - `mikebuilds.tech/plumber`
  - `mikebuilds.tech/realtor`
  - `mikebuilds.tech/automation`
- Branded email on the same domain (the unifying site/email layer).

Architecture rule that governs all of it: **method transfers,
information doesn't.** One door per audience. A plumber should never
land on the realtor pitch. The homepage is the only shared surface,
so it shows no niche entry points at all.

---

## 4. The business roster

| Business | Role in the funnel | Materials |
|---|---|---|
| Charm City Sites | Stage one: local small-biz websites | Already done (separate project). Do NOT redo. |
| Automation Mechanic | Stage two: automation upsells to site clients | This repo (kit + `/automation` page copy + SMS scripts). |
| Gig Ladder (Fiverr / Upwork) | Cash now, first order in 2 weeks | This repo (3 complete Fiverr gigs + Upwork proposal formula). |
| AssetForge | Weekend product lane | Already done (separate project). Do NOT redo. |
| Gumroad products | Deferred to December | Gated by the 2-customer rule (below). |

The earlier confusion ("the other two projects absorbed playbook
elements — how do I integrate the marketing?") was resolved with the
two-stage funnel: existing Charm City materials sell the website
(stage one); after delivery, SMS/email scripts move the client to the
`/automation` offer (stage two). No overlap, no redo, no rebrand.

---

## 5. The three lanes and the numbers

- **Lane A — Automation builds.** n8n workflows for small businesses.
  $400-800 per build, plus $50-100/month retainers. Market anchors
  from research: full setups run $1,000-$3,000; workflow gigs run
  $500-$2,000 on Upwork. Retainers compound — 10 clients at $75/mo
  is $750/mo before any new build.
- **Lane B — Fiverr / Upwork.** Three gigs written and paste-ready in
  the kit. Goal: first order within 2 weeks. Early pricing is set low
  on purpose to harvest first reviews, then raised.
- **Lane C — Digital products.** Locked behind the **2-customer
  rule**: no product gets built until 2 paying customers have asked
  for (or paid for) the underlying service. Gumroad deferred to
  December accordingly.

Expected band by week 8: **$1,600-$2,700** (modeled in the playbook's
revenue chart, three scenarios).

---

## 6. Marketing assets in this repo (kit map)

- §0 — Integration map: the two-stage funnel, which project owns
  which stage.
- §1 — Automation Mechanic service menu: 4 named services with
  prices drawn from the market research.
- §2 — Paste-ready copy for `mikebuilds.tech/automation`.
- §3 — SMS upsell scripts: Day-3 check-in, pivot-after-no,
  monthly-fee objection answer.
- §4 — Fiverr kit: 3 complete gigs (titles, descriptions, packages,
  tags, FAQs), profile blurb, platform rules.
- §5 — Upwork kit: profile copy, 5-line proposal formula, 2 worked
  examples.
- §6 — Two Instagram captions (2,118 and 2,178 characters — near the
  2,200 cap, on purpose), a Reel script, hashtag sets. IG rule:
  no cross-references to other marketing surfaces.
- §7 — Platform verdicts: Substack deferred (triggers: 2 paying
  clients OR weeks 5-6 of the sprint); Gumroad December; 4 free
  replacement channels (Alignable, Nextdoor, local Facebook groups,
  Google Business Profile) + 2 uncommon resources.
- §8 — Weekly rhythm table.
- §9 — Three drills + launch checklist.

All of it is duplicated in `..._copyblocks.txt` with character counts
— that is the daily working file.

---

## 7. Rules of the road (non-negotiable)

- **Outreach safety.** CAN-SPAM compliant (fines up to $46,517 per
  email — researched, not folklore). Real name, real address, opt-out
  honored. 14-day warmup on the new email domain, then max 25
  personalized sends per day. No bought lists.
- **Gray-zone rule.** Legitimate free tiers only. Nothing cracked,
  nothing ToS-violating.
- **2-customer rule.** No product before 2 paying customers.
- **Pricing floors.** Lane A builds never quoted under $400.

---

## 8. Production setup notes (before the first cold email)

1. **Email DNS records.** On the fresh mikebuilds.tech email domain,
   set SPF, DKIM, and DMARC records BEFORE sending any cold outreach.
   A brand-new domain without these lands in spam by default — that
   single oversight can sink the whole Lane A outreach plan.
2. **Warmup.** 14 days of gradual sending before hitting 25/day.
3. **Verify the hidden doors.** Confirm `/plumber`, `/realtor`, and
   `/automation` resolve correctly and are NOT linked from the
   homepage (keep the isolation intact).
4. **Google Business Profile.** Free, and it feeds the local
   discovery channel from kit §7.
5. **Day 1 homework from the playbook:** install Docker Desktop, get
   n8n running locally. Report where you get stuck.

---

## 9. Repo file map

```
MikeBuilds-2K-Sprint/
├── README.md                  <- repo front page, reading order
├── PROJECT_CONTEXT.md         <- this file
├── WORKLOG.md                 <- full decision log of the project
├── 1-The-2K-Sprint-Playbook/  <- the plan (PDF + editable cover)
├── 2-Automation-Mechanic-Marketing-Kit/
│                              <- the words that sell it (PDF, TXT,
│                                 HTML, cover PNG)
└── 3-Source-Files/
    ├── *.py, *.sh             <- build/analysis scripts
    └── research/              <- market research behind every number
        ├── convo1.md, convo2.md  <- the two source histories
        ├── condensed/          <- distilled resource catalogs
        ├── search_*.json      <- market/pricing scans
        └── tool_*.json        <- verified tool repos (n8n, Postiz...)
```

Intermediates (PDF build stages, cover renders) were left out on
purpose. Everything needed to regenerate the documents is in the
scripts.

---

## 10. Where the numbers came from

Every price and platform call in the two PDFs traces to
`3-Source-Files/research/`: 8 market-validation scans (build pricing,
gig pricing, Gumroad products, cold-email rules, automation pricing,
lead-gen pricing, Fiverr automation gigs, Fiverr AI gigs), plus live
verification of the 6 core tool repos (n8n, Scrapling,
changedetection.io, OpenSEO, Postiz, Pipecat). Nothing was guessed.

---

## 11. Change protocol

- Changes or additions to the 2K Sprint itself → return to the
  original sprint conversation (this project's home thread).
- This repo is the canonical artifact store. The consolidation
  thread should treat these files as the source of truth for anything
  sprint-related, and as read-only reference for how Charm City,
  AssetForge, and the Automation Mechanic interlock.
