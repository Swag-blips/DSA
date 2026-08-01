class Queue {
  constructor() {
    this.front = null;
    this.rear = null;
    this.length = 0;
  }

  pop() {
    let removedNode = this.front;
    if (this.length === 0) {
      return null;
    }
    if (this.length === 1) {
      this.front = null;
      this.rear = null;
    } else {
      this.front = this.front.next;
      removedNode.next = null;
    }

    this.length--;
    return removedNode;
  }

  push(value) {
    const node = new ListNode(value);

    if (this.length === 0) {
      this.front = node;
      this.rear = node;
    } else {
      this.rear.next = node;
      this.rear = node;
    }

    this.length++;
    return this;
  }
}

class ListNode {
  constructor(value) {
    this.value = value;
    this.next = null;
  }
}

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
