class TreeNode {
  constructor(val) {
    this.right = null;
    this.left = null;
    this.val = val;
  }
}

class BST {
  constructor() {
    this.root = null;
  }

  // Iteratively
  insert(val) {
    if (!this.root) {
      const node = new TreeNode(val);
      this.root = node;

      return;
    }

    let curr = this.root;

    while (curr) {
      if (val > curr.val) {
        if (curr.right === null) {
          curr.right = new TreeNode(val);
          return;
        }
        curr = curr.right;
      } else if (val < curr.val) {
        if (curr.left === null) {
          curr.left = new TreeNode(val);
          return;
        }

        curr = curr.left;
      } else {
        return;
      }
    }
  }

  insertRecursive(root, val) {
    if (!root) {
      return new TreeNode(val);
    }

    if (val > root) {
      root.right = this.insertRecursive(root.right, val);
    } else if (val < root) {
      root.left = this.insertRecursive(root.left, val);
    }

    return root;
  }

  search(val) {
    let curr = this.root;

    while (curr) {
      if (val === curr.val) {
        return curr;
      }
      if (val > curr.val) {
        curr = curr.right;
      } else if (val < curr.val) {
        curr = curr.left;
      }
    }

    return null;
  }

  searchRecursive(root, val) {
    if (root === null) {
      return null;
    }

    if (root.val === val) {
      return root;
    }

    if (val > root.val) {
      return this.searchRecursive(root.right, val);
    } else if (val < root.val) {
      return this.searchRecursive(root.left, val);
    }
  }

  remove(root, val) {
    if (root === null) {
      return null;
    }

    if (val > root.val) {
      root.right = this.remove(root.right, val);
    } else if (val < root.val) {
      root.left = this.remove(root.left, root.left);
    } else {
      if (root.right === null) {
        return root.left;
      }
      if (root.left === null) {
        return root.right;
      }
    }

    return root;
  }

  minValueNode(root) {
    let curr = root;
    while (curr.left !== null) {
      curr = curr.left;
    }

    return curr;
  }
}
