import assert from 'node:assert/strict';
import { test } from 'node:test';

import { mul3R2 } from '../src/mul3R2.js';

test('mul3R2 multiplies three numbers', () => {
  assert.equal(mul3R2(2, 3, 4), 24);
  assert.equal(mul3R2(-1, 2, 3), -6);
  assert.equal(mul3R2(0, 5, 9), 0);
});
