import assert from 'node:assert/strict';
import { test } from 'node:test';

import { divP1 } from '../src/divP1.js';

test('divP1 divides two numbers', () => {
  assert.equal(divP1(12, 4), 3);
  assert.equal(divP1(5, 2), 2.5);
});

test('divP1 handles negatives and zero numerator', () => {
  assert.equal(divP1(-12, 4), -3);
  assert.equal(divP1(-12, -4), 3);
  assert.equal(divP1(0, 5), 0);
});

test('divP1 throws RangeError on division by zero', () => {
  assert.throws(() => divP1(1, 0), RangeError);
});
