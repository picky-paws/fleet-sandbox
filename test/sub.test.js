import assert from 'node:assert/strict';
import { test } from 'node:test';

import { sub } from '../src/sub.js';

test('sub subtracts two numbers', () => {
  assert.equal(sub(5, 3), 2);
});

test('sub handles negatives and zero', () => {
  assert.equal(sub(3, 5), -2);
  assert.equal(sub(-4, -4), 0);
  assert.equal(sub(0, 7), -7);
  assert.equal(sub(7, 0), 7);
});

test('sub is not commutative', () => {
  assert.notEqual(sub(2, 9), sub(9, 2));
});
