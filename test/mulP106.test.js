import assert from 'node:assert/strict';
import { test } from 'node:test';

import { mulP106 } from '../src/mulP106.js';

test('mulP106 multiplies two numbers', () => {
  assert.equal(mulP106(2, 3), 6);
});

test('mulP106 handles negatives and zero', () => {
  assert.equal(mulP106(-4, 4), -16);
  assert.equal(mulP106(5, 0), 0);
  assert.equal(mulP106(-2, -3), 6);
});
