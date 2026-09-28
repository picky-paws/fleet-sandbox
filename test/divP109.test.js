import assert from 'node:assert/strict';
import { test } from 'node:test';

import { divP109 } from '../src/divP109.js';

test('divP109 divides two numbers', () => {
  assert.equal(divP109(6, 3), 2);
  assert.equal(divP109(7, 2), 3.5);
});

test('divP109 handles negatives and zero dividend', () => {
  assert.equal(divP109(-8, 2), -4);
  assert.equal(divP109(-9, -3), 3);
  assert.equal(divP109(0, 5), 0);
});

test('divP109 throws RangeError on division by zero', () => {
  assert.throws(() => divP109(1, 0), { name: 'RangeError', message: /Division by zero/ });
  assert.throws(() => divP109(0, 0), { name: 'RangeError', message: /Division by zero/ });
  assert.throws(() => divP109(1, -0), { name: 'RangeError', message: /Division by zero/ });
});
