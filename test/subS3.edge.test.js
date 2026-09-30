import assert from 'node:assert/strict';
import { test } from 'node:test';

import { subS3 } from '../src/subS3.js';

test('subS3 handles negatives', () => {
  assert.equal(subS3(-2, -3), 1);
  assert.equal(subS3(-2, 3), -5);
});

test('subS3 handles zero', () => {
  assert.equal(subS3(0, 0), 0);
  assert.equal(subS3(0, 7), -7);
  assert.equal(subS3(7, 0), 7);
});
