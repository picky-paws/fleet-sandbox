import assert from 'node:assert/strict';
import { test } from 'node:test';

import { mulP114 } from '../src/mulP114.js';

test('mulP114 multiplies two numbers', () => {
  assert.equal(mulP114(3, 4), 12);
  assert.equal(mulP114(2.5, 2), 5);
});

test('mulP114 handles zero and negatives', () => {
  assert.equal(mulP114(0, 7), 0);
  assert.equal(mulP114(-3, 4), -12);
  assert.equal(mulP114(-2, -5), 10);
});
