const { TreeNode } = require("../../data-structures/binary-tree");

function rightSideView(root) {
  let queue = [];
  let right = [];

  if (root !== null) {
    queue.push(root);
    right.push(root.val);
  }

  while (queue.length > 0) {
    let queueLength = queue.length;

    for (let i = 0; i < queueLength; i++) {
      let curr = queue.shift();

      if (curr.left) {
        queue.push(curr.left);
      }

      if (curr.right) {
        queue.push(curr.right);
      }
    }

    const rightValue = queue[queue.length - 1];
    if (rightValue) right.push(rightValue.val);
  }

  return right; 
}

module.exports = { rightSideView };

if (require.main === module) {
  const firstRoot = new TreeNode(1);
  firstRoot.left = new TreeNode(2);
  firstRoot.right = new TreeNode(3);
  firstRoot.left.right = new TreeNode(4);
  firstRoot.right.right = new TreeNode(5);

  console.log("Example 1:", rightSideView(firstRoot));

  const secondRoot = new TreeNode(1);
  secondRoot.left = new TreeNode(2);
  secondRoot.right = new TreeNode(3);
  secondRoot.left.left = new TreeNode(4);
  secondRoot.left.left.left = new TreeNode(5);

  console.log("Example 2:", rightSideView(secondRoot));
}
