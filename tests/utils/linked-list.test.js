const test = require("node:test");
const assert = require("node:assert/strict");

const { createList, listToArray } = require("../../src/utils/linked-list");

test("creates a linked list and converts it back to an array", () => {
  const head = createList([1, 2, 3]);

  assert.deepEqual(listToArray(head), [1, 2, 3]);
});

test("handles an empty list", () => {
  assert.equal(createList([]), null);
  assert.deepEqual(listToArray(null), []);
});
