//

function maxSubArray(arr, num) {
  if (num > arr.length) {
    return null;
  }

  let max = -Infinity;
  for (let i = 0; i < arr.length - num + 1; i++) {
    temp = 0;
    for (let j = 0; j < num; j++) {
      temp += arr[i + j];
    }
    if (temp > max) {
      max = temp;
    }
  }

  return max;
}

maxSubArray([2, 6, 9, 1, 8, 5, 6], 3);

// sliding window

const maxSubArrayAlt = (num, size) => {
  if (size > num.length) return null;

  let maxSum = -Infinity;
  let currSum = 0;
  for (let i = 0; i < num.length; i++) {
    currSum += num[i];

    if (i >= size - 1) {
      maxSum = Math.max(currSum, maxSum);
      currSum -= num[i - (size - 1)];
    }
  }

  return maxSum;
};

console.log(maxSubArrayAlt([1, 4, 7, 5, 8, 9], 3));
