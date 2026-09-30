import assert from 'node:assert/strict';
import { test } from 'node:test';

import { mul3S2 } from '../src/mul3S2.js';

test('mul3S2 multiplies three numbers', () => {
  assert.equal(mul3S2(2, 3, 4), 24);
  assert.equal(mul3S2(-1, 2, 3), -6);
  assert.equal(mul3S2(0, 5, 9), 0);
});
