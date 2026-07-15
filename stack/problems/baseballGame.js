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

  peek(n) {
    return this.stack[this.stack.length - n];
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

      let previousElement = stack.peek(1);
      let previousSecondElement = stack.peek(2);

 

      total = total + previousElement + previousSecondElement;

      stack.push(total);
    } else if (operations[i] === "C") {
      stack.pop();
    } else if (operations[i] === "D") {
      const latestValue = stack.peek(1);
      stack.push(Number(latestValue * 2));
    } else stack.push(Number(operations[i]));

    console.log(`stack after ${i + 1}th iteration`, stack);
  }

  let total = 0;
  for (let i = 0; i < stack.size(); i++) {
    total += stack.stack[i];
  }

  return total;
}

console.log(calculatePoints(["5", "-2", "4", "C", "D", "9", "+", "+"]));
