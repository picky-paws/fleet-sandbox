import assert from 'node:assert/strict';
import { test } from 'node:test';

import { tripled3p1r2 } from '../src/tripled3p1r2.js';

test('tripled3p1r2 triples a number', () => {
  assert.equal(tripled3p1r2(2), 6);
  assert.equal(tripled3p1r2(0), 0);
  assert.equal(tripled3p1r2(-4), -12);
  assert.equal(tripled3p1r2(1.5), 4.5);
});
