function kthSmallest(matrix, k) {
  const flatMatrix = matrix.flat(Infinity).sort((a, b) => a - b);

  let finalVal;
  for (let i = 0; i < k; i++) {
    console.log("ith iteration", i, flatMatrix[i]);
    finalVal = flatMatrix[i];
  }

  return finalVal;
}
