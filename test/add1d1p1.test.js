import assert from 'node:assert/strict';
import { test } from 'node:test';

import { add1d1p1 } from '../src/add1d1p1.js';

test('add1d1p1 adds two numbers plus one', () => {
  assert.equal(add1d1p1(2, 3), 6);
  assert.equal(add1d1p1(0, 0), 1);
  assert.equal(add1d1p1(-1, -1), -1);
  assert.equal(add1d1p1(10, -4), 7);
});
