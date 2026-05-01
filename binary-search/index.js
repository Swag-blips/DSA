function binarySearch(sortedArr, target) {
  let left = 0;
  let right = sortedArr.length - 1;

  while (left <= right) {
    const middle = Math.floor((left + right) / 2);

    if (target > sortedArr[middle]) {
      left = middle + 1;
    } else if (target < sortedArr[middle]) {
      right = middle - 1;
    } else {
      return middle;
    }
  }

  return -1;
}

console.log(binarySearch([1, 3, 3, 4, 5, 6, 7, 8], 7));
