// example with binary tree

function pathToLeaf(root) {
  if (!root || root.val === 0) return false;

  if (!root.left && !root.right) return true;

  if (pathToLeaf(root.left)) return true;

  if (pathToLeaf(root.right)) return true;

  return false;
}


