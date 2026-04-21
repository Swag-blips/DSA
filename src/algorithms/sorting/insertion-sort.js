function insertionSort(arr) {
  for (let i = 1; i < arr.length; i++) {
    let j = i - 1;

    while (j >= 0 && arr[j + 1] < arr[j]) {
      let tmp = arr[j + 1];
      arr[j + 1] = arr[j];
      arr[j] = tmp;
      j--;
    }
  }
    
  return arr;
}

if (require.main === module) {
  console.log(insertionSort([4, 5, 3, 2, 1]));
}

module.exports = { insertionSort };
 
