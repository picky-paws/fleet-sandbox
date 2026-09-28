import assert from 'node:assert/strict';
import { test } from 'node:test';

import { divP106 } from '../src/divP106.js';

test('divP106 divides two numbers', () => {
  assert.equal(divP106(6, 3), 2);
  assert.equal(divP106(7, 2), 3.5);
});

test('divP106 handles negatives and zero dividend', () => {
  assert.equal(divP106(-8, 2), -4);
  assert.equal(divP106(-9, -3), 3);
  assert.equal(divP106(0, 5), 0);
});

test('divP106 throws RangeError on division by zero', () => {
  assert.throws(() => divP106(1, 0), { name: 'RangeError', message: /Division by zero/ });
  assert.throws(() => divP106(0, 0), { name: 'RangeError', message: /Division by zero/ });
  assert.throws(() => divP106(1, -0), { name: 'RangeError', message: /Division by zero/ });
});
