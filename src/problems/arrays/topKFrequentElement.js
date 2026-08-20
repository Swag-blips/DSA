function topKFrequentElement(nums, k) {
  const frequency = {};

  for (let i = 0; i < nums.length; i++) {
    if (!frequency[nums[i]]) {
      frequency[nums[i]] = 1;
    } else {
      frequency[nums[i]] += 1;
    }
  }

  const sortedArr = Object.keys(frequency).sort(
    (a, b) => frequency[b] - frequency[a],
  );

  let finalArr = [];

  for (let i = 0; i < k; i++) {
    finalArr.push(Number(sortedArr[i]));
  }

  return finalArr;
}

console.log(topKFrequentElement([1, 1, 1, 2, 3, 3], 2));
 function topKFrequentElement(nums, k) {
  const frequency = {};

  for (let i = 0; i < nums.length; i++) {
    if (!frequency[nums[i]]) {
      frequency[nums[i]] = 1;
    } else {
      frequency[nums[i]] += 1;
    }
  }

  const sortedArr = Object.keys(frequency).sort(
    (a, b) => frequency[b] - frequency[a],
  );

  let finalArr = [];

  for (let i = 0; i < k; i++) {
    finalArr.push(Number(sortedArr[i]));
  }

  return finalArr;
}

// Basic tests
console.assert(
  JSON.stringify(topKFrequentElement([1, 1, 1, 2, 2, 3], 2)) ===
    JSON.stringify([1, 2]),
  "Test 1 failed",
);

console.assert(
  JSON.stringify(topKFrequentElement([1], 1)) === JSON.stringify([1]),
  "Test 2 failed",
);

console.assert(
  JSON.stringify(
    topKFrequentElement([1, 2, 1, 2, 1, 2, 3, 1, 3, 2], 2),
  ) === JSON.stringify([1, 2]),
  "Test 3 failed",
);

console.assert( 
  JSON.stringify(topKFrequentElement([4, 4, 4, 2, 2, 3], 1)) ===
    JSON.stringify([4]),
  "Test 4 failed",
);

console.assert(
  JSON.stringify(topKFrequentElement([-1, -1, -1, -2, -2, -3], 2)) ===
    JSON.stringify([-1, -2]),
  "Test 5 failed",
);

console.log("All tests passed");