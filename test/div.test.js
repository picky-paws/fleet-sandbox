import assert from 'node:assert/strict';
import { test } from 'node:test';

import { div } from '../src/div.js';

test('div divides two numbers', () => {
  assert.equal(div(6, 3), 2);
  assert.equal(div(7, 2), 3.5);
});

test('div handles negatives and zero dividend', () => {
  assert.equal(div(-8, 2), -4);
  assert.equal(div(-9, -3), 3);
  assert.equal(div(0, 5), 0);
});

test('div throws RangeError on division by zero', () => {
  assert.throws(() => div(1, 0), { name: 'RangeError', message: /Division by zero/ });
  assert.throws(() => div(0, 0), { name: 'RangeError', message: /Division by zero/ });
  assert.throws(() => div(1, -0), { name: 'RangeError', message: /Division by zero/ });
});
