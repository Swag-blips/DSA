const { TreeNode } = require("../../data-structures/binary-tree");

function invertTree(root) {
  function traverse(root) {
    if (root === null) {
      return null;
    }

    let left = traverse(root.left);
    let right = traverse(root.right);

    if (root !== null) {
      root.left = right;
      root.right = left;
    }

    return root;
  }
  return traverse(root);
}

if (require.main === module) {
  const root = new TreeNode(4);
  root.left = new TreeNode(2);
  root.right = new TreeNode(7);
  root.left.left = new TreeNode(1);
  root.left.right = new TreeNode(3);
  root.right.left = new TreeNode(6);
  root.right.right = new TreeNode(9);

  invertTree(root);
}

module.exports = { invertTree };
