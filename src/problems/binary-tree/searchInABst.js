function searchInABst(root, val) {
  let tree = null;

  function search(node) {
    if (node === null) {
      return;
    }

    if (val < node.val) {
      search(node.left);
    } else if (val > node.val) {
      search(node.right);
    } else {
      tree = node;
    }
  }

  search(root);
  return tree;
}

module.exports = { searchInABst };
