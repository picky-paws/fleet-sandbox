import assert from 'node:assert/strict';
import { test } from 'node:test';

import { mulP112 } from '../src/mulP112.js';

test('mulP112 multiplies two numbers', () => {
  assert.equal(mulP112(2, 3), 6);
});

test('mulP112 handles negatives and zero', () => {
  assert.equal(mulP112(-4, 4), -16);
  assert.equal(mulP112(5, 0), 0);
  assert.equal(mulP112(-2, -3), 6);
});
