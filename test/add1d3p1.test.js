import assert from 'node:assert/strict';
import { test } from 'node:test';

import { add1d3p1 } from '../src/add1d3p1.js';

test('add1d3p1 adds two numbers plus one', () => {
  assert.equal(add1d3p1(2, 3), 6);
  assert.equal(add1d3p1(0, 0), 1);
});

test('add1d3p1 handles negatives', () => {
  assert.equal(add1d3p1(-2, -3), -4);
  assert.equal(add1d3p1(-1, 0), 0);
});
