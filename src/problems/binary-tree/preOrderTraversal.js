let values = [];

function preorderTraversal(root) {
  if (root === null) {
    return;
  }

  values.push(root.val);
  preorderTraversal(root.left);
  preorderTraversal(root.right);
}

// return values
