const { TreeNode } = require("../../data-structures/binary-tree");

function pathSum(root, targetSum) {
  let foundTargetSum = false;
  function travese(root, sum, targetSum) {
    if (root === null) {
      return 0;
    }

    if (root.left === null && root.right === null) {
      sum += root.val;
      if (sum === targetSum) foundTargetSum = true;
    }

    travese(root.left, sum + root.val, targetSum);
    travese(root.right, sum + root.val, targetSum);
  }

  travese(root, 0, targetSum);

  return foundTargetSum;
}

if (require.main === module) {
  const root = new TreeNode(5);
  root.left = new TreeNode(4);
  root.right = new TreeNode(8);
  root.left.left = new TreeNode(11);
  root.right.left = new TreeNode(13);
  root.right.right = new TreeNode(4);
  root.left.left.left = new TreeNode(7);
  root.left.left.right = new TreeNode(2);
  root.right.right.right = new TreeNode(1);

  pathSum(root, 22);
}

module.exports = { pathSum };
