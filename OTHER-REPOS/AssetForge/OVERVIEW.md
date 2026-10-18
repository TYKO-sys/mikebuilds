# AssetForge — overview

> Full entry point: `HANDOFF.md` (same folder) — read that, then `CLAUDE.md`
> (engineering rules). This overview is the orientation, not the manual.
> Business plan: `AssetForge-Business-Plan-v2.pdf`. Marketing kit:
> `assetforge-marketing-kit-v1.md`.

## What it is (plain words)

A local content-repurposing engine. Feed it a long video/audio file (or a
YouTube URL) and it produces a client-ready pack: show notes, blog post, X
thread, LinkedIn post, Instagram caption, newsletter, quote sheet, clip
recommendations with timecodes, SEO block — every asset checked against the
transcript by a **provenance gate** so nothing fabricated ships. The same intake
bus runs an academic engine (WGU AI Engineering degree): ingest course PDFs,
ask cited questions, submit lecture recordings with `--study` for study packs.

## Business shape

- Retainers: **$297/mo and $497/mo**, first pack free
- Beachhead: real estate (listing videos → content packs)
- Capacity: ~5 packs/week at current hardware
- Fixed software cost: **$0 by design** (local models via Ollama)

## Where it stands (honest ledger)

**Proven, receipts exist:**
- Full 8-stage pipeline implemented and unit-tested — 32/32 pytest green, lint
  gate clean, compile clean
- Dual-platform: macOS (mlx-whisper/Metal) + Windows (faster-whisper, CUDA
  auto-detect)
- Config-not-code engine swaps: STT backend, generator model, wire protocol
- Provenance gate, SQLite ledger, resume-from-failed-stage, idempotent re-runs
- Windows + macOS installers, both pytest-gated

**NOT yet proven:**
- Stage 1 on-device acceptance — a real 2-hour episode end-to-end. Speed gate
  (≤30 min, provenance ≥95%) is Mac-only; Windows is the slow bridge (hours,
  overnight)
- Stage 2 (Docker: n8n + Postiz) — built, gated OFF until Stage 1 passes
- First paying client on the retainer
- v1.1 "spaces" (per-client/per-course knowledge) — designed, not built

## Next action on this repo

Run `setup-windows.ps1` + `af smoke` on the real laptop (**Night 1**), then one
real video overnight (**Night 2**). Everything else waits on that gate. On the
Setup Checklist these are boxes 10–11; the full instructions are Phase 3 of the
Production Flight Plan (`../../DOCS/MikeBuilds-Production-Flight-Plan.pdf`).

## How to run it (Windows laptop)

```powershell
powershell -ExecutionPolicy Bypass -File .\setup-windows.ps1   # ~25 min, once
.venv\Scripts\python.exe af.py smoke                            # end-to-end test
.venv\Scripts\python.exe af.py submit C:\video\episode.mp4 --client acme-realty
.venv\Scripts\python.exe af.py status                           # watch stages
```

macOS: `bash setup.sh`, then `.venv/bin/python af.py ...`.

## Architecture in six lines

1. `intake/inbox/` is the only door in — files land there, nothing else starts jobs.
2. Split-brain: the host daemon (`af run --watch`) owns all processing; n8n
   (Docker, optional) only fans finished packs out. n8n down ≠ packs lost.
3. Stages: fetch → normalize → clean → transcribe → segment → generate →
   package → notify; state lives in SQLite, resume re-runs from the failure.
4. `job_id = sha256(source_ref)[:16]` — re-submitting the same source
   overwrites, never duplicates.
5. Generation is lane-aware: `AF_GENERATE_API=ollama` (local, client lane,
   default) or `openai` (any compatible endpoint). Client data never leaves the box.
6. `exports/<client>/` is the only client-facing surface; `prompts/` is the
   trade-secret library — **private repo only**.

## Role in the estate

The weekend product lane of the 2K Sprint (Lane 3). Not part of Charm City's
stage-one/stage-two funnel — it stands alone on retainers. Do not redo it; it
is built. Its only blocker is the on-device gate above.
