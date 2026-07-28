class Queue {
  constructor() {
    this.front = null;
    this.rear = null;
    this.length = 0;
  }

  enqueue(value) {
    const node = new Node(value);

    if (!this.front) {
      this.front = node;
      this.rear = node;
    } else {
      this.rear.next = node;
      this.rear = node;
    }

    this.length++;
    return this;
  }

  dequeue() {
    if (!this.front) return;
    const removedNode = this.front;
    if (this.length === 1) {
      this.front = null;
      this.rear = null;
    } else {
      this.front = this.front.next;
      removedNode.next = null;
    }

    this.length--;
    return removedNode
  }
}

class ListNode {
  constructor(value) {
    this.value = value;
    this.next = null;
  }
}
