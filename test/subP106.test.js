import assert from 'node:assert/strict';
import { test } from 'node:test';

import { subP106 } from '../src/subP106.js';

test('subP106 subtracts two numbers', () => {
  assert.equal(subP106(5, 3), 2);
});

test('subP106 handles negatives and zero', () => {
  assert.equal(subP106(3, 5), -2);
  assert.equal(subP106(-4, -4), 0);
  assert.equal(subP106(0, 7), -7);
  assert.equal(subP106(7, 0), 7);
});

test('subP106 is not commutative', () => {
  assert.notEqual(subP106(2, 9), subP106(9, 2));
});
