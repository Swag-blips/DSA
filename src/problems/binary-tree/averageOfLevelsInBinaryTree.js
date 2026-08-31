function averageOfLevels(root) {
  let queue = [];
  let compilation = [];
  if (root) {
    queue.push(root);
    compilation.push(root.value);
  }

  while (queue.length > 0) {
    let queueLength = queue.length;
    let level = [];
    for (let i = 0; i < queueLength; i++) {
      let curr = queue.shift();

      if (curr.left) {
        queue.push(curr.left);
        level.push(curr.left.value);
      }

      if (curr.right) {
        queue.push(curr.right);
        level.push(curr.right.value);
      }
    }

    if (level.length) {
      const average = level.reduce((acc, curr) => acc + curr, 0) / level.length;

      compilation.push(average);
    }
  }

  return compilation;
}

if (require.main === module) {
  const example1 = {
    value: 3,
    left: { value: 9, left: null, right: null },
    right: {
      value: 20,
      left: { value: 15, left: null, right: null },
      right: { value: 7, left: null, right: null },
    },
  };

  const example2 = {
    value: 3,
    left: {
      value: 9,
      left: { value: 15, left: null, right: null },
      right: { value: 7, left: null, right: null },
    },
    right: { value: 20, left: null, right: null },
  };

  const testCases = [example1, example2];

  testCases.forEach((root, index) => {
    try {
      console.log(`Example ${index + 1}:`);
      const result = averageOfLevels(root);
      console.log("Returned:", result);
    } catch (error) {
      console.log("Error:", error.message);
    }
  });
}

module.exports = { averageOfLevels };
