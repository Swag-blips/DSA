function univaluedBinaryTree(root) {
  let values = [];

  function traverse(root) {
    if (root === null) return;

    values.push(root.value);

    traverse(root.left);
    traverse(root.right);
  }

  traverse(root);

  let initialValue = values[0];

  return values.every((value) => initialValue === value);
}
