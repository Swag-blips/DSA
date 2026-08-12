// print N to 1

function printNTo1(n) {
  console.log(n);
  if (n <= 1) {
    return;
  }

  return printNTo1(n - 1);
}

// printNTo1(5);

let number = 1;

function print1ToN(n) {
  if (n <= 0) {
    return;
  }

  print1ToN(n - 1);
  console.log(n);
}

// print1ToN(5);

//power

function power(x, n) {
  if (n === 0) {
    return 1;
  }

  return x * power(x, n - 1);
}

// factorial

function factorial(n) {
  if (n <= 1) {
    return 1;
  }

  return n * factorial(n - 1);
}

// console.log(factorial(10));

// sum 1 to N

function sum1ToN(n) {
  if (n <= 0) {
    return 0;
  }

  return n + sum1ToN(n - 1);
}

// console.log(sum1ToN(2))

// multiply without *

function multiplyWithout(x, n) {
  if (n <= 0) {
    return 0;
  }

  return x + multiplyWithout(x, n - 1);
}

// console.log(multiplyWithout(10, 10));

// print the chaaracters in a string

function printChar(char) {
  if (!char) {
    return;
  }

  console.log(char[0]);

  printChar(char.slice(1));
}

//print the characters in a string in reverse()

function printCharRev(char) {
  if (!char) {
    return;
  }

  console.log(char[char.length - 1]);

  printCharRev(char.slice(0, -1));
}

// count characters in a string
function countCharactersInAstring(str) {
  if (!str) {
    return 0;
  }

  return 1 + countCharactersInAstring(str.slice(1));
}

// console.log(countCharactersInAstring("llo"));

// find a character in a string

function findCharacterInAString(str, char) {
  if (str[0] === char) {
    return true;
  }

  if (!str) {
    return false;
  }

  return findCharacterInAString(str.slice(1), char);
}

// reverse a string with recursion

function reverseString(str) {
  if (str.length === 1) {
    return str;
  }

  return str[str.length - 1] + reverseString(str.slice(0, -1));
}

// console.log(reverseString("damien"));

// check for palindrome

function isPalindrome(str) {
  if (str.length === 1) {
    return str;
  }

  const reversedStr = str[str.length - 1] + reverseString(str.slice(0, -1));
  return reversedStr === str;
}

// find value in a nested array

function containsInNested(arr, val) {
  for (const el of arr) {
    if (Array.isArray(el)) {
      if (containsInNested(el, val)) {
        return true;
      }
    } else if (el === val) {
      return true;
    }
  }

  return false;
}

// flatten nested Arr

function flattenNestedArr(arr) {
  let compiledArr = [];
  for (const value of arr) {
    if (Array.isArray(value)) {
      compiledArr.push(...flattenNestedArr(value));
    } else {
      compiledArr.push(value);
    }
  }

  return compiledArr;
}

// console.log(flattenNestedArr([1, [2, [3, 4]], 5]));

function findKeyInObj(user, targetKey) {
  for (key in user) {
    if (key === targetKey) {
      return true;
    } else if (typeof user[key] === "object") {
      if (findKeyInObj(user[key], targetKey)) {
        return true;
      }
    }
  }

  return false;
}

const user = {
  name: "Alex",
  details: {
    address: {
      city: "Lagos",
    },
  },
};

// console.log(findKeyInObj(user, "password"));



// find ffiles in a folder structure


function findFiles(){
  
}