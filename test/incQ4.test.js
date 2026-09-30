import assert from 'node:assert/strict';
import { test } from 'node:test';

import { incQ4 } from '../src/incQ4.js';

test('incQ4 increments a positive number', () => {
  assert.equal(incQ4(5), 6);
});

test('incQ4 increments zero', () => {
  assert.equal(incQ4(0), 1);
});

test('incQ4 increments a negative number', () => {
  assert.equal(incQ4(-3), -2);
});
