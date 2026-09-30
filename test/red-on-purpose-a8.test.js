import assert from 'node:assert/strict';
import { test } from 'node:test';

// Fails on purpose: fleet red-path test (A8, pass 28). Do not fix.
test('red on purpose (A8)', () => {
  assert.equal(2 + 2, 5);
});
