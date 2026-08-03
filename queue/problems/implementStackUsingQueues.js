const { Queue } = require("../../data-structures/Queue");

class MyStack {
  constructor() {
    this.mainqueue = new Queue();
    this.altqueue = new Queue();
  }

  /**
   * @param {number} x
   * @return {void}
   */
  push(x) {
    return this.mainqueue.push(x);
  }

  /**
   * @return {number}
   */
  pop() {
    let curr = this.mainqueue.front;

    let finalValue;

    while (curr) {
      if (curr.next === null) {
        finalValue = curr;
        break;
      } else {
        const value = this.mainqueue.pop();
        this.altqueue.push(value.value);
      }
      curr = this.mainqueue.front;
    }

    const transQueue = this.altqueue;

    this.mainqueue = transQueue;

    this.altqueue = new Queue();

    return finalValue.value;
  }

  /**
   * @return {number}
   */
  top() {
    let curr = this.mainqueue.front;

    let finalValue;
    while (curr) {
      if (curr.next === null) {
        finalValue = curr;
      }

      const removedNode = this.mainqueue.pop();

      this.altqueue.push(removedNode.value);
      curr = this.mainqueue.front;
    }

    let transqueue = this.altqueue;
    this.mainqueue = transqueue;
    this.altqueue = new Queue();

    return finalValue.value;
  }

  /**
   * @return {boolean}
   */
  empty() {
    return this.mainqueue.length === 0;
  }
}

const stack = new MyStack();

stack.push(1);
stack.push(2);

console.log(stack.top());
console.log(stack.pop());
console.log(stack.empty());
