import assert from 'node:assert/strict';
import { test } from 'node:test';

import { subS4 } from '../src/subS4.js';

test('subS4 handles negatives and zero', () => {
  assert.equal(subS4(-2, -3), 1);
  assert.equal(subS4(-5, 2), -7);
  assert.equal(subS4(0, 0), 0);
  assert.equal(subS4(7, 0), 7);
  assert.equal(subS4(0, 7), -7);
});
