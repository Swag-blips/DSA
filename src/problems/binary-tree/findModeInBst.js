const { TreeNode } = require("../../data-structures/binary-tree");

/// Should optimize
function findMode(root) {
  let values = {};
  function traverse(root) {
    if (root === null) {
      return;
    }

    if (values[root.val]) {
      values[root.val] += 1;
    } else {
      values[root.val] = 1;
    }

    traverse(root.right);
    traverse(root.left);
  }

  traverse(root);

  let mode = [];

  const sortedValues = Object.entries(values).sort((a, b) => b[1] - a[1]);

  mode.push(sortedValues[0]);

  for (let i = 1; i < sortedValues.length; i++) {
    let currentArr = sortedValues[i];

    if (currentArr[1] > mode[mode.length - 1][1]) {
      mode[mode.length - 1] = currentArr;
    } else if (currentArr[1] === mode[mode.length - 1][1]) {
      mode.push(currentArr);
    }
  }

  let finalProcessed = [];

  for (let i = 0; i < mode.length; i++) {
    finalProcessed.push(Number(mode[i][0]));
  }

  return finalProcessed;
}

module.exports = { findMode };

if (require.main === module) {
  const firstRoot = new TreeNode(1);
  firstRoot.right = new TreeNode(2);
  firstRoot.right.left = new TreeNode(2);

  console.log("Example 1:");
  findMode(firstRoot);

  const secondRoot = new TreeNode(0);

  console.log("Example 2:");
  findMode(secondRoot);
}
