import assert from 'node:assert/strict';
import { test } from 'node:test';

import { subA1 } from '../src/subA1.js';

test('subA1 handles negatives and zero', () => {
  assert.equal(subA1(-4, -4), 0);
  assert.equal(subA1(0, 0), 0);
  assert.equal(subA1(3, 5), -2);
  assert.equal(subA1(-2, 3), -5);
  assert.equal(subA1(7, 0), 7);
});
