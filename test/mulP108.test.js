import assert from 'node:assert/strict';
import { test } from 'node:test';

import { mulP108 } from '../src/mulP108.js';

test('mulP108 multiplies two numbers', () => {
  assert.equal(mulP108(2, 3), 6);
});

test('mulP108 handles negatives and zero', () => {
  assert.equal(mulP108(-4, 4), -16);
  assert.equal(mulP108(5, 0), 0);
  assert.equal(mulP108(-2, -3), 6);
});
