import assert from 'node:assert/strict';
import { test } from 'node:test';

import { subS2 } from '../src/subS2.js';

test('subS2 handles negatives', () => {
  assert.equal(subS2(-2, -3), 1);
  assert.equal(subS2(-5, 3), -8);
});

test('subS2 handles zero', () => {
  assert.equal(subS2(0, 0), 0);
  assert.equal(subS2(7, 0), 7);
  assert.equal(subS2(0, 7), -7);
});
