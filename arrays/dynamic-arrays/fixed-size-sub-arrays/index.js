const arr = [2, 1, 5, 1, 3, 2];
const k = 3;

for (let start = 0; start <= arr.length - k; start++) {
  let subArray = [];

  for (let end = start; end < start + k; end++) {
    subArray.push(arr[end]);
  }

  console.log(subArray)
}
