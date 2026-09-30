import assert from 'node:assert/strict';
import { test } from 'node:test';

import { halfS2 } from '../src/halfS2.js';

test('halfS2 divides by two', () => {
  assert.equal(halfS2(10), 5);
  assert.equal(halfS2(3), 1.5);
});

test('halfS2 handles zero and negatives', () => {
  assert.equal(halfS2(0), 0);
  assert.equal(halfS2(-8), -4);
});
