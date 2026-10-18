# Charm City Sites — Project Handoff

**What:** Build-first website business for Baltimore home-service trades
**Owner:** Mike — mikebuilds.tech
**Status at handoff:** System fully built and verified. Pre-production. Two credentials from launch.
**Date of handoff:** 2026-09-28
**Build conversation:** chat history attached separately by owner (session `web-e15a3a9a-9a75-4e64-b32c-a8d954bad4bf`)

This document is written to be read cold. No chat history required.

---

## 1. The business in plain words

The machine builds finished websites for local trade businesses before anyone has talked to them. Plumbers first. It finds the business, generates a complete demo site with their real name and services, puts it live on a free Cloudflare Pages subdomain, and emails the owner a plain note: "Built you something, here's the link, no invoice if you walk." The machine's owner only does what a human should do: answer the phone when someone calls, and accept payment. Everything else runs itself.

The pitch that closes: a missed call is a job handed to the next name on the list. Lead platforms charge $50 a shot to fight three competitors forever. This charges once, and the buyer owns the site outright.

## 2. Numbers (fixed, non-negotiable)

- Site packages: $500 / $650 / $800 — no haggling, prices stated once in writing
- Add-on: $400 missed-call text-back service
- Goal: 3 sites ($1,950) + 1 add-on ($400) = **$2,350 net**
- Window: 45 days from first real outreach (clock starts at outreach, not install day)
- Spend: $0 — free tools only, as a design constraint, not a phase

## 3. What exists in this repo

- `Charm-City-Sites-Business-Plan.pdf` — original plan (planning-era)
- `Charm-City-Sites-Business-Plan-Launch-Edition.pdf` — current-state plan (post-build) + editable cover HTML for both
- `docs/prd-spec-site-factory.md` — the PRD, Phase 1 approved and built
- `charm-city-sites/` — the machine itself:
  - `1-INSTALL-WINDOWS.bat` — one-click install
  - `Start Factory (Windows).bat`, `Open Dashboard (Windows).bat` — daily drivers
  - `WINDOWS.md` — the Windows runbook; `OPERATIONS.md` — what to check daily/weekly
  - `n8n/` — five workflows, import in order: 01-site-factory, 02-lead-machine, 03-outreach, 04-deal-closer, 05-form-alerts
  - `scripts/` — scrape_leads.py, generate_site.py, askbrain.py, ccs_common.py, deploy.sh, handoff.sh, status.sh, keep_alive_wsl.sh
  - `site-template/` — the base every client site is generated from
  - `demo-site/bayview-plumbing-co/` — finished example of output (fictional data)
  - `sheet-templates/` — Leads.csv and Settings.csv headers for the Google Sheets that drive everything
  - `windows/` — wsl-install.sh, sync_kit.sh
  - `factory/` — runtime output (sites/, leads_inbox/, logs/); git-ignored once live

## 4. Architecture, in plain words

One Docker Compose stack on the Windows laptop (Docker Desktop + WSL2 backend):

- **n8n** — the conductor. Sheet row added → lead scraped → copy generated → site built → deployed → email sent → Telegram ping.
- **FreeLLMAPI** — one endpoint blending 34 free AI providers. No API bill.
- **Ollama** — offline fallback if the free providers blink.

Google Sheets is the control panel: add a row, the machine builds. Cloudflare Pages hosts every demo free. FormSubmit handles contact forms on client sites. Telegram is where the machine taps the owner's shoulder.

## 5. The two credentials still owed

1. **Cloudflare account → API token** (does the deploying)
2. **Email credentials → SMTP/app password** (does the outreach)

Placeholders live in `charm-city-sites/factory/env.example.sh`. Nothing else is missing.

## 6. Launch morning, in order

1. Install Docker Desktop, run `1-INSTALL-WINDOWS.bat`
2. Fill the env file with the two credentials when prompted
3. Import the five n8n workflows, in order
4. Paste sheet-templates headers into a new Google Sheet, connect n8n to it
5. Add 3 test rows → watch 3 sites deploy
6. Real lead rows in. Clock starts. Day 1 of 45.

## 7. Where this sits under mikebuilds.tech

mikebuilds.tech is the umbrella brand. Suggested mapping (final call belongs to the consolidation thread):

- `mikebuilds.tech/plumber` — public face of the plumbing offer: the pitch, the demo gallery, the "this exists, it's yours" energy
- `mikebuilds.tech/automation` — the story of the machine itself, as case-study content
- `mikebuilds.tech/realtor` — next niche expansion slot
- Client sites never live under mikebuilds.tech — each gets its own Cloudflare Pages subdomain, or the client's own domain after purchase

## 8. Decisions worth keeping if this play gets cloned

- Fixed prices, stated once, in writing. Trades respect the number.
- Build first, sell second. The demo link is the entire sales pitch.
- $0 tooling as a permanent design constraint.
- If a task is boring and repeatable, it belongs to the machine.
- The human keeps: phone, DMs, the handshake, cashing checks.
- One niche at a time, one metro at a time. Plumbers prove it, then clone it.

## 9. Known edges at handoff

- Gofile bundle links expire (~10 days) — this repo is now the source of truth
- The machine's outreach email is the first touch; phone follow-up is the owner's job
- n8n import order matters (01 → 05)
- `demo-site/` is fictional (Bayview Plumbing Co., 555 number) and safe for public repos
- Before every GitHub push once live: confirm no `.env` or `env.sh` with real credentials is staged — see `.gitignore`
