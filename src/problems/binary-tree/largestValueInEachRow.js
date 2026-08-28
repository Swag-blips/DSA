const { TreeNode } = require("../../data-structures/binary-tree");

function largestValueInRow(root) {
  let queue = [];
  let largest = [];
  if (root !== null) {
    queue.push(root);
    largest.push(root.val);
  }

  while (queue.length > 0) {
    let queueLength = queue.length;

    let depth = [];

    for (let i = 0; i < queueLength; i++) {
      let curr = queue.shift();
      if (curr.left) {
        queue.push(curr.left);
        depth.push(curr.left.val);
      }

      if (curr.right) {
        queue.push(curr.right);
        depth.push(curr.right.val);
      }
    }

    let max = depth[0];

    for (let i = 1; i < depth.length; i++) {
      if (depth[i] > max) {
        max = depth[i];
      }
    }

    if(max){
largest.push(max);
    }
    
  }

  return largest;
}

module.exports = { largestValueInRow };

if (require.main === module) {
  const firstRoot = new TreeNode(1);
  firstRoot.left = new TreeNode(3);
  firstRoot.right = new TreeNode(2);
  firstRoot.left.left = new TreeNode(5);
  firstRoot.left.right = new TreeNode(3);
  firstRoot.right.right = new TreeNode(9);

  console.log("Example 1:", largestValueInRow(firstRoot));

  const secondRoot = new TreeNode(1);
  secondRoot.left = new TreeNode(2);
  secondRoot.right = new TreeNode(3);

  console.log("Example 2:", largestValueInRow(secondRoot));
}
