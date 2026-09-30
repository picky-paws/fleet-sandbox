import assert from 'node:assert/strict';
import { test } from 'node:test';

import { tripled2p1 } from '../src/tripled2p1.js';

test('tripled2p1 multiplies by three', () => {
  assert.equal(tripled2p1(2), 6);
  assert.equal(tripled2p1(0), 0);
  assert.equal(tripled2p1(-4), -12);
});
