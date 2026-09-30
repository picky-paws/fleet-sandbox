import assert from 'node:assert/strict';
import { test } from 'node:test';

import { mul3S3 } from '../src/mul3S3.js';

test('mul3S3 multiplies three numbers', () => {
  assert.equal(mul3S3(2, 3, 4), 24);
  assert.equal(mul3S3(1, 1, 1), 1);
  assert.equal(mul3S3(-2, 3, 4), -24);
  assert.equal(mul3S3(0, 5, 6), 0);
});
