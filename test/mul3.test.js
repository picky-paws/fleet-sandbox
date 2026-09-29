import assert from 'node:assert/strict';
import { test } from 'node:test';

import { mul3 } from '../src/mul3.js';

test('mul3 multiplies three numbers', () => {
  assert.equal(mul3(2, 3, 4), 24);
  assert.equal(mul3(-1, 2, 3), -6);
  assert.equal(mul3(0, 5, 9), 0);
});
