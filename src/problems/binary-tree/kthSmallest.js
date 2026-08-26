const { BST, TreeNode } = require("../../data-structures/binary-tree");

function kthSmallest(root, k) {
  const orders = [];
  function traverse(root) {
    if (root === null) {
      return;
    }

    traverse(root.left);
    orders.push(root.val);
    traverse(root.right);
  }

  traverse(root);
  let kthSmallest;
  for (let i = 0; i < k; i++) {
    kthSmallest = orders[i];
  }

  return kthSmallest;
}

//     2
//    / \
//   1   3
const bst = new BST();
[2, 1, 3].forEach((value) => bst.insert(value));

console.log(kthSmallest(bst.root, 1));

//       4
//      / \
//     3   5
//    /
//   2
const bst2 = new BST();
[4, 3, 5, 2].forEach((value) => bst2.insert(value));

console.log(kthSmallest(bst2.root, 4));
