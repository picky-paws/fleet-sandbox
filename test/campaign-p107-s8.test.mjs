// Live-campaign fixture p107-S8: fails on purpose (campaign scenario: red never merges).
import { test } from 'node:test';
import assert from 'node:assert/strict';

test('campaign p107-S8', () => {
  assert.equal(2 + 2, 5);
});
