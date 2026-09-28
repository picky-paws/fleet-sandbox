import assert from 'node:assert/strict';
import { test } from 'node:test';

import { mulP105 } from '../src/mulP105.js';

test('mulP105 multiplies two numbers', () => {
  assert.equal(mulP105(2, 3), 6);
});

test('mulP105 handles negatives and zero', () => {
  assert.equal(mulP105(-4, 4), -16);
  assert.equal(mulP105(5, 0), 0);
  assert.equal(mulP105(-2, -3), 6);
});
