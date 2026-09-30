import assert from 'node:assert/strict';
import { test } from 'node:test';

import { incQ4 } from '../src/incQ4.js';

test('incQ4 of minus one is zero', () => {
  assert.equal(incQ4(-1), 0);
});
