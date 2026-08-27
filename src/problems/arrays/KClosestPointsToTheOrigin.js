function kClosestPointsToOrigin(points, k) {
  for (let i = 0; i < points.length; i++) {
    let currentPoints = points[i];
    const x1 = currentPoints[0];
    const x2 = currentPoints[1];

    const distance = Math.sqrt(x1 * x1 + x2 * x2);

    currentPoints.push(distance);
  }

  const sortedArr = quickSort(points, 0, points.length - 1);

  let finalArr = [];

  for (let i = 0; i < k; i++) {
    finalArr.push([sortedArr[i][0], sortedArr[i][1]]);
  }

  return finalArr;
}

function quickSort(arr, startIndex, endIndex) {
  if (startIndex >= endIndex) {
    return arr;
  }

  let pivot = arr[endIndex];
  let left = startIndex;

  for (let i = left; i < endIndex; i++) {
    if (arr[i][2] < pivot[2]) {
      let temp = arr[left];
      arr[left] = arr[i];
      arr[i] = temp;
      left++;
    }
  }

  arr[endIndex] = arr[left];
  arr[left] = pivot;

  quickSort(arr, startIndex, left - 1);
  quickSort(arr, left + 1, endIndex);

  return arr; 
}

if (require.main === module) {
  console.log(
    "Example 1:",
    kClosestPointsToOrigin(
      [
        [0, 2],
        [2, 2],
      ],
      1,
    ),
  );

  console.log(
    "Example 2:",
    kClosestPointsToOrigin(
      [
        [0, 2],
        [2, 0],
        [2, 2],
      ],
      2,
    ),
  );
}

module.exports = { kClosestPointsToOrigin };
