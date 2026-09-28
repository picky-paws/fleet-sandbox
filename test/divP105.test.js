import assert from 'node:assert/strict';
import { test } from 'node:test';

import { divP105 } from '../src/divP105.js';

test('divP105 divides two numbers', () => {
  assert.equal(divP105(6, 3), 2);
  assert.equal(divP105(7, 2), 3.5);
});

test('divP105 handles negatives and zero dividend', () => {
  assert.equal(divP105(-8, 2), -4);
  assert.equal(divP105(-9, -3), 3);
  assert.equal(divP105(0, 5), 0);
});

test('divP105 throws RangeError on division by zero', () => {
  assert.throws(() => divP105(1, 0), { name: 'RangeError', message: /Division by zero/ });
  assert.throws(() => divP105(0, 0), { name: 'RangeError', message: /Division by zero/ });
  assert.throws(() => divP105(1, -0), { name: 'RangeError', message: /Division by zero/ });
});
