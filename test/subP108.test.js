import assert from 'node:assert/strict';
import { test } from 'node:test';

import { subP108 } from '../src/subP108.js';

test('subP108 subtracts two numbers', () => {
  assert.equal(subP108(5, 3), 2);
});

test('subP108 handles negatives and zero', () => {
  assert.equal(subP108(3, 5), -2);
  assert.equal(subP108(-4, -4), 0);
  assert.equal(subP108(0, 7), -7);
  assert.equal(subP108(7, 0), 7);
});

test('subP108 is not commutative', () => {
  assert.notEqual(subP108(2, 9), subP108(9, 2));
});
