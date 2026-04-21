function sortColors(nums) {
  const arr = [0, 0, 0];

  for (let i = 0; i < nums.length; i++) {
    arr[[nums[i]]] += 1;
  }

  let i = 0;

  for (let n = 0; n < arr.length; n++) {
    for (let j = 0; j < arr[n]; j++) {
      nums[i] = n;
      i++;
    }
  }

  return nums;
}

console.log(sortColors([1, 0, 1, 2]));
