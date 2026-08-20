function sortAnArray(nums) {
  return quickSort(nums, 0, nums.length - 1);
}

function quickSort(arr, startIndex, endIndex) {
  if (startIndex >= endIndex) {
    return arr;
  }

  let pivot = arr[endIndex];
  let left = startIndex;

  for (let i = left; i < endIndex; i++) {
    if (arr[i] < pivot) {
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

console.log(sortAnArray([5, 4, 2, 1, 3]));
