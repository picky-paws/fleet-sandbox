import assert from 'node:assert/strict';
import { test } from 'node:test';

import { mulP115 } from '../src/mulP115.js';

test('mulP115 multiplies two numbers', () => {
  assert.equal(mulP115(3, 4), 12);
  assert.equal(mulP115(2.5, 2), 5);
});

test('mulP115 handles zero and negatives', () => {
  assert.equal(mulP115(0, 7), 0);
  assert.equal(mulP115(-3, 4), -12);
  assert.equal(mulP115(-2, -5), 10);
});
