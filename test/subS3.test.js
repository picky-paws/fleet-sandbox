import assert from 'node:assert/strict';
import { test } from 'node:test';

import { subS3 } from '../src/subS3.js';

test('subS3 subtracts b from a', () => {
  assert.equal(subS3(5, 3), 2);
  assert.equal(subS3(10, 10), 0);
  assert.equal(subS3(3, 5), -2);
});
