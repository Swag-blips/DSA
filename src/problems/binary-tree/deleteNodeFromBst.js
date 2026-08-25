const { BST } = require("../../data-structures/binary-tree");

function deleteNode(root, key) {
  if (root === null) {
    return null;
  }

  if (key < root.val) {
    root.left = deleteNode(root.left, key);
  } else if (key > root.val) {
    root.right = deleteNode(root.right, key);
  } else {
    if (root.right === null) {
      return root.left;
    }

    if (root.left === null) {
      return root.right;
    }

    const minNode = findMinValue(root.right);

    root.val = minNode.val;

    root.right = deleteNode(root.right, minNode.val);
  }

  return root;
}

function findMinValue(root) {
  let curr = root;

  while (curr.left !== null) {
    curr = curr.left;
  }

  return curr;
}

function getInOrderValues(root, values = []) {
  if (root === null) {
    return values;
  }

  getInOrderValues(root.left, values);
  values.push(root.val);
  getInOrderValues(root.right, values);

  return values;
}

function testDeleteNode(name, values, key, expectedValues, expectedRoot) {
  const bst = new BST();
  values.forEach((value) => bst.insert(value));

  bst.root = deleteNode(bst.root, key);

  const actualValues = getInOrderValues(bst.root);
  const actualRoot = bst.root?.val ?? null;
  const passed =
    JSON.stringify(actualValues) === JSON.stringify(expectedValues) &&
    actualRoot === expectedRoot;

  console.log(`${passed ? "PASS" : "FAIL"}: ${name}`);
  console.log("  result:", actualValues, "root:", actualRoot);
}

testDeleteNode("empty tree", [], 5, [], null);
testDeleteNode("delete a leaf", [5, 3, 9, 1, 4], 1, [3, 4, 5, 9], 5);
testDeleteNode("delete a node with one child", [5, 3, 9, 1], 3, [1, 5, 9], 5);
testDeleteNode(
  "delete a node with two children",
  [5, 3, 9, 1, 4],
  3,
  [1, 4, 5, 9],
  5,
);
testDeleteNode("delete the root", [5, 3, 9, 1, 4], 5, [1, 3, 4, 9], 9);
testDeleteNode("key does not exist", [5, 3, 9, 1, 4], 7, [1, 3, 4, 5, 9], 5);
