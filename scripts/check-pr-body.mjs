#!/usr/bin/env node
// A copy of picky-paws/webapp's `scripts/check-pr-body.mjs` (the CI `pr-body` gate), identical
// below this header: the fleet's builder `gh` shim runs `PR_BODY_FILE=<file> node
// scripts/check-pr-body.mjs` on every `gh pr create`/`gh pr edit` body and refuses only on a
// non-zero exit whose output carries `check-pr-body: FAIL — <problem>`. Every PR body must carry
// the six H2 sections of .github/pull_request_template.md, and Summary, Verification and Not
// verified must hold real content, not just the template's HTML-comment prompt.
//
// Reads the body from $PR_BODY_FILE (a path — CI writes the PR body there to avoid an
// injection-prone inline `run:` interpolation) or, with no such env var, from stdin.
import { readFileSync } from "node:fs";

export const REQUIRED_SECTIONS = [
  "Summary",
  "Decisions and specs touched",
  "Verification",
  "Not verified",
  "Visible delta declared",
  "Flakes named",
];

// "none"/"nothing"/"not a UI change" are legitimate content for the other
// three sections — only these three must show actual work was done.
export const CONTENT_REQUIRED_SECTIONS = ["Summary", "Verification", "Not verified"];

// Splits a PR body into { heading -> raw text } by H2 (`## Heading`) lines,
// in source order. Content before the first H2, and any H1/H3+ heading, is
// not a section boundary. A repeated heading keeps its LAST occurrence.
export function parseSections(body) {
  const sections = new Map();
  let current = null;
  let buf = [];
  for (const line of body.split("\n")) {
    const match = /^##[ \t]+(.+?)[ \t]*$/.exec(line);
    if (match) {
      if (current !== null) sections.set(current, buf.join("\n"));
      current = match[1].trim();
      buf = [];
    } else if (current !== null) {
      buf.push(line);
    }
  }
  if (current !== null) sections.set(current, buf.join("\n"));
  return sections;
}

// True once HTML comments (including multi-line ones) and blank lines are
// stripped and something is still left — i.e. the template's own prompt
// comment alone does not count as content.
export function hasRealContent(text) {
  const withoutComments = text.replace(/<!--[\s\S]*?-->/g, "");
  return withoutComments.split("\n").some((line) => line.trim().length > 0);
}

// Returns null when `body` passes the gate, or a string naming the first
// problem found (a missing heading, checked in template order; then an
// empty required section).
export function checkBody(body) {
  const sections = parseSections(body);
  for (const heading of REQUIRED_SECTIONS) {
    if (!sections.has(heading)) return `missing section: "## ${heading}"`;
  }
  for (const heading of CONTENT_REQUIRED_SECTIONS) {
    if (!hasRealContent(sections.get(heading))) {
      return `section "## ${heading}" has no content (comment-only or blank)`;
    }
  }
  return null;
}

function readBody() {
  const filePath = process.env.PR_BODY_FILE;
  if (filePath) return readFileSync(filePath, "utf8");
  return readFileSync(0, "utf8");
}

function main() {
  const problem = checkBody(readBody());
  if (problem) {
    console.error(`check-pr-body: FAIL — ${problem}`);
    process.exit(1);
  }
  console.log("check-pr-body: OK — all six sections present, Summary/Verification/Not verified carry content.");
}

// Only run when invoked directly (`node check-pr-body.mjs`), not when
// imported by the test suite.
if (import.meta.url === `file://${process.argv[1]}`) {
  main();
}
