const { TreeNode } = require("../../data-structures/binary-tree");

function isBalanced(root) {
  function traverse(root) {
    if (root === null) return 0;

    let left = traverse(root.left);
    let right = traverse(root.right);

    if (left === -1 || right === -1) {
      return -1;
    }

    let heightDiff = Math.abs(left - right);

    if (heightDiff > 1) {
      return -1;
    } else {
      return 1 + Math.max(left, right);
    }
  }

  const balanced = traverse(root);

  return balanced === -1 ? false : true;
}
 
if (require.main === module) {
  const root = new TreeNode(3);
  root.left = new TreeNode(9);
  root.right = new TreeNode(20);
  root.right.left = new TreeNode(15);
  root.right.right = new TreeNode(7);

  console.log(isBalanced(root));
}

module.exports = { isBalanced };
