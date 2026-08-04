const { Stack } = require("../../data-structures/Stack");

class Queue {
  constructor() {
    this.mainStack = new Stack();
    this.altStack = new Stack();
    this.length = 0;
  }

  push(n) {
    this.mainStack.push(n);
    this.length++;
    return;
  }

  pop() {
    const mainStack = this.mainStack;

    let finalValue;

    while (mainStack.size()) {
      const value = mainStack.pop();

      if (mainStack.size() === 0) {
        finalValue = value;
        continue;
      }

      this.altStack.push(value);
    }

    while (this.altStack.size()) {
      const value = this.altStack.pop();
      this.mainStack.push(value);
    }

    this.length--;


    console.log(this.altStack, this.mainStack)
    return finalValue;
  }

  peek() {
    const mainStack = this.mainStack;

    let finalValue;

    while (mainStack.size()) {
      const value = mainStack.pop();

      if (mainStack.size() === 0) {
        finalValue = value;
      }

      this.altStack.push(value);
    }

    while (this.altStack.size()) {
      const value = this.altStack.pop();
      this.mainStack.push(value);
    }

    
    return finalValue;
  }

  empty() {
    return this.mainStack.size() === 0;
  }
}

const queue = new Queue();

queue.push(1);
queue.push(2);
queue.push(3);
queue.push(4);

console.log(queue.pop(), queue.pop());
