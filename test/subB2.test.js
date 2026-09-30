import assert from 'node:assert/strict';
import { test } from 'node:test';

import { subB2 } from '../src/subB2.js';

test('subB2 subtracts two numbers', () => {
  assert.equal(subB2(5, 3), 2);
  assert.equal(subB2(10, 4), 6);
});
