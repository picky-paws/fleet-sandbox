import assert from 'node:assert/strict';
import { test } from 'node:test';

import { subP105 } from '../src/subP105.js';

test('subP105 subtracts two numbers', () => {
  assert.equal(subP105(5, 3), 2);
});

test('subP105 handles negatives and zero', () => {
  assert.equal(subP105(3, 5), -2);
  assert.equal(subP105(-4, -4), 0);
  assert.equal(subP105(0, 7), -7);
  assert.equal(subP105(7, 0), 7);
});

test('subP105 is not commutative', () => {
  assert.notEqual(subP105(2, 9), subP105(9, 2));
});
