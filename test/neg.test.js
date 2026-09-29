import assert from 'node:assert/strict';
import { test } from 'node:test';

import { neg } from '../src/neg.js';

test('neg negates a positive number', () => {
  assert.equal(neg(5), -5);
});

test('neg negates a negative number', () => {
  assert.equal(neg(-3), 3);
});

test('neg of zero is negative zero', () => {
  assert.ok(Object.is(neg(0), -0));
});
