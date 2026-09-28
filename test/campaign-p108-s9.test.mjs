// Live-campaign fixture p108-S9: passes, after 150000 ms (CI still running when the fleet first reads it).
import { test } from 'node:test';
import assert from 'node:assert/strict';

test('campaign p108-S9', async () => {
  await new Promise((resolve) => setTimeout(resolve, 150000));
  assert.equal(2 + 2, 4);
});
