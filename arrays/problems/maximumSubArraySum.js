function maximumSubArraySum(nums) {
  let largestSum = -Infinity;
  let largestSubArray;

  for (let start = 0; start < nums.length; start++) {
    let sum = 0;
    for (let end = start; end < nums.length; end++) {
      sum += nums[end];

      if (sum > largestSum) {
        largestSum = sum;
        largestSubArray = nums.slice(start, end + 1);
      }
    }
  }

  return largestSum;
}

console.log(maximumSubArraySum([5,4,-1,7,8]));
