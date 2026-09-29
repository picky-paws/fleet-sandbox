import { test } from 'node:test';
import assert from 'node:assert/strict';

// Fails on purpose: fleet red-path test (T-206, pass 8, A8). Do not fix.
test('red-on-purpose-a8: fails deliberately', () => {
  assert.equal(2 + 2, 5);
});
