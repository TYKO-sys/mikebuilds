# REPOS-AT-A-GLANCE — the whole estate on one page

Four projects, one owner, one umbrella brand (mikebuilds.tech). This hub repo
(**the one you're reading this in**) is the center; the three sibling repos
below keep their full source in their own repositories — this folder carries
their entry documents + business plans so the picture is complete here.

> The original source zips/repos are NOT duplicated here. Each OVERVIEW.md
> points at the real repo materials. If you want any sibling's full source in
> GitHub too, upload its repo separately and link it back here.

---

## The estate

| # | Repo / project | One-liner | Status today | Entry doc in this folder |
|---|---|---|---|---|
| 1 | **Mike Builds** (this repo) | The umbrella: site + doors + brand + this knowledge base | **LIVE** at mikebuilds.tech (v4 live; v5 ready to redeploy) | root `README.md` |
| 2 | **Charm City Sites** | Build-first websites for Baltimore trades | Machine fully built, pre-production; 2 credentials from launch | `Charm-City-Sites/OVERVIEW.md` → `HANDOFF.md` |
| 3 | **AssetForge** | Local content-repurposing engine (video → asset packs) | 32/32 tests green; gated on on-device acceptance (Night 1–2) | `AssetForge/OVERVIEW.md` → `HANDOFF.md` |
| 4 | **The 2K Sprint** | The 8-week money sprint that sequences all of it | Playbook + marketing kit delivered; execution at step zero | `2K-Sprint/OVERVIEW.md` → `PROJECT_CONTEXT.md` |

## How they interlock

```
2K Sprint (the plan, the clock, the targets)
   │
   ├── Charm City Sites ......... Lane 1: local sites, $2,350 / 45 days
   │        └── upsell after delivery ──► Automation Mechanic (/automation door)
   ├── Gig ladder (Fiverr/Upwork)  Lane 2: cash now, first order in 2 weeks
   ├── AssetForge ............... Lane 3: weekend product lane, retainers
   └── mikebuilds.tech .......... the roof over all of it (this repo)
```

The sequencing rule from the sprint: **Charm City and AssetForge are already
built — do NOT redo them.** The sprint's job is to start the machines, not
rebuild them.

## Status vocabulary (read every table with this)

- **Built** = the asset/system exists and passed its tests. It is a deliverable
  sitting on a shelf.
- **Set up and running** = a human has done the install/config/login steps and
  the thing is actually operating.

As of 2026-10-18, the only things set up and running anywhere in the estate:
the website (live on Cloudflare Pages), the Cloudflare/DNS/Pages layer, and the
email (Zoho + aliases). Everything else — every machine, every channel — is
**built, waiting for its setup steps.** The Setup Checklist
(`../../DOCS/MikeBuilds-Setup-Checklist.pdf`) is the order of operations.

## Where the full sources live

| Project | Full source location |
|---|---|
| Mike Builds website | `../../WEBSITE-SOURCE/` — complete, buildable (this repo) |
| Mike Builds static build | `../../DEPLOY/` — v5, deploy-ready (this repo) |
| Charm City Sites | Original zip: `Charm-City-Sites-Complete-Bundle.zip` (charm-city-sites/ factory inside) — keep in its own repo |
| AssetForge | Original zip: inner `assetforge-v1.0.2.zip` (Python project: af.py, src/, prompts/, docker-compose) — keep in its own private repo; `prompts/` is the trade secret |
| 2K Sprint | Original zip: `MikeBuilds_2K_Sprint_REPO.zip` (deliverables + research) |
| Conversation archive | `../../CONTEXT/CONVERSATION-ARCHIVE/` — 11 exported histories |
