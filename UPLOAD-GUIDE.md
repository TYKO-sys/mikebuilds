# How to get this package onto GitHub

You downloaded `MikeBuilds-GitHub-Repo-2026-10-18.zip`. Everything below assumes
you extracted it into an empty folder (for example `mikebuilds/`). The contents of
that folder ARE the repo — no wrapper folder needed.

**Create the repo as PRIVATE.** See the warning in `README.md` — business plans,
pricing, and contact details live here.

---

## Option A — web browser, no tools (easiest)

1. Log in at github.com → click **+** (top right) → **New repository**.
2. Name it `mikebuilds`, choose **Private**, do **not** add a README (this package
   already has one) → **Create repository**.
3. On the fresh empty repo page, click **"uploading an existing file"**.
4. Drag the files and folders from your extracted folder into the browser window.

**Important: drag one top-level folder at a time.** GitHub's web upload caps a
single drag at 100 files, and `WEBSITE-SOURCE` alone has ~25 while `DEPLOY` has ~50.
Drag in this order, each as its own drag:

1. `README.md`, `.gitignore`, `UPLOAD-GUIDE.md` (the loose files)
2. `WEBSITE-SOURCE/` (~25 files)
3. `DEPLOY/` (~50 files)
4. `DOCS/` (7 files)
5. `MARKETING/` (~30 files)
6. `OTHER-REPOS/` (~12 files)
7. `CONTEXT/` (~18 files)

5. Wait for the upload to finish → write a commit message like `Initial upload —
   site v5 + full business estate` → **Commit changes**.

Note: the drag-and-drop limit is why nothing here needs more than ~50 files per
folder. If a drag ever gets refused, split it into two smaller drags.

## Option B — git command line (best, one-time setup)

Open a terminal in the extracted folder:

```bash
git init
git add .
git commit -m "Initial upload — site v5 + full business estate"
git branch -M main
git remote add origin https://github.com/YOUR-NAME/mikebuilds.git
git push -u origin main
```

Create the empty private repo on github.com first (step 1–2 above) so the
`git remote` URL exists. When prompted, log in with your browser or a personal
access token.

## Option C — GitHub Desktop

GitHub Desktop → **File → Add Local Repository** → point it at the extracted
folder → it will offer to initialize → then **Publish repository** → name
`mikebuilds`, check **Keep this code private** → Publish.

---

## After the upload

- Pin-check the repo page renders `README.md` (it should show the repo map table).
- Confirm `.gitignore` uploaded (visible as a hidden file — click "Add file →
  Create new file" and type `.gitignore` to verify it already exists; GitHub will
  show you the existing one).
- The two zip-inside-zip artifacts (`DEPLOY/mikebuilds-site-static-v5.zip`) are
  fine as repo files. If you later want them downloadable as proper release
  assets: repo → **Releases → Draft a new release** → attach the zip there.

## Keeping it updated

Any time the site or docs change in your working environment, re-download or
re-copy the changed folder and commit again:

```bash
git add .
git commit -m "Update site build to <version>"
git push
```
