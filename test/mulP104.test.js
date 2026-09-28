import assert from 'node:assert/strict';
import { test } from 'node:test';

import { mulP104 } from '../src/mulP104.js';

test('mulP104 multiplies two numbers', () => {
  assert.equal(mulP104(2, 3), 6);
});

test('mulP104 handles negatives and zero', () => {
  assert.equal(mulP104(-4, 4), -16);
  assert.equal(mulP104(5, 0), 0);
  assert.equal(mulP104(-2, -3), 6);
});
