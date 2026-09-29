import assert from 'node:assert/strict';
import { test } from 'node:test';

import { sub } from '../src/sub.js';

test('sub handles negatives and zero', () => {
  assert.equal(sub(-4, -4), 0);
  assert.equal(sub(0, 0), 0);
  assert.equal(sub(3, 5), -2);
  assert.equal(sub(-2, 3), -5);
  assert.equal(sub(7, 0), 7);
});
