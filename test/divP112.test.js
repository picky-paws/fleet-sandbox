import assert from 'node:assert/strict';
import { test } from 'node:test';

import { divP112 } from '../src/divP112.js';

test('divP112 divides two numbers', () => {
  assert.equal(divP112(6, 3), 2);
  assert.equal(divP112(7, 2), 3.5);
});

test('divP112 handles negatives and zero dividend', () => {
  assert.equal(divP112(-8, 4), -2);
  assert.equal(divP112(-9, -3), 3);
  assert.equal(divP112(0, 5), 0);
});

test('divP112 throws on division by zero', () => {
  assert.throws(() => divP112(1, 0), RangeError);
});
