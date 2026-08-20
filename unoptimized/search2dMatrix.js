function search2dMatrix(matrix, target) {
  const nums = matrix.flat(Infinity);

  let left = 0;
  let right = nums.length - 1;

  while (left <= right) {
    const middle = Math.floor((left + right) / 2);
 
    if (target < nums[middle]) {
      right = middle - 1;
    } else if (target > nums[middle]) {
      left = middle + 1;
    } else {
      return true;
    }
  }

  return false;
}

console.log(
  search2dMatrix(
    [
      [1, 2, 4, 8],
      [10, 11, 12, 13],
      [14, 20, 30, 40],
    ],
    15,
  ),
);
