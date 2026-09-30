import assert from 'node:assert/strict';
import { test } from 'node:test';

import { negS2 } from '../src/negS2.js';

test('negS2 negates positives and negatives', () => {
  assert.equal(negS2(5), -5);
  assert.equal(negS2(-3), 3);
  assert.equal(negS2(1.5), -1.5);
});

test('negS2 of zero is negative zero', () => {
  assert.equal(negS2(0), -0);
});
