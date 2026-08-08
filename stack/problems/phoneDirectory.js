class PhoneDirectory {
  constructor(maxNumbers) {
    this.maxNumbers = maxNumbers;
    this.directory = Array.from({ length: maxNumbers }, (_, index) => index);
  }

  get() {
    if (this.directory.every((number) => number === null)) {
      return -1;
    }
    const numberIndex = this.directory.findIndex(
      (number) => number <= this.maxNumbers &&  number !== null,
    );
    const number = this.directory[numberIndex];
    this.directory[numberIndex] = null;

    return number;
  }

  check(number) {
    const foundNumber = this.directory.indexOf(number);

    if (foundNumber !== -1) return true;

    return false;
  }

  release(number) {
    if (number > this.directory.length - 1) return false;

    return (this.directory[number] = number);
  }
}

function test(name, actual, expected) {
  const passed = actual === expected;

  console.log(
    `${passed ? "✅ PASS" : "❌ FAIL"} | ${name} | actual: ${actual} | expected: ${expected}`
  );
}

const directory = new PhoneDirectory(3);

// Initially all numbers should be available
test("check(0) initially", directory.check(0), true);
test("check(1) initially", directory.check(1), true);
test("check(2) initially", directory.check(2), true);

// Get first available number
const a = directory.get();
console.log("get #1:", a);
test(`check(${a}) after get`, directory.check(a), false);

// Get second
const b = directory.get();
console.log("get #2:", b);
test(`check(${b}) after get`, directory.check(b), false);

// Get third
const c = directory.get();
console.log("get #3:", c);
test(`check(${c}) after get`, directory.check(c), false);

// No numbers should remain
console.log(directory.directory)
const d = directory.get();
test("get when directory is full", d, -1);

// Release one number
console.log('b',b)
directory.release(b);

test(`check(${b}) after release`, directory.check(b), true);

// Released number should be obtainable again
const e = directory.get();
console.log("get after release:", e);

test("released number reused", e, b);
test(`check(${e}) after getting again`, directory.check(e), false);
