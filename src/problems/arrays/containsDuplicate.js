// TLE won't work on leetcode

function containsDuplicate(nums, indexDiff, valueDiff) {
  for (let i = 0; i < nums.length; i++) {
    for (let j = i + 1; j < nums.length; j++) {
      if (
        i !== j &&
        Math.abs(i - j) <= indexDiff &&
        Math.abs(nums[i] - nums[j]) <= valueDiff
      ) {
        return true;
      }
    }
  }

  return false;
}

console.log(containsDuplicate([1, 5, 9, 1, 5, 9], 2, 3));
