const arr = [2, -1, 3];

let largest;
let largestSum = -Infinity;
for (let start = 0; start < arr.length; start++) {
  let sum = 0;
  for (let end = start; end < arr.length; end++) {
    let subArray = arr.slice(start, end + 1);
    sum += arr[end];

    if (sum > largestSum) {
      largestSum = sum;
      largest = subArray;
    }
  }
}

console.log(largest, largestSum);
