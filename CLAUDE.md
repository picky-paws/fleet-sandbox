# CLAUDE.md

`picky-paws/fleet-sandbox` is the Picky Paws agent fleet's live-test target: a trivial Node project
(`src/sum.js`, `test/sum.test.js`). Nothing here ships to anyone.

## Rules

- Work on a feature branch and land it as a MERGED PR (squash) — never push `main`.
- Every commit is authored `bakmer30@outlook.com` and carries no `Co-Authored-By` trailer.
- Everything written in this repo is English (US).
- Every PR body carries the six H2 sections of `.github/pull_request_template.md` — Summary,
  Decisions and specs touched, Verification, Not verified, Visible delta declared, Flakes named —
  with real content in Summary, Verification and Not verified. `## Verification` names the exact
  commands run and their real output tail. `node scripts/check-pr-body.mjs` (body on stdin or in
  `$PR_BODY_FILE`) is the same gate CI's `pr-body` job runs.
- Run `node --test` before pushing; CI runs it too. Nothing merges on red.
- Comments carry constraints and rationale only, 1–3 sentences.
- No dependencies: Node's built-ins (`node:test`, `node:assert`) only.
