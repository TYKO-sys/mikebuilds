# CLAUDE.md — AssetForge

**What this is (2 lines):** AssetForge converts long-form audio/video into client-ready social content packs on a single MacBook Pro (M5, 24GB unified memory). The same intake bus feeds the WGU academic engine (lecture audio -> study notes + Anki decks) — one engine, two outputs, $0 software cost.

## Tech stack (versions that matter)
- Python 3.12 in `.venv/` managed by `uv`
- STT is platform-aware: `mlx-whisper` (large-v3-turbo, Metal) on macOS; `faster-whisper` (CTranslate2, CPU int8 / CUDA auto) on Windows/Linux. `AF_STT_BACKEND` overrides; the transcript records which backend ran.
- Generator wire protocol is lane-aware (v1.0.2, blueprint Addendum §5): `AF_GENERATE_API=ollama` (default — local, the client lane) or `openai` (any OpenAI-compatible endpoint via `AF_GENERATE_BASE_URL` + `AF_GENERATE_API_KEY`, e.g. `https://api.groq.com/openai/v1`). Routing lives in `src/llm.py`; embeddings stay on local Ollama on both lanes; every manifest records `<lane>:<model>` honestly. Client data rides the ollama lane — never route client transcripts through free tiers.
- Ollama: `llama3.1:8b-instruct-q4_K_M` (generation), `llama3.2:3b` (routing + low-RAM laptop tier via `AF_GENERATE_MODEL`), `nomic-embed-text` (embeddings)
- `Kokoro-82M` TTS (v1.1), UVR (stem cleanup), `yt-dlp` + FFmpeg (ingest)
- Setup: `setup.sh` (macOS/Homebrew) or `setup-windows.ps1` (winget) — daemon: launchd or `run-daemon.bat`
- n8n + Postiz via Docker Compose (Stage 2 — do not start before Stage 1 passes)
- SQLite `logs/jobs.db` job ledger; Tailscale for phone/watch intake; Resend for notifications

## Commands
- `bash setup.sh` — one-time: deps, models, folders, daemon, tests, git init
- `af status` (alias: `.venv/bin/python af.py`) — job table; `make ps` adds Ollama residency + daemon state
- `af submit <file|url> --client <name> [--music] [--study]` — drop a job into the bus
- `af run --watch` — the daemon (installed as launchd agent `com.assetforge.watch`)
- `af smoke` — on-device end-to-end test (macOS `say` voice → pack)
- `af ingest <dir>` / `af ask "..."` — academic engine (Chroma `wgu_knowledge`)
- `make test` — pytest; `make lint` — ruff

## Architecture — where things live and why
- `intake/inbox/` is the data bus. Every job starts life as a file here. No job starts any other way.
- **Split-brain orchestration (Amendment 2):** the HOST daemon (`af run --watch`, launchd) owns every Metal stage — fetch → normalize → clean → transcribe → segment → generate → package. n8n (Docker) owns post-pack fan-out only, via an optional localhost webhook. If n8n is down, packs still complete.
- `work/<job_id>/` holds per-stage artifacts; `job_id = sha256(source_ref)[:16]`. Resume = re-run from the failed stage (`af resume <job_id>`).
- `exports/<client>/YYYY-MM-DD-<slug>/` is the only client-facing surface (assets/ + manifest.json + postiz-outbox.json). Internal artifacts never leak into it.
- `prompts/` is the trade-secret prompt library. Private repo only. Never show clients; never publish. Prompt version = sha256[:8], recorded per asset in every manifest.
- `src/ingest` (watch/fetch), `src/pipeline` (normalize/clean/transcribe/segment), `src/generate` (assets + provenance gate), `src/package` (manifest/outbox), `src/notify` (email/webhook), `src/academic` (RAG ingest + ask).
- Stage state lives in the SQLite ledger (`jobs`, `stage_events`); the manifest records provenance verdicts per asset.

## Hard rules (non-negotiables)
- $0 fixed cost. No paid API, service, or subscription enters without explicit founder sign-off.
- Never commit `.env`, `intake/`, `work/`, `exports/`, `logs/`, or client content. All gitignored.
- Every generated asset carries provenance (source ref + timestamp range). No provenance, no ship.
- Idempotency: chunk/job IDs are content hashes; re-runs overwrite, never duplicate.
- The spec is the source of truth (`docs/prd-assetforge-v1.md`). If code must deviate, amend the spec first.
- One generation model resident in Ollama at a time (plus the embedder). Never run UVR and generation concurrently — 24GB ceiling.

## Gotchas a new engineer hits in week 1
- First Ollama call after idle cold-loads for ~10s. `OLLAMA_KEEP_ALIVE=1h` in env prevents repeat hits. launchd does NOT read `.zshrc` — setup.sh also `launchctl setenv`s the vars. On Windows, `setx` only reaches NEW processes — restart the Ollama tray app after setup.
- Docker cannot touch Metal. mlx-whisper + Ollama MUST run on the host daemon; never move transcribe/generate into a container. On Windows, faster-whisper runs in-process on the host too — same rule, same reason.
- Windows laptop tier: under 12 GB RAM the generator must drop to `llama3.2:3b` (`AF_GENERATE_MODEL` in `.env`); CPU int8 transcription of a 2-h episode takes hours, not minutes — schedule overnight, see `docs/windows-bridge.md`.
- Swapping the generator is config-not-code: `AF_GENERATE_MODEL` swaps the model, `AF_GENERATE_API` swaps the wire (local Ollama ↔ any OpenAI-compatible endpoint). The manifest records which lane+model produced every asset — check it, don't guess. A misconfigured `AF_GENERATE_API` fails fast at startup (config refuses to load) — read the error, fix `.env`.
- Chroma metadata values are scalars only — arrays are serialized as comma-joined strings and split client-side.
- `yt-dlp` breaks whenever a platform changes; pin the version, update deliberately, never mid-week.
- Whisper episodes >100 min are chunked into 20-min windows with 30-s overlap; stitching dedupes by (word, ±1.2s) — see `merge_words`.
- The provenance gate is a ship gate: assets with fabricated quotes/timecodes ship flagged, never silently.
- `n8n` Sustainable Use License: free for internal business use; embedding/reselling n8n itself is prohibited.

## SDLC status board
| Phase | State | Artifact |
|---|---|---|
| 1 PRD | DONE (approved + Amendments 1–2) | `docs/prd-assetforge-v1.md` |
| 2 CLAUDE.md/scaffold | DONE | this file |
| 3 Plan Mode | DONE | `docs/plan-phase3.md` |
| 4 UI/UX | DONE (UI-less by design) | `docs/phase4-uiux-note.md` |
| 5 Implementation | DONE (v1.0.2 dual-platform macOS+Windows + generator protocol lane, 32/32 unit tests green) | `src/*`, `src/llm.py`, `af.py`, `setup-windows.ps1`, `docs/windows-bridge.md` |
| 6 MCP | deferred (not applicable to v1 CLI) | — |
| 7 Database | DONE (SQLite ledger embedded) | `src/ledger.py` |
| 8 Security audit | preview in plan §7; full pass before first client | — |
| 9–10 Debug/E2E | `af smoke` = on-device E2E; run before Stage 2 | — |
| 11–13 Dead code/Git/Guardrails | git init automated; review pending | — |
| 14 Skills | post-revenue | — |
