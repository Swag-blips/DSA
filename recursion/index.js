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
    return 0
  }

  return n + sum1ToN(n - 1);
}

// console.log(sum1ToN(2))