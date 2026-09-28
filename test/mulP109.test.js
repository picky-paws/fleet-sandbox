import assert from 'node:assert/strict';
import { test } from 'node:test';

import { mulP109 } from '../src/mulP109.js';

test('mulP109 multiplies two numbers', () => {
  assert.equal(mulP109(2, 3), 6);
});

test('mulP109 handles negatives and zero', () => {
  assert.equal(mulP109(-4, 4), -16);
  assert.equal(mulP109(5, 0), 0);
  assert.equal(mulP109(-2, -3), 6);
});
