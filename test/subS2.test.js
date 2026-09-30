import assert from 'node:assert/strict';
import { test } from 'node:test';

import { subS2 } from '../src/subS2.js';

test('subS2 subtracts b from a', () => {
  assert.equal(subS2(5, 3), 2);
  assert.equal(subS2(10, 4), 6);
  assert.equal(subS2(3, 5), -2);
});
