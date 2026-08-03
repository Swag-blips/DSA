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

    for (let i = 0; i < mainStack.size(); i++) {
      const value = this.mainStack.pop();
      if (i === mainStack.size() - 1) {
        finalValue = value;
      } else {
        this.altStack.push(value);
      }
    }

    const preservedAltStack = this.altStack;
    this.mainStack = preservedAltStack;
    this.altStack = new Stack();
    this.length--;

    return finalValue;
  }

  peek() {
    const mainStack = this.mainStack;
    let finalValue;

    for (let i = 0; i < mainStack.size(); i++) {
      const value = this.mainStack.pop();
      if (i === mainStack.size() - 1) {
        finalValue = value;
      }
      this.altStack.push(value);
    }

    const preservedAltStack = this.altStack;
    this.mainStack = preservedAltStack;
    this.altStack = new Stack();

    return finalValue;
  }

  empty() {
    return this.mainStack.size() === 0;
  }
}
