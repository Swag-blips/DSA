console.log("Hello world");

// fibonacci numbers using for loops

// 1. Two variables to hold the two previous numbers
// 2. a for loop that runs 18 times
// 3. creates new fibonnaci number by adding thw two previous ones
// 4. prints the new fibonnacii number
// 5. update the variables that holds the two previous fibonacci numbers

let prev2 = 0;
let prev1 = 1;

let fibonacci;

for (let i = 0; i <= 18; i++) {
  fibonacci = prev1 + prev2;

  console.log(fibonacci);

  prev2 = prev1;
  prev1 = fibonacci;
}



// with recursion

console.log(0);
console.log(1);
let count = 2;
function fibonacciRecursive(prev, next) {
  if (count < 20) {
    const newFibo = prev + next;
    console.log(newFibo);
    count++;

    fibonacciRecursive(newFibo, prev);
  } else {
    return;
  }
}

fibonacciRecursive(1, 0);
