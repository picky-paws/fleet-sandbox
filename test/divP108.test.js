import assert from 'node:assert/strict';
import { test } from 'node:test';

import { divP108 } from '../src/divP108.js';

test('divP108 divides two numbers', () => {
  assert.equal(divP108(6, 3), 2);
  assert.equal(divP108(7, 2), 3.5);
});

test('divP108 handles negatives and zero dividend', () => {
  assert.equal(divP108(-8, 2), -4);
  assert.equal(divP108(-9, -3), 3);
  assert.equal(divP108(0, 5), 0);
});

test('divP108 throws RangeError on division by zero', () => {
  assert.throws(() => divP108(1, 0), { name: 'RangeError', message: /Division by zero/ });
  assert.throws(() => divP108(0, 0), { name: 'RangeError', message: /Division by zero/ });
  assert.throws(() => divP108(1, -0), { name: 'RangeError', message: /Division by zero/ });
});
