class Stack {
  constructor() {
    this.stack = [];
  }

  push(value) {
    return this.stack.push(value);
  }

  pop() {
    if (this.isEmpty()) return null;

    return this.stack.pop();
  }

  peek() {
    return this.stack[this.stack.length - 1];
  }

  isEmpty() {
    return this.stack.length === 0;
  }

  size() {
    return this.stack.length;
  }
}

const stack = new Stack();

function calculatePoints(operations) {
  for (let i = 0; i < operations.length; i++) {
    if (operations[i] === "+") {
      let total = 0;
      for (let j = 0; j < i; j++) {
        total += Number(operations[j]);
      }

      stack.push(total);
      total = 0;
    } else if (operations[i] === "C") {
      stack.pop();
    } else if (operations[i] === "D") {
      const latestValue = stack.peek();
      stack.push(Number(latestValue * 2));
    } else stack.push(Number(operations[i]));

    console.log(`stack after ${i}th iteration`, stack);
  }

  let total = 0;
  for (let i = 0; i < stack.size(); i++) {
    total += stack.stack[i];
  }

  return total;
}

console.log(calculatePoints(["5", "D", "+", "C"]));
