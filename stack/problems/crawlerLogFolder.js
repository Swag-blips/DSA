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

function crawlerLogFolder(operations) {
  for (let i = 0; i < operations.length; i++) {
    const currentOperation = operations[i];
    if (stack.size() === 0) {
      stack.push(currentOperation);
      continue;
    }

    if (currentOperation === "./") {
      continue;
    } else if (currentOperation === "../") {
      stack.pop();
      continue;
    } else {
      stack.push(currentOperation);
    }
  }
  return stack.stack;
}

crawlerLogFolder();
