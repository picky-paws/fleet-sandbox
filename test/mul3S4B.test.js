import assert from 'node:assert/strict';
import { test } from 'node:test';

import { mul3S4B } from '../src/mul3S4B.js';

test('mul3S4B multiplies three numbers', () => {
  assert.equal(mul3S4B(2, 3, 4), 24);
  assert.equal(mul3S4B(-1, 2, 3), -6);
  assert.equal(mul3S4B(0, 5, 9), 0);
});
