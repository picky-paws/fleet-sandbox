import assert from 'node:assert/strict';
import { test } from 'node:test';

import { subA1 } from '../src/subA1.js';

test('subA1 subtracts two numbers', () => {
  assert.equal(subA1(5, 3), 2);
  assert.equal(subA1(10, 4), 6);
});
