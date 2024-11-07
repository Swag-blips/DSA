// recursion

// Write a recursive function factorial(n) that returns the factorial of a non-negative integer n. The factorial of a number is the product of all positive integers less than or equal to that number.
// E.g factorial(5) will result in 120 because 5 * 4 * 3 * 2 * 1 = 120

const factorial = (n) => {
  if (n === 0) return 1;
  return n * factorial(n - 1);
};

console.log(factorial(5));
