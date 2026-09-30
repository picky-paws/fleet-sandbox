import assert from 'node:assert/strict';
import { test } from 'node:test';

import { mul3A1 } from '../src/mul3A1.js';

test('mul3A1 multiplies three numbers', () => {
  assert.equal(mul3A1(2, 3, 4), 24);
  assert.equal(mul3A1(-1, 2, 3), -6);
  assert.equal(mul3A1(0, 5, 9), 0);
});
