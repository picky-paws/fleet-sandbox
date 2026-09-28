import assert from 'node:assert/strict';
import { test } from 'node:test';

import { subP104 } from '../src/subP104.js';

test('subP104 subtracts two numbers', () => {
  assert.equal(subP104(5, 3), 2);
});

test('subP104 handles negatives and zero', () => {
  assert.equal(subP104(3, 5), -2);
  assert.equal(subP104(-4, -4), 0);
  assert.equal(subP104(0, 7), -7);
  assert.equal(subP104(7, 0), 7);
});

test('subP104 is not commutative', () => {
  assert.notEqual(subP104(2, 9), subP104(9, 2));
});
