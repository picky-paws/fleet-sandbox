import assert from 'node:assert/strict';
import { test } from 'node:test';

import { divP114 } from '../src/divP114.js';

test('divP114 divides two numbers', () => {
  assert.equal(divP114(12, 4), 3);
  assert.equal(divP114(7, 2), 3.5);
});

test('divP114 handles zero dividend and negatives', () => {
  assert.equal(divP114(0, 5), 0);
  assert.equal(divP114(-12, 4), -3);
  assert.equal(divP114(-10, -2), 5);
});

test('divP114 throws on division by zero', () => {
  assert.throws(() => divP114(1, 0), RangeError);
  assert.throws(() => divP114(1, -0), RangeError);
});
