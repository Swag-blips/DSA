function maxDepth(root) {
  const queue = [];

  if (root !== null) {
    queue.push(root);
  }

  let depth = 0;

  while (queue.length > 0) {
    const queueLength = queue.length;

    for (let i = 0; i < queueLength; i++) {
      const curr = queue.shift();

      if (curr.left) {
        queue.push(curr.left);
      }

      if (curr.right) {
        queue.push(curr.right);
      }
    }
    depth++;
  }

  return depth;
}
