import assert from 'node:assert/strict';
import { test } from 'node:test';

import { mul } from '../src/mul.js';

test('mul multiplies two numbers', () => {
  assert.equal(mul(2, 3), 6);
});

test('mul handles negatives and zero', () => {
  assert.equal(mul(-4, 4), -16);
  assert.equal(mul(5, 0), 0);
  assert.equal(mul(-2, -3), 6);
});
