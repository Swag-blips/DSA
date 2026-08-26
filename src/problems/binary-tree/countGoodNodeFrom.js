function countGoodFromNode(root) {
  const values = [];

  function traverse(root) {
    if (root === null) {
      return;
    }

    traverse(root.left);
    values.push(root.val);
    traverse(root.right);
  }
}
