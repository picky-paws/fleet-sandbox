import assert from 'node:assert/strict';
import { test } from 'node:test';

import { add1d2p1r2 } from '../src/add1d2p1r2.js';

test('add1d2p1r2 returns a + b + 1', () => {
  assert.equal(add1d2p1r2(2, 3), 6);
  assert.equal(add1d2p1r2(0, 0), 1);
  assert.equal(add1d2p1r2(-4, 1), -2);
  assert.equal(add1d2p1r2(10, -11), 0);
});
