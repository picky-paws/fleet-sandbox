# fleet-sandbox

The Picky Paws agent fleet's live-test target. In TEST mode the fleet's builders branch, change,
open PRs, pass CI, get reviewed, merge and «deploy» here instead of in `picky-paws/webapp`, so the
whole PR pipeline can be exercised end to end on real GitHub without touching the store.

It holds only trivial code on purpose: `src/sum.js` and its `node --test` suite.

`src/sub.js` exports `sub(a, b)`, which returns `a − b`.

`src/subR2.js` exports `subR2(a, b)`, which returns `a − b`.

`src/subS2.js` exports `subS2(a, b)`, which returns `a − b`.

`src/subS3.js` exports `subS3(a, b)`, which returns `a − b`.

`src/subS4.js` exports `subS4(a, b)`, which returns `a − b`.

`src/subS4B.js` exports `subS4B(a, b)`, which returns `a − b`.

`src/subA1.js` exports `subA1(a, b)`, which returns `a − b`.

`src/subB2.js` exports `subB2(a, b)`, which returns `a − b`.

## What runs

- `CI` (`.github/workflows/ci.yml`, every pull request): `test` runs `node --test`; `pr-body`
  checks the PR body with `scripts/check-pr-body.mjs` (the six H2 sections of
  `.github/pull_request_template.md`).
- `Main` (`.github/workflows/main.yml`, every push to `main`): the same tests, then a `deploy` job
  that only echoes the commit — the fleet's deploy wait keys on a workflow named `Main`.
- `CI events` (`.github/workflows/ci-events.yml`): after every `CI` or `Main` run completes,
  whatever its conclusion, the Fleet Ops bot posts one strict `ci_run_completed` line to the
  fleet's test channel — the fleet's fast wake-up path; GitHub stays authoritative.

## Local

```sh
node --test
printf "%s" "$BODY" | node scripts/check-pr-body.mjs   # the CI pr-body gate, locally
```

The CI line for this repo lands in the fleet test channel (`#fleet-pruebas`).

ADR-088 smoke A: a line written outside the fleet.
