# HANDOFF — AssetForge v1.0.2 (final state of this build thread)

Written 2026-10-04 at project close-out. This file is the single-page context
for anyone (human or AI) picking this repo up cold — including the
consolidation thread that now owns the business-wide picture. Read this, then
`CLAUDE.md` (engineering rules), then `docs/` in the order listed below.

## 1. What AssetForge is (plain words)

A local content repurposing engine. Feed it a long video/audio file (or a
YouTube URL), and it produces a client-ready pack: show notes, blog post,
X thread, LinkedIn post, Instagram caption, newsletter, quote sheet, clip
recommendations with timecodes, SEO block — every asset checked against the
transcript by a provenance gate so nothing fabricated ships. The same intake
bus runs an academic engine (WGU AI Engineering degree): `af ingest` your
course PDFs, `af ask` cited questions, submit lecture recordings with
`--study` for study packs.

Business shape: $297/mo and $497/mo retainers, first pack free, real-estate
beachhead, ~5 packs/week capacity. $0 fixed software cost by design.

## 2. Where the project stands (honest ledger)

| Proven (receipts exist) | NOT yet proven (stated honestly) |
|---|---|
| Full 8-stage pipeline implemented and unit-tested: 32/32 pytest green, lint gate clean, compile clean | **Stage 1 on-device acceptance** — a real 2-h episode end-to-end. Speed gate (≤30 min, provenance ≥95% pass) is Mac-only; Windows is the slow bridge (hours, overnight) |
| Dual-platform: macOS (mlx-whisper/Metal) + Windows (faster-whisper, CUDA auto-detect) | Stage 2 (Docker: n8n + Postiz) — built, gated OFF until Stage 1 passes |
| Config-not-code engine swaps: STT backend, generator model, generator wire protocol (v1.0.2) | First paying client on the retainer |
| Provenance gate, SQLite ledger, resume-from-failed-stage, idempotent re-runs | Full security audit (Phase 8) — preview only |
| Windows installer (`setup-windows.ps1`), macOS installer (`setup.sh`), both pytest-gated | v1.1 "spaces" (per-client/per-course knowledge) — designed, not built (§6) |

**Next action on this repo:** run `setup-windows.ps1` + `af smoke` on the real
laptop (Night 1), then one real video overnight (Night 2). Everything else
waits on that gate. If it passes: business plan v2 §roadmap picks up from there.

## 3. How to run it (Windows laptop, current hardware)

```powershell
powershell -ExecutionPolicy Bypass -File .\setup-windows.ps1   # ~25 min, once
.venv\Scripts\python.exe af.py smoke                            # end-to-end test
.venv\Scripts\python.exe af.py submit C:\video\episode.mp4 --client acme-realty
.venv\Scripts\python.exe af.py status                           # watch stages
```

macOS equivalent: `bash setup.sh`, then `.venv/bin/python af.py ...`. Full
operator walkthrough (formats accepted, study mode, first-week checklist):
`AssetForge-Operators-Guide-v1.0.1.docx` (lives outside this repo, in the
project download panel — add it to the private repo or keep it local).

## 4. Architecture in 12 lines

1. `intake/inbox/` is the only door in. Files land there; nothing else starts jobs.
2. Split-brain: the host daemon (`af run --watch`) owns all processing stages; n8n (Docker, optional) only fans finished packs out. n8n down ≠ packs lost.
3. Stages: fetch → normalize → clean → transcribe → segment → generate → package → notify. Each stage's state lives in SQLite (`logs/jobs.db`); resume re-runs from the failure, not from zero.
4. `job_id = sha256(source_ref)[:16]` — re-submitting the same source overwrites, never duplicates.
5. Transcription is platform-aware (`mlx:` on Mac, `faster-whisper:` on Windows) and the transcript records which backend ran.
6. Generation is lane-aware (v1.0.2): `AF_GENERATE_API=ollama` (local, default, the client lane) or `openai` (any OpenAI-compatible endpoint). Routing in `src/llm.py`; manifests record `<lane>:<model>` per asset.
7. The provenance gate is a SHIP GATE: every quote/timecode in every asset is checked against the transcript; failures ship flagged, never silently.
8. `exports/<client>/` is the only client-facing surface (assets + manifest.json). Internal paths are scrubbed from it.
9. `prompts/` is the trade-secret prompt library — private repo only.
10. Embeddings (`nomic-embed-text`) stay on local Ollama on both lanes.
11. Memory contract: ONE generation model resident, serialized calls; UVR never concurrent with generation.
12. Free-tier LLM aggregators were evaluated and RULED (blueprint Addendum §5): catalog = research bookmark; router = founder-lane experiments only; client data never leaves the box.

## 5. Environment knobs (`.env`, copy from `.env.example`)

| Var | What it does | Default |
|---|---|---|
| `AF_STT_BACKEND` | `mlx` / `faster-whisper` | platform-detected |
| `AF_STT_MODEL`, `AF_STT_DEVICE` | whisper model / device | `large-v3-turbo`, `auto` |
| `AF_GENERATE_MODEL` | generator model id (low-RAM laptops: `llama3.2:3b`) | `llama3.1:8b-instruct-q4_K_M` |
| `AF_GENERATE_API` | wire protocol: `ollama` / `openai` | `ollama` |
| `AF_GENERATE_BASE_URL` | OpenAI-compatible endpoint (required if lane=openai) | — |
| `AF_GENERATE_API_KEY` | key for that endpoint | — |
| `OLLAMA_HOST` | local or remote (Tailscale) Ollama | `http://localhost:11434` |
| `RESEND_API_KEY`, `NOTIFY_EMAIL_TO` | pack-ready email | console fallback |
| `N8N_WEBHOOK_URL` | fan-out hook (Stage 2) | off |

## 6. What was deliberately deferred (come back to the AssetForge thread for these)

- **v1.1 "spaces"** — one named memory per client/course/product; `af add <anything> --to <space>`; retrieval decides context at generation time; site crawls via firecrawl/changedetection.io. Designed in the operator's guide thread; needs a PRD amendment + build pass.
- **v1.1 doc readers** — `.docx`/`.epub`/`.html` intake (today: pdf/txt/md).
- **v1.2** — clip-cutting from the normalized master, Kokoro TTS lane.
- **Phase 8** full security audit before first paying client.

## 7. Documents map (what lives where)

In-repo (`docs/`): `prd-assetforge-v1.md` (spec + Amendments 1–2 — source of
truth), `free-stack-blueprint.md` ($0 stack + Addendum §5 lane ruling),
`plan-phase3.md` (architecture decisions D1–D6), `windows-bridge.md`
(hardware honesty + escalation), `phase4-uiux-note.md` (UI-less by design).

Outside the repo (project download panel — founder keeps or adds to a private
repo): Business Plan v1 + v2 (v2 = current-state edition), Marketing Kit v1.1
(Fiverr gig, IG captions, DM scripts, first-customer sprint), Operator's
Guide v1.0.1 (the how-to-use manual).

## 8. Business context for the consolidation thread

AssetForge is the engine behind the content-repurposing service lane
(mikebuilds.tech/automation as described by the founder), with the WGU
academic engine riding the same bus for the degree. It is one of several
lanes (plumbing, realtor, main brand site + email domain) consolidated
elsewhere; this repo is self-sufficient and does not depend on the others.
Pricing, beachhead, and go-to-market live in Business Plan v2, not here.
This repo's only gate before revenue: Night 1/2 on-device acceptance above.

## 9. Security notes (read before the GitHub upload)

1. **Make the repo PRIVATE.** `prompts/` is a trade secret, `docs/prd-assetforge-v1.md` contains pricing and strategy. Public = giving away the business.
2. `.env` is gitignored — verify with `git status` before the first push. Keys belong in `.env`, never in code or commits.
3. `intake/`, `work/`, `exports/`, `logs/` are gitignored — client content and job data must never enter git history.
4. Client data rides the local generator lane (§4.6). Free-tier endpoints are for founder experiments only.
