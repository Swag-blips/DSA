function maxConsecutiveOnes(nums) {
  let prevTotalCount = 0;
  let count = 0;

  for (let i = 0; i < nums.length; i++) {
    if (nums[i] === 1) {
      count += 1;
      for (let j = i + 1; j < nums.length; j++) {
        if (nums[j] !== 1) {
          if (count > prevTotalCount) {
            console.log("count at break", count);
            prevTotalCount = count;
            count = 0;
          } else {
            count = 0;
          }
          break;
        }
        count += 1;
      }

      if (count > prevTotalCount) prevTotalCount = count;
      count = 0;
    } else {
      continue;
    }
  }

  console.log("final answer", prevTotalCount > count ? prevTotalCount : count);
}

maxConsecutiveOnes([1]);

// alt strategy
