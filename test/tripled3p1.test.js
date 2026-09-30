import assert from 'node:assert/strict';
import { test } from 'node:test';

import { tripled3p1 } from '../src/tripled3p1.js';

test('tripled3p1 triples a number', () => {
  assert.equal(tripled3p1(2), 6);
  assert.equal(tripled3p1(0), 0);
  assert.equal(tripled3p1(1.5), 4.5);
});

test('tripled3p1 handles negatives', () => {
  assert.equal(tripled3p1(-4), -12);
});
