const { TreeNode } = require("../../data-structures/binary-tree");

function goodNodes(root) {
  let count = 0;

  function traverse(root, nodes) {
    if (root === null) return null;

    console.log("nodes at", root.val, nodes)
    let foundGreater = false;
    nodes.forEach((node) => {
      if (node > root.val) {
        foundGreater = true;
      }
    });
    if (!foundGreater) {
      count++;
    }
    nodes.push(root.val);
    let copiedNodes = [...nodes]
    traverse(root.left, copiedNodes);
    
    traverse(root.right, nodes);
  }

  traverse(root, []);
  return count;
}

if (require.main === module) {
  const root = new TreeNode(2);
  root.right = new TreeNode(4);
  root.right.left = new TreeNode(10);
  root.right.right = new TreeNode(8);
  root.right.right.left = new TreeNode(4);

  console.log(goodNodes(root));
}

module.exports = { goodNodes };
