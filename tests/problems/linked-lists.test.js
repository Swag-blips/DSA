const test = require("node:test");
const assert = require("node:assert/strict");

const { createList, listToArray } = require("../../src/utils/linked-list");
const {
  reverseLinkedList,
} = require("../../src/problems/linked-lists/reverse-list");
const {
  removeNthFromEnd,
} = require("../../src/problems/linked-lists/remove-nth-node-from-end");
const {
  oddEvenLinkedList,
} = require("../../src/problems/linked-lists/oddEvenLinkedList");

test("reverses a linked list", () => {
  const result = reverseLinkedList(createList([1, 2, 3]));

  assert.deepEqual(listToArray(result), [3, 2, 1]);
});

test("removes a node counted from the end", () => {
  const result = removeNthFromEnd(createList([1, 2, 3, 4, 5]), 2);

  assert.deepEqual(listToArray(result), [1, 2, 3, 5]);
});

const oddEvenTestCases = [
  { input: [1, 2, 3, 4, 5], expected: [1, 3, 5, 2, 4] },
  { input: [2, 1, 3, 5, 6, 4, 7], expected: [2, 3, 6, 7, 1, 5, 4] },
  { input: [10, 20, 30, 40, 50], expected: [10, 30, 50, 20, 40] },
  { input: [5, 8, 12, 16, 20, 24, 28], expected: [5, 12, 20, 28, 8, 16, 24] },
  { input: [9, 7, 5, 3, 1], expected: [9, 5, 1, 7, 3] },
  {
    input: [11, 22, 33, 44, 55, 66, 77, 88, 99],
    expected: [11, 33, 55, 77, 99, 22, 44, 66, 88],
  },
  { input: [4, 6, 8, 10, 12], expected: [4, 8, 12, 6, 10] },
  {
    input: [100, 200, 300, 400, 500, 600, 700],
    expected: [100, 300, 500, 700, 200, 400, 600],
  },
  { input: [13, 26, 39, 52, 65], expected: [13, 39, 65, 26, 52] },
  {
    input: [3, 1, 4, 1, 5, 9, 2, 6, 8],
    expected: [3, 4, 5, 2, 8, 1, 1, 9, 6],
  },
];

oddEvenTestCases.forEach(({ input, expected }, index) => {
  test(`reorders odd/even linked-list case ${index + 1}`, () => {
    const result = oddEvenLinkedList(createList(input));

    assert.deepEqual(listToArray(result), expected);
  });
});
