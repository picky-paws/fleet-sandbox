// Live-campaign fixture p103-S8: fails on purpose (campaign scenario: red never merges).
import { test } from 'node:test';
import assert from 'node:assert/strict';

test('campaign p103-S8', () => {
  assert.equal(2 + 2, 5);
});
