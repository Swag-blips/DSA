function bucketSort(arr) {
  const count = [0, 0, 0, 0];

  for (let i = 0; i < arr.length; i++) {
    count[arr[i]] += 1;
  }
 
  let i = 0;
 
  for (let n = 0; n < count.length; n++) {
    for (let j = 0; j < count[n]; j++) {
      arr[i] = n;
      i++;
    }
  } 

  return arr;
}



if (require.main === module) {
  console.log(bucketSort([3, 1, 0, 2, 1, 3, 2, 0]));
}

module.exports = { bucketSort };
