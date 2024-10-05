// write a function called sumZero which accepts a sorted array of integers.
// The function should find the first pair where the sum is 0.
// Return an array that includes both values that sum to zero or undefined if a pair does not exist

// Naive solution
const sumZero = (arr) => {
  for (let i = 0; i < arr.length; i++) {
    for (let j = i + 1; j < arr.length; j++) {
      if (arr[i] + arr[j] === 0) {
        console.log([arr[i], arr[j]]);
      }
    }
  }
};

sumZero([-3, -2, -1, 0, 1, 2, 3]);

// multiple pointers solution
function sumZeroAlt(arr) {
  let left = 0;
  let right = arr.length - 1;
  while (left < right) {
    let sum = arr[left] + arr[right];
    if (sum === 0) {
      return [arr[left], arr[right]];
    } else if (sum > 0) {
      right--;
    } else {
      left++;
    }
  }
}

console.log(sumZeroAlt([-4, -3, -2, -1, 0, 1, 2, 3, 10]));

// implement a function called countUniqueValues which accepts a sorted array and
//counts the unique values in the array.
// There can be negative numbers in the array, but it will always be sorted

const countUniqueValues = (arr) => {
  if (arr.length === 0) return 0;
  let i = 0;
  for (let j = 1; j < arr.length; j++) {
    if (arr[i] !== arr[j]) {
      i++;
      arr[i] = arr[j];
    }
  }
  return i + 1;
};

console.log(countUniqueValues([1, 1, 2, 2, 3, 4, 5, 6, 6, 7]));

// Problem: Check whether a given array is
// a palindrome (i.e., it reads the same backward as forward).

const isPalindrome = (arr) => {
  let i = 0;
  let j = arr.length - 1;

  for (let k = 0; k < arr.length; k++) {
    if (arr[i] === arr[j]) {
      i++;
      j--;
    } else {
      return false;
    }
  }
  return true;
};

console.log(isPalindrome([1, 2, 3, 2, 1]));
