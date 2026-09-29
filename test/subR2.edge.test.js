import assert from 'node:assert/strict';
import { test } from 'node:test';

import { subR2 } from '../src/subR2.js';

test('subR2 handles negatives and zero', () => {
  assert.equal(subR2(-4, -4), 0);
  assert.equal(subR2(0, 0), 0);
  assert.equal(subR2(3, 5), -2);
  assert.equal(subR2(-2, 3), -5);
  assert.equal(subR2(7, 0), 7);
});
