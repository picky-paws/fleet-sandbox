import assert from 'node:assert/strict';
import { test } from 'node:test';

import { subP109 } from '../src/subP109.js';

test('subP109 subtracts two numbers', () => {
  assert.equal(subP109(5, 3), 2);
});

test('subP109 handles negatives and zero', () => {
  assert.equal(subP109(3, 5), -2);
  assert.equal(subP109(-4, -4), 0);
  assert.equal(subP109(0, 7), -7);
  assert.equal(subP109(7, 0), 7);
});

test('subP109 is not commutative', () => {
  assert.notEqual(subP109(2, 9), subP109(9, 2));
});
