class Queue {
  constructor() {
    this.front = null;
    this.rear = null;
    this.length = 0;
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

  enqueue(value) {
    return this.push(value);
  }

  pop() {
    if (this.length === 0) return null;

    return this.removeFront();
  }

  dequeue() {
    if (!this.front) return;

    return this.removeFront();
  }

  removeFront() {
    const removedNode = this.front;

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
}

class ListNode {
  constructor(value) {
    this.value = value;
    this.next = null;
  }
}

module.exports = { ListNode, Queue };
