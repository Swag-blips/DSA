const test = require("node:test");
const assert = require("node:assert/strict");

const { BST } = require("../../src/data-structures/binary-tree");
const {
  searchInABst,
} = require("../../src/problems/binary-tree/searchInABst");

function createBst(values) {
  const bst = new BST();

  for (const value of values) {
    bst.insert(value);
  }

  return bst;
}

test("returns the subtree rooted at the matching node", () => {
  const bst = createBst([4, 2, 7, 1, 3]);

  const result = searchInABst(bst.root, 2);

  assert.strictEqual(result, bst.root.left);
  assert.equal(result.val, 2);
  assert.equal(result.left.val, 1);
  assert.equal(result.right.val, 3);
});

test("returns null when the value is not in the BST", () => {
  const bst = createBst([4, 2, 7, 1, 3]);

  assert.equal(searchInABst(bst.root, 5), null);
});

test("returns null for an empty BST", () => {
  assert.equal(searchInABst(null, 2), null);
});
