# Charm City Sites — overview

> Full entry point: `HANDOFF.md` (same folder). Business plans:
> `Charm-City-Sites-Business-Plan-Launch-Edition.pdf` (current, post-build) —
> the older `Charm-City-Sites-Business-Plan.pdf` is kept for history.

## What it is (plain words)

A build-first website business for Baltimore home-service trades. The machine
builds finished websites for local businesses **before anyone has talked to
them**. Plumbers first. It finds the business, generates a complete demo site
with their real name and services, puts it live on a free Cloudflare Pages
subdomain, and emails the owner a plain note: *"Built you something, here's the
link, no invoice if you walk."* The owner only does what a human should: answer
the phone, accept payment. Everything else runs itself.

The pitch that closes: a missed call is a job handed to the next name on the
list. Lead platforms charge $50 a shot to fight three competitors forever.
This charges once, and the buyer owns the site outright.

## Numbers (fixed, non-negotiable)

- Site packages: **$500 / $650 / $800** — no haggling, prices stated once in writing
- Add-on: **$400** missed-call text-back service
- Goal: 3 sites ($1,950) + 1 add-on ($400) = **$2,350 net**
- Window: **45 days** from first real outreach (clock starts at outreach, not
  install day)
- Spend: **$0** — free tools only, as a design constraint, not a phase

## What exists in the full repo (not duplicated here)

- `charm-city-sites/` — the machine itself:
  - `1-INSTALL-WINDOWS.bat` — one-click install; `Start Factory (Windows).bat`,
    `Open Dashboard (Windows).bat` — daily drivers
  - `WINDOWS.md` — the Windows runbook; `OPERATIONS.md` — daily/weekly checks
  - `n8n/` — five workflows, import in order: 01-site-factory, 02-lead-machine,
    03-outreach, 04-deal-closer, 05-form-alerts
  - `scripts/` — scrape_leads.py, generate_site.py, askbrain.py, ccs_common.py,
    deploy.sh, handoff.sh, status.sh, keep_alive_wsl.sh
  - `site-template/` — the base every client site is generated from
  - `demo-site/bayview-plumbing-co/` — finished example of the output
  - `sheet-templates/` — Leads.csv / Settings.csv headers for the Google
    Sheets that drive everything
- `docs/prd-spec-site-factory.md` — the PRD, Phase 1 approved and built

## Architecture in plain words

One Docker Compose stack on the Windows laptop (Docker Desktop + WSL2):

- **n8n** — the conductor: sheet row added → lead scraped → copy generated →
  site built → deployed → email sent → Telegram ping
- **FreeLLMAPI** — one endpoint blending 34 free AI providers, no API bill
- **Ollama** — offline fallback if the free providers blink
- **Google Sheets** — the control panel: add a row, the machine builds
- **Cloudflare Pages** — hosts every demo free; **FormSubmit** — contact forms
  on client sites; **Telegram** — where the machine taps the owner's shoulder

## The two credentials still owed (the only gap)

1. Cloudflare account → **API token** (does the deploying)
2. Email credentials → **SMTP/app password** (does the outreach)

Placeholders live in `charm-city-sites/factory/env.example.sh`. Nothing else
is missing.

## Launch morning, in order

1. Install Docker Desktop, run `1-INSTALL-WINDOWS.bat`
2. Fill the env file with the two credentials when prompted
3. Import the five n8n workflows, in order
4. Paste sheet-template headers into a new Google Sheet, connect n8n to it
5. Add 3 test rows → watch 3 sites deploy
6. Real lead rows in. Clock starts. Day 1 of 45.

On the Setup Checklist this is the "factory install afternoon" (boxes 5–9);
full instructions are Phase 2 of the Production Flight Plan
(`../../DOCS/MikeBuilds-Production-Flight-Plan.pdf`).

## Where this sits under mikebuilds.tech

- `mikebuilds.tech/plumber` — public face of the plumbing offer (the pitch,
  the demo gallery, the "this exists, it's yours" energy)
- `mikebuilds.tech/automation` — the story of the machine itself, as case-study
  content
- `mikebuilds.tech/realtor` — next niche expansion slot
- Client sites never live under mikebuilds.tech — each gets its own
  Cloudflare Pages subdomain, or the client's own domain after purchase

## Role in the estate

Stage one of the two-stage funnel (the 2K Sprint's Lane 1). The upsell to
`/automation` offers happens only after site delivery, via the SMS/email
scripts in the Marketing Kit. Already built — do NOT redo it.
