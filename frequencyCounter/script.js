// You are given two arrays, and you need to check if one array is a "squared"
// version of the other. That means, for every element in the first array, the
//  corresponding element in the second array should be its square (regardless of order)

const frequencyCounter = (arr1, arr2) => {
  if (arr1.length !== arr2.length) {
    return false;
  }

  const counter1 = {};
  const counter2 = {};

  for (let i = 0; i < arr1.length; i++) {
    const value = arr1[i];
    counter1[value] = (counter1[value] || 0) + 1;
  }

  for (let i = 0; i < arr2.length; i++) {
    const value = arr2[i];
    counter2[value] = (counter2[value] || 0) + 1;
  }

  for (let key in counter1) {
    const squaredKey = key ** 2;
    if (!counter2[squaredKey]) {
      return false;
    }
    if (counter2[squaredKey] !== counter1[key]) return false;
  }

  return true;
};

// console.log(frequencyCounter([1, 2, 3, 4, 5], [1, 4, 9, 16, 25]));

// Challenge:
// Write a function that takes two arrays, arr1 and arr2, and checks if arr2 contains the cubed
// values of the elements in arr1. The order of elements doesn't matter, but each element in arr1
// should have a corresponding cubed value in arr2 with the same frequency.

const isCubed = (arr1, arr2) => {
  if (arr1.length !== arr2.length) return false;

  let counter1 = {};
  let counter2 = {};

  for (let value of arr1) {
    counter1[value] = (counter1[value] || 0) + 1;
  }

  for (let value of arr2) {
    counter2[value] = (counter2[value] || 0) + 1;
  }

  for (let key in counter1) {
    let cubeKey = key ** 3;

    if (!counter2[cubeKey]) return false;

    if (counter2[cubeKey] !== counter1[key]) return false;
  }
  return true;
};

// console.log(isCubed([1, 2, 3, 4, 5, 5], [1, 2, 3, 4, 6, 6]));

// Given two strings, write a function to determine if the second string is an anagram of the first.
// An anagram is a word, phrase, or name formed by
// rearranging the letters of another, such as cinema, formed from iceman.

let validAnagrams = (str1, str2) => {
  if (str1.length !== str2.length) return false;
  let counter1 = {};
  let counter2 = {};

  for (let letter of str1) {
    counter1[letter] = (counter1[letter] || 0) + 1;
  }
  for (let letter of str2) {
    counter2[letter] = (counter2[letter] || 0) + 1;
  }

  for (let key in counter1) {
    if (counter1[key] !== counter2[key]) {
      return false;
    }
  }

  return true;
};

// console.log(validAnagrams("anagram", "nagaram"));

// Frequency Counter - sameFrequency
// Write a function called sameFrequency.
// Given two positive integers, find out if the two
// numbers have the same frequency of digits.

// Your solution MUST have the following complexities:

// Time: O(N)

const sameFrequency = (num1, num2) => {
  const splitNum1 = Array.from(String(num1), Number);
  const splitNum2 = Array.from(String(num2), Number);

  if (splitNum1.length !== splitNum2.length) return false;

  let counter1 = {};
  let counter2 = {};

  for (const key of splitNum1) {
    counter1[key] = (counter1[key] || 0) + 1;
  }
  for (const key of splitNum2) {
    counter2[key] = (counter2[key] || 0) + 1;
  }

  for (const key in counter1) {
    if (counter1[key] !== counter2[key]) return false;
  }

  return true;

  
};

console.log(sameFrequency(22, 222));
