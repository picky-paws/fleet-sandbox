import assert from 'node:assert/strict';
import { test } from 'node:test';

import { decQ5 } from '../src/decQ5.js';

test('decQ5 decrements a positive number', () => {
  assert.equal(decQ5(5), 4);
});

test('decQ5 decrements zero', () => {
  assert.equal(decQ5(0), -1);
});

test('decQ5 decrements a negative number', () => {
  assert.equal(decQ5(-3), -4);
});
