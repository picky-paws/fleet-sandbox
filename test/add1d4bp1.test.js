import assert from 'node:assert/strict';
import { test } from 'node:test';

import { add1d4bp1 } from '../src/add1d4bp1.js';

test('add1d4bp1 adds two numbers plus one', () => {
  assert.equal(add1d4bp1(2, 3), 6);
  assert.equal(add1d4bp1(0, 0), 1);
  assert.equal(add1d4bp1(-1, -1), -1);
  assert.equal(add1d4bp1(10, -5), 6);
});
