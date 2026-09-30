import assert from 'node:assert/strict';
import { test } from 'node:test';

import { subS4B } from '../src/subS4B.js';

test('subS4B basic cases', () => {
  assert.equal(subS4B(5, 3), 2);
  assert.equal(subS4B(10, 4), 6);
  assert.equal(subS4B(3, 5), -2);
});
