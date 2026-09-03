const { TreeNode } = require("../../data-structures/binary-tree");

function diameterOfTree(root) {
    
  function traverse(root) {
    if (root === null) return 0;

    let left = traverse(root.left);
    let right = traverse(root.right);

    let height = 1 + Math.max(left, right);

    return height;
  }

  return traverse(root);
}

if (require.main === module) {
  const root = new TreeNode(1);
  root.left = new TreeNode(2);
  root.right = new TreeNode(3);
  root.left.left = new TreeNode(4);
  root.left.right = new TreeNode(5);

  diameterOfTree(root);
}

module.exports = { diameterOfTree };
