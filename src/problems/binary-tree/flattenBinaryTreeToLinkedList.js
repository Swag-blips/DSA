function flattenBinaryTreeToLinkedList(root) {
  let nextNode = null;

  function flatten(node) {
    if (node === null) return;

    flatten(node.right);
    flatten(node.left);

    node.right = nextNode;
    node.left = null;
    nextNode = node;
  }

  flatten(root);
  return root;
}

module.exports = { flattenBinaryTreeToLinkedList };

if (require.main === module) {
  const root = {
    val: 2,
    left: { val: 1, left: null, right: null },
    right: { val: 3, left: null, right: null },
  };

  try {
    const result = flattenBinaryTreeToLinkedList(root);
    console.log("Function result:", result);
  } catch (error) {
    console.log("Function error:", error.message);
  }

  console.dir(root, { depth: null });
}
