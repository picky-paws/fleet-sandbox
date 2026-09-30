import assert from 'node:assert/strict';
import { test } from 'node:test';

import { mul3B2 } from '../src/mul3B2.js';

test('mul3B2 multiplies three numbers', () => {
  assert.equal(mul3B2(2, 3, 4), 24);
  assert.equal(mul3B2(1, 5, 7), 35);
  assert.equal(mul3B2(2, 0, 9), 0);
  assert.equal(mul3B2(-2, 3, 4), -24);
});
