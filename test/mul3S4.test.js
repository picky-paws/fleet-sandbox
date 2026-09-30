import assert from 'node:assert/strict';
import { test } from 'node:test';

import { mul3S4 } from '../src/mul3S4.js';

test('mul3S4 multiplies three numbers', () => {
  assert.equal(mul3S4(2, 3, 4), 24);
  assert.equal(mul3S4(-1, 2, 3), -6);
  assert.equal(mul3S4(0, 5, 9), 0);
});
