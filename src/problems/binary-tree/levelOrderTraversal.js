function levelOrder(root) {
  let queue = [];
  let result = [];

  if (root !== null) {
    queue.push(root);
  }

  while (queue.length > 0) {
    let level = [];

    let queueLength = queue.length;

    for (let i = 0; i < queueLength; i++) {
      let curr = queue.shift();
      if (curr.left) {
        queue.push(curr.left);
      }

      if (curr.right) {
        queue.push(curr.right);
      }

      level.push(curr.val);
    }
    result.push(level);
  }

  return result;
}
