import assert from 'node:assert/strict';
import { test } from 'node:test';

import { pow } from '../src/pow.js';

test('pow raises a to the power b', () => {
  assert.equal(pow(2, 3), 8);
});

test('pow handles zero and negative exponents', () => {
  assert.equal(pow(5, 0), 1);
  assert.equal(pow(2, -1), 0.5);
  assert.equal(pow(-2, 2), 4);
});
