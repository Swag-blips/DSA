function nextGreaterElement(nums1, nums2) {
  let finalNums = [];
  for (let i = 0; i < nums1.length; i++) {
    const currentIValue = nums1[i];
    const indexOfI = nums2.indexOf(currentIValue);

    let greaterValue;

    for (let j = indexOfI + 1; j < nums2.length; j++) {
      const currentJValue = nums2[j];

      if (currentJValue > currentIValue) {
        greaterValue = currentJValue;
        break;
      }
    }

    finalNums.push(greaterValue ? greaterValue : -1);
  }

  return finalNums;
}

console.log(nextGreaterElement([2, 4], [1, 2, 3, 4]));
