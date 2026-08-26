let numbers = [];
function inorderTraversal(root) {
  if (root === null) return;

  inorderTraversal(root.left);
  numbers.push(root.val);
  inorderTraversal(root.right);
}
