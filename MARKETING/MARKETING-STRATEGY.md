# MARKETING-STRATEGY.md — every strategy currently on the books

One page to answer: *what are the marketing plans, where does each one live,
and what has actually been launched?* Compiled 2026-10-18.

---

## 0. Where marketing stands today (the honest line)

**Nothing is live yet. No channel is running.** The email warmup has not started,
no flyers are printed, no QR codes are posted, no Fiverr gigs are published, no
outreach has gone out. Everything in this folder is **built and ready to paste**,
waiting on the Setup Checklist order of operations:

- Boxes 5–15 (this week): email warmup begins → flyers go to a print shop
- Boxes 16–21 (during the warmup window): Lane B gets pasted live
- Box 24, Day 14: **the taps open** — first real outreach goes out
- After that: the 30-day traffic calendar runs day by day

The guides (`../../DOCS/`) hold the instructions; this folder holds the ammunition.

---

## 1. The strategy in one picture

```
                    ┌───────────────────────────────┐
                    │        mikebuilds.tech        │
                    │  the porch (brand-only home)  │
                    └───────┬───────┬───────┬───────┘
                            │       │       │      one door per audience —
                    ┌───────▼─┐ ┌───▼─────┐ ┌▼──────────┐   doors never link
                    │ /plumber│ │ /realtor │ │/automation│   to each other
                    └───────┬─┘ └───┬─────┘ └┬──────────┘
                            │       │        │
   STAGE 1 (Charm City) ────┘       │        └──── STAGE 2 (upsell)
   fixed-price site sale            │              Missed-Call Texter,
   $500 / $650 / $800               │              Review Robot, etc.
   + $400 missed-call texter        │
                                    │
   LANES feeding the doors:         │
   A) street + direct (flyers, QR, aliases, phone)
   B) gig ladder (Fiverr / Upwork → portfolio → local authority)
```

The two-stage funnel rule: **Charm City materials sell the website; only after
delivery do the SMS/email scripts move that client to the /automation offer.**
No overlap between the two stages, no rebranding of either.

---

## 2. Lane A — the 30-day traffic engine (Traffic Kit)

The complete street-level plan lives in `Traffic-Kit/MikeBuilds-Traffic-Kit.pdf`:

- **The model** — how a $0-budget service business actually fills a pipeline
  without ads: physical placement + tracked aliases + the phone.
- **The one-number plan** — a single daily activity number to hit; everything
  else is downstream of it. Print it, hit it, ignore the noise.
- **The 30-day calendar** — day-by-day actions for the first month.
- **Three door playbooks** — plumber/HVAC/electrician, realtor, automation:
  where each flyer goes, what each QR points at, what to say when they call.
- **Seven copy-paste scripts** — what to text/email/say at each step, written
  to match the site copy word for word.
- **Keeping score after day 30** — which numbers decide "double down vs stop."

**The QR system** (`Traffic-Kit/qr/` — 14 PNGs, 7 codes × clean + labeled):

| Code | Destination |
|---|---|
| Porch QR | mikebuilds.tech (homepage) |
| Plumber / Realtor / Automation QRs | the door pages |
| vCard QR | contact card (saves Mike to phone) |
| TEXT MIKE QR | opens a blank SMS to (410) 575-4192 — **no prefill message**, works on every phone |
| CALL MIKE QR | dials (410) 575-4192 |

Pure black on white, high error correction, decode-verified at native AND 50%
resolution. Use the labeled versions for direct print, clean versions for
embedding.

**The flyers** (`Traffic-Kit/flyers/` — PDF + editable HTML + PNG preview):
three US-Letter door flyers whose every price matches the live site, each
carrying a door QR + scan-to-text QR + giant phone number. Designed to survive
cheap B&W copies. Send the PDFs straight to a print shop.

**The tracking system**:
- `MikeBuilds-Traffic-Cheat-Sheet.pdf` — all 7 QR destinations + all 15 email
  addresses (3 mailboxes + 12 channel aliases) on one pinned-up page.
- `MikeBuilds-Channel-Tracker.xlsx` — the living tracker: QR inventory, alias
  map, live count formulas. Update as channels go live; when something
  converts, mark the channel — that is the whole attribution strategy.

---

## 3. Lane B — the gig ladder (Fiverr / Upwork)

"Cash now" lane: first order inside 2 weeks, portfolio + reviews compounding.
Everything is pre-written in `2K-Sprint-Marketing-Kit/`:

- **Three complete Fiverr gigs** — titles, descriptions, pricing tiers, tags,
  ready to paste (in the Marketing Kit PDF).
- **The Upwork proposal formula** — the repeatable proposal structure + the
  paste-ready blocks.
- **`Automation_Mechanic_Marketing_Kit_copyblocks.txt`** — the actual working
  file: every piece of copy in plain text with character counts. This is the
  file to work from when pasting gigs and proposals.
- **Platform verdicts** — which platforms were evaluated and ruled out
  (Substack, Gumroad-first, etc.) and what to use instead.

Gig ladder feeds the local business: every completed gig is proof for the
"Automation Mechanic" story on `/automation`.

---

## 4. Pricing reference (what every channel quotes)

Same numbers on site, flyers, and offer sheet — reconciled 2026-10-04:

| Offer | Price |
|---|---|
| Plumber site ladder | $500 / $650 / $800 (built before payment) |
| Realtor packs | $297/mo + $497/mo |
| Missed-Call Texter | $400 |
| Review Robot | $300 |
| Invoice Chaser | $300–500 |
| 24/7 Receptionist | $297/mo |
| Automation Fix (new) | $500 flat |
| Care Plan (new) | $99/mo |

Full offer map, four paths to a $2,000 month, objection handling, payment terms:
`../../DOCS/MikeBuilds-Phase2-Offer-Sheet.pdf`.

---

## 5. The infrastructure underneath

- **Email** — Zoho mailboxes + Cloudflare Email Routing; 12 catch-all aliases
  (google@, yelp@, …) so every channel has its own address. Warmup protocol is
  Phase 1 of the Flight Plan (boxes 5–8 on the Setup Checklist).
- **Domain** — mikebuilds.tech at get.tech; keep renewal there ($29.99/yr —
  Cloudflare Registrar's at-cost .tech runs ~$49–59, so do NOT transfer).
  Re-check prices before Sep 2027.
- **The free stack** — $0 by design: DigitalOcean student credit hosts n8n,
  GitHub Copilot Pro speeds builds, Canva Pro prints QR flyers, Figma Edu for
  client mockups, Notion Edu for the CRM. Full map:
  `../../DOCS/The-Free-Stack-Sprint-Playbook.pdf`.

---

## 6. Targets these strategies serve

- **The 2K Sprint:** $2,000 minimum by ~Nov 23, 2026 (8 weeks from Sep 28).
- **Charm City window:** 3 sites ($1,950) + 1 add-on ($400) = **$2,350 net in
  45 days** from first real outreach.
- **Personal ceiling target:** $2–4k by Black Friday.
- Weekly targets + outreach cadence: `../../OTHER-REPOS/2K-Sprint/The_2K_Sprint_Playbook.pdf`.

---

## 7. Asset map (this folder)

```
MARKETING/
├── MARKETING-STRATEGY.md               ← you are here
├── Traffic-Kit/
│   ├── MikeBuilds-Traffic-Kit.pdf      ← the 30-day playbook (read once)
│   ├── MikeBuilds-Traffic-Cheat-Sheet.pdf  ← pin above the desk
│   ├── MikeBuilds-Channel-Tracker.xlsx ← the living tracker
│   ├── qr/                             ← 14 PNGs (7 codes × clean/labeled)
│   └── flyers/                         ← 3 door flyers (pdf + html + png)
└── 2K-Sprint-Marketing-Kit/
    ├── Automation_Mechanic_Marketing_Kit.pdf        ← 27pp, every channel
    ├── Automation_Mechanic_Marketing_Kit_copyblocks.txt ← paste from THIS
    └── Automation_Mechanic_Marketing_Kit.html       ← editable source
```
