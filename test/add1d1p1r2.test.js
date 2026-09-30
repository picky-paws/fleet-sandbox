import assert from 'node:assert/strict';
import { test } from 'node:test';

import { add1d1p1r2 } from '../src/add1d1p1r2.js';

test('add1d1p1r2 returns a + b + 1', () => {
  assert.equal(add1d1p1r2(2, 3), 6);
  assert.equal(add1d1p1r2(0, 0), 1);
  assert.equal(add1d1p1r2(-1, -1), -1);
  assert.equal(add1d1p1r2(-5, 4), 0);
});
