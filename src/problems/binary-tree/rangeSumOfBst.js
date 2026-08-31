function rangeSumOfBst(root, low, high) {
  let range = [];

  function traverse(root, low, high) {
    if (root === null) return;

    if (root.value >= low && root.value <= high) {
      range.push(root.value);
    }

    traverse(root.left, low, high);
    traverse(root.right, low, high);
  }

  traverse(root, low, high);

  let sum = range.reduce((acc, curr) => acc + curr, 0);

  return sum;
}

if (require.main === module) {
  const example1 = {
    value: 10,
    left: {
      value: 5,
      left: { value: 3, left: null, right: null },
      right: { value: 7, left: null, right: null },
    },
    right: {
      value: 15,
      left: null,
      right: { value: 18, left: null, right: null },
    },
  };

  const example2 = {
    value: 10,
    left: {
      value: 5,
      left: {
        value: 3,
        left: { value: 1, left: null, right: null },
        right: null,
      },
      right: {
        value: 7,
        left: { value: 6, left: null, right: null },
        right: null,
      },
    },
    right: {
      value: 15,
      left: { value: 13, left: null, right: null },
      right: { value: 18, left: null, right: null },
    },
  };

  console.log("Example 1:");
  rangeSumOfBst(example1, 7, 15);

  console.log("Example 2:");
  rangeSumOfBst(example2, 6, 10);
}

module.exports = { rangeSumOfBst };
