const arr = [2, 2,6];
const k = 2;

for (let start = 0; start <= arr.length - k; start++) {
  let subArray = [];

  for (let end = start; end < start + k; end++) {
    subArray.push(arr[end]);
  }

  console.log(subArray)
}
