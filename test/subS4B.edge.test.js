import assert from 'node:assert/strict';
import { test } from 'node:test';

import { subS4B } from '../src/subS4B.js';

test('subS4B negatives and zero', () => {
  assert.equal(subS4B(-2, -3), 1);
  assert.equal(subS4B(-5, 2), -7);
  assert.equal(subS4B(0, 0), 0);
  assert.equal(subS4B(7, 0), 7);
  assert.equal(subS4B(0, 7), -7);
});
