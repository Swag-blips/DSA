function postOrderTraversal(root) {
  if (root === null) {
    return;
  }

  postOrderTraversal(root.left);
  postOrderTraversal(root.right);
  console.log(root.val);
}



// POE