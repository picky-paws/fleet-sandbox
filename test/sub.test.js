import assert from 'node:assert/strict';
import { test } from 'node:test';

import { sub } from '../src/sub.js';

test('sub subtracts two numbers', () => {
  assert.equal(sub(5, 3), 2);
  assert.equal(sub(10, 4), 6);
});
