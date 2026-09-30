import assert from 'node:assert/strict';
import { test } from 'node:test';

import { subS4 } from '../src/subS4.js';

test('subS4 subtracts basic numbers', () => {
  assert.equal(subS4(5, 3), 2);
  assert.equal(subS4(10, 4), 6);
  assert.equal(subS4(3, 5), -2);
});
