// Live-campaign fixture p8-A8: fails on purpose (campaign scenario: red never merges).
import { test } from 'node:test';
import assert from 'node:assert/strict';

test('campaign p8-A8', () => {
  assert.equal(2 + 2, 5);
});
