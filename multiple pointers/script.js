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

// // Problem: Given a sorted array of integers,
// find two numbers such that they add up to a specific target.
// //  Return the indices of the two numbers.

const twoSum = (arr, value) => {
  let i = 0;
  let j = arr.length - 1;

  while (i < j) {
    let sum = arr[i] + arr[j];
    if (sum === value) {
      return [i, j];
    } else if (sum > value) {
      j--;
    } else {
      i++;
    }
  }
};

console.log(twoSum([2, 7, 11, 15], 9));

// Frequency Counter / Multiple Pointers -
// // areThereDuplicates Implement a function called,
// // areThereDuplicates which accepts a variable number of
// arguments, and checks whether there are any duplicates
// among the arguments passed in.  You can solve this
// using the frequency counter pattern OR the multiple
// pointers pattern.

// Examples:

// areThereDuplicates(1, 2, 3) // false
// areThereDuplicates(1, 2, 2) // true
// areThereDuplicates('a', 'b', 'c', 'a')

// bruteforce

const areThereDuplicates = (...arg) => {
  for (let i = 0; i < arg.length; i++) {
    for (let j = i + 1; j < arg.length; j++) {
      if (arg[i] == arg[j]) {
        return true;
      }
    }
  }
  return false;
};

console.log(areThereDuplicates("a", "b", "c", "a"));

// Multiple Pointers - averagePair
// Write a function called averagePair. Given a sorted array of integers and a target average,
// determine if there is a pair of values in the array where the average of the pair equals the target average.
// There may be more than one pair that matches the average target.

// Bonus Constraints:

// Time: O(N)

// Space: O(1)

// Sample Input:

// averagePair([1,2,3],2.5) // true
// averagePair([1,3,3,5,6,7,10,12,19],8) // true
// averagePair([-1,0,3,4,5,6], 4.1) // false
// averagePair([],4) // false

const averagePair = (arr, target) => {
  let i = 0;
  let j = arr.length - 1;
  while (i < j) {
    const avg = (arr[i] + arr[j]) / 2;
    if (avg === target) {
      return true;
    } else if (avg < target) {
      i++;
    } else {
      j--;
    }
  }
  return false;
};

console.log(averagePair([1, 3, 3, 5, 6, 7, 10, 12, 19], 8));
