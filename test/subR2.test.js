import assert from 'node:assert/strict';
import { test } from 'node:test';

import { subR2 } from '../src/subR2.js';

test('subR2 subtracts two numbers', () => {
  assert.equal(subR2(5, 3), 2);
  assert.equal(subR2(10, 4), 6);
});
