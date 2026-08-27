const { TreeNode } = require("../../data-structures/binary-tree");

function findBottomLeftValue(root) {
  let queue = [];
  let leftTracker = [];
  let leftValue;
  if (root !== null) {
    queue.push(root);
    leftTracker.push(root.val);
  }

  while (queue.length > 0) {
    let queueLength = queue.length;
    let queueLevelTracker = [];

    for (let i = 0; i < queueLength; i++) {
      let curr = queue.shift();

      if (curr.left) {
        queue.push(curr.left);

        queueLevelTracker.push(curr.left.val);
      }
      if (curr.right) {
        queue.push(curr.right);

        if (
          queueLevelTracker[0] === null ||
          queueLevelTracker[0] === undefined
        ) {
          queueLevelTracker.push(curr.right.val);
        }
      }
    }

    if (queueLevelTracker.length > 0) {
      leftTracker = queueLevelTracker;
    }
  }

  if (leftTracker[0] !== undefined || leftTracker[0] !== null) {
    leftValue = leftTracker[0];
  }
  return leftValue;
}

module.exports = { findBottomLeftValue };

if (require.main === module) {
  const root = new TreeNode(0);

  console.log("[0]:", findBottomLeftValue(root));
}
