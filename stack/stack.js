class Stack {
  constructor() {
    this.stack = [];
  }

  push(value) {
    this.stack.push(value);
  }

  isEmpty() {
    return this.stack.length === 0;
  }

  pop() {
    if (this.isEmpty()) return null;
    return this.stack.pop();
  }

  peek() {
    return this.stack[this.stack.length - 1];
  }

  size() {
    return this.stack.length;
  }
}

export default function sum(value) {
  let total = value;
  return function sumTotal(val) {
    if (val !== undefined) {
      total += val;
      return sumTotal;
    } else {
      return total;
    }
  };
}

const sumFn = sum(1);

sumFn(2);

console.log(sumFn());
