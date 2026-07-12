function removeElement(nums, val) {
  const validIndexes = [];
  let totalFound = 0;
  let k = 0;

  for (let i = 0; i < nums.length; i++) {
    if (nums[i] === val) {
      validIndexes.push(i);
      totalFound += 1;
    }
  }

  let currentIteration = 0;
  for (let i = 0; i < validIndexes.length; i++) {
    if (i === 0) {
      nums.splice(validIndexes[i], 1);
    } else {
      nums.splice(validIndexes[i] - currentIteration, 1);
    }
    currentIteration += 1;
  }
  k = nums.length;

  if (totalFound > 0) {
    for (let i = 0; i <= totalFound; i++) {
      nums.push("_");
    }
  }

  return k;
}

removeElement([7, 7, 7, 7], 3);
