function guessNumber(n, pick) {
          let left = 1;
  let right = n;

  while (left <= right) {
    let middle = Math.floor((left + right) / 2);

    if (guess(middle) === 1) {
    left = middle + 1;
    } else if (guess(middle) === -1) {
  
            right = middle - 1;
    } else {
      return middle;
    }
  }
  return -1;
    
}

console.log(guessNumber(15, 10));
 