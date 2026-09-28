import assert from 'node:assert/strict';
import { test } from 'node:test';

import { mulP107 } from '../src/mulP107.js';

test('mulP107 multiplies two numbers', () => {
  assert.equal(mulP107(2, 3), 6);
});

test('mulP107 handles negatives and zero', () => {
  assert.equal(mulP107(-4, 4), -16);
  assert.equal(mulP107(5, 0), 0);
  assert.equal(mulP107(-2, -3), 6);
});
