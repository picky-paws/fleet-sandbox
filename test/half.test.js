import assert from 'node:assert/strict';
import { test } from 'node:test';

import { half } from '../src/half.js';

test('half divides by two', () => {
  assert.equal(half(10), 5);
  assert.equal(half(3), 1.5);
});

test('half handles zero and negatives', () => {
  assert.equal(half(0), 0);
  assert.equal(half(-8), -4);
});
