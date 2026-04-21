const test = require("node:test");
const assert = require("node:assert/strict");

const { createList, listToArray } = require("../../src/utils/linked-list");
const {
  reverseLinkedList,
} = require("../../src/problems/linked-lists/reverse-list");
const {
  removeNthFromEnd,
} = require("../../src/problems/linked-lists/remove-nth-node-from-end");

test("reverses a linked list", () => {
  const result = reverseLinkedList(createList([1, 2, 3]));

  assert.deepEqual(listToArray(result), [3, 2, 1]);
});

test("removes a node counted from the end", () => {
  const result = removeNthFromEnd(createList([1, 2, 3, 4, 5]), 2);

  assert.deepEqual(listToArray(result), [1, 2, 3, 5]);
});
