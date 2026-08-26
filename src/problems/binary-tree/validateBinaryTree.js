const { TreeNode } = require("../../data-structures/binary-tree");

function isValidBST(root) {
  let values = [];
  function traverse(root) {
    if (root === null) {
      return;
    }

    traverse(root.left);
    values.push(root.val);
    traverse(root.right);
  }

  traverse(root);

  for (let i = 0; i < values.length; i++) {
    if (values[i] > values[i + 1]) {
      return false;
    }
  }

  return true;
}


