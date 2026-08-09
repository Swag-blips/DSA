function slidingWindowMaximum(arr, k) {
  const finalArr = [];
  for (let start = 0; start <= arr.length - k; start++) {
    let subArray = [];

    for (let end = start; end < start + k; end++) {
      subArray.push(arr[end]);
    }

    let max = -Infinity;

    for (const num of subArray) {
      if (num > max) {
        max = num;
      }
    }

    finalArr.push(max);
  }
  return finalArr;
}
