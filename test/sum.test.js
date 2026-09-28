import assert from 'node:assert/strict';
import { test } from 'node:test';

import { sum } from '../src/sum.js';

test('sum adds two numbers', () => {
  assert.equal(sum(2, 3), 5);
});

test('sum handles negatives and zero', () => {
  assert.equal(sum(-4, 4), 0);
  assert.equal(sum(0, 0), 0);
});
