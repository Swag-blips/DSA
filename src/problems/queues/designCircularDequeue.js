const { ListNode } = require("../../data-structures/linked-list");

class MyCircularDeque {
  constructor(size) {
    this.size = size;
    this.head = null;
    this.tail = null;
    this.length = 0;
  }

  insertFront(value) {
    if (this.length === this.size) return false;

    const node = new ListNode(value);

    if (!this.head) {
      this.head = node;
      this.tail = node;
    } else {
      node.next = this.head;
      this.head = node;
    }

    this.length++;
    return true;
  }

  insertLast(value) {
    if (this.length === this.size) return false;

    const node = new ListNode(value);

    if (!this.head) {
      this.head = node;
      this.tail = node;
    } else if (this.length === 1) {
      this.head.next = node;
      this.tail = node;
    } else {
      this.tail.next = node;
      this.tail = node;
    }

    this.length++;

    return true;
  }

  deleteFront() {
    if (this.length === 0) return false;

    if (this.length === 1) {
      this.head = null;
      this.tail = null;
    } else {
      let removedNode = this.head;
      this.head = this.head.next;
      removedNode.next = null;
    }

    this.length--;
    return true;
  }

  deleteLast() {
    if (this.length === 0) return false;

    if (this.length === 1) {
      this.head = null;
      this.tail = null;
    } else {
      let curr = this.head;

      while (curr.next !== this.tail) {
        curr = curr.next;
      }

      this.tail = curr;
      this.tail.next = null;
    }

    this.length--;
    return true;
  }

  getFront() {
    if (this.length === 0) return -1;

    return this.head.value;
  }

  getRear() {
    if (this.length === 0) return -1;

    return this.tail.value;
  }

  isEmpty() {
    return this.length === 0;
  }

  isFull() {
    return this.length === this.size;
  }
}

module.exports = { MyCircularDeque };

if (require.main === module) {
  const output = [null];
  const myCircularDeque = new MyCircularDeque(3);

  output.push(myCircularDeque.insertLast(1));
  output.push(myCircularDeque.insertLast(2));
  output.push(myCircularDeque.insertFront(3));
  output.push(myCircularDeque.insertFront(4));
  output.push(myCircularDeque.getRear());
  output.push(myCircularDeque.isFull());
  output.push(myCircularDeque.deleteLast());
  output.push(myCircularDeque.insertFront(4));
  output.push(myCircularDeque.getFront());

  console.log(output);
}
