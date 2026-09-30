import { test } from "node:test";
import assert from "node:assert/strict";

test("red on purpose (A8, pass 38): 2 + 2 is not 5", () => {
  assert.equal(2 + 2, 5);
});
