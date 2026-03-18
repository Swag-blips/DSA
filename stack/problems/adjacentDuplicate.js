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

function adjacentDuplicate(s) {
  const splittedS = s.split("");
  for (let i of splittedS) {
    console.log("ith iteration", i);
    console.log("stack", stack.stack);
    if (stack.stack.length === 0) {
      stack.push(i);
      continue;
    }
    if (stack.peek() === i) {
      stack.pop();
      continue;
    } else {
      stack.push(i);
    }
  }

  return stack.stack.join("");
}

console.log(adjacentDuplicate("azxxzy"));
