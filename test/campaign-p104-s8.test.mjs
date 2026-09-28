// Live-campaign fixture p104-S8: fails on purpose (campaign scenario: red never merges).
import { test } from 'node:test';
import assert from 'node:assert/strict';

test('campaign p104-S8', () => {
  assert.equal(2 + 2, 5);
});
