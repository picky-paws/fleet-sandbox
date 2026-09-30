import assert from 'node:assert/strict';
import { test } from 'node:test';

import { add1d2p1 } from '../src/add1d2p1.js';

test('add1d2p1 adds two numbers plus one', () => {
  assert.equal(add1d2p1(2, 3), 6);
  assert.equal(add1d2p1(0, 0), 1);
  assert.equal(add1d2p1(-1, -1), -1);
});
