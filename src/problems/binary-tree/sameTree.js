const { BST, TreeNode } = require("../../data-structures/binary-tree");

function isSameTree(p, q) {
  function compare(p, q) {
    if ((p === null && q !== null) || (q === null && p !== null)) {
      return false;
    }
    if (p === null && q === null) {
      return true;
    }

    if (p.val !== q.val) {
      return false;
    } else {
      let left = compare(p.left, q.left);
      let right = compare(p.right, q.right);

      return left && right;
    }
  }

  let value = compare(p, q);
  return value;
}

function createTree(values) {
  if (values.length === 0 || values[0] === null) return null;

  const tree = new BST();
  tree.root = new TreeNode(values[0]);

  const queue = [tree.root];
  let valueIndex = 1;

  while (queue.length > 0 && valueIndex < values.length) {
    const current = queue.shift();
    const leftValue = values[valueIndex++];

    if (leftValue !== null && leftValue !== undefined) {
      current.left = new TreeNode(leftValue);
      queue.push(current.left);
    }

    const rightValue = values[valueIndex++];

    if (rightValue !== null && rightValue !== undefined) {
      current.right = new TreeNode(rightValue);
      queue.push(current.right);
    }
  }

  return tree.root;
}

if (require.main === module) {
  const testCases = [{ p: [2, null, 4], q: [2, 3, 4] }];

  testCases.forEach(({ p, q }, index) => {
    try {
      const result = isSameTree(createTree(p), createTree(q));
      console.log(`Test ${index + 1}:`, result);
    } catch (error) {
      console.log(`Test ${index + 1} error:`, error.message);
    }
  });
}

module.exports = { isSameTree };
