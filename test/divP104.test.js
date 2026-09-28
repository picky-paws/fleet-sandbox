import assert from 'node:assert/strict';
import { test } from 'node:test';

import { divP104 } from '../src/divP104.js';

test('divP104 divides two numbers', () => {
  assert.equal(divP104(6, 3), 2);
  assert.equal(divP104(7, 2), 3.5);
});

test('divP104 handles negatives and zero dividend', () => {
  assert.equal(divP104(-8, 2), -4);
  assert.equal(divP104(-9, -3), 3);
  assert.equal(divP104(0, 5), 0);
});

test('divP104 throws RangeError on division by zero', () => {
  assert.throws(() => divP104(1, 0), { name: 'RangeError', message: /Division by zero/ });
  assert.throws(() => divP104(0, 0), { name: 'RangeError', message: /Division by zero/ });
  assert.throws(() => divP104(1, -0), { name: 'RangeError', message: /Division by zero/ });
});
