import assert from 'node:assert/strict';
import { test } from 'node:test';

import { subB2 } from '../src/subB2.js';

test('subB2 handles negatives and zero', () => {
  assert.equal(subB2(-2, -5), 3);
  assert.equal(subB2(3, 7), -4);
  assert.equal(subB2(0, 0), 0);
  assert.equal(subB2(4, 0), 4);
  assert.equal(subB2(0, 4), -4);
});
