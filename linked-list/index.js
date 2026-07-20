class LinkedList {
  constructor() {
    this.head = null;
    this.tail = null;
    this.length = 0;
  }

  append(value) {
    const node = new ListNode(value);

    if (this.length === 0) {
      this.head = node;
      this.tail = node;
    } else {
      this.tail.next = node;
      this.tail = node;
    }

    this.length++;
  }

  prepend(value) {
    const node = new ListNode(value);
    if (this.length === 0) {
      this.tail = node;
    }
    node.next = this.head;
    this.head = node;

    this.length++;
  }

  contains(value) {
    let current = this.head;

    while (current) {
      if (current.value === value) {
        return true;
      }
      current = current.next;
    }

    return false;
  }

  find(value) {
    let current = this.head;

    while (current) {
      if (current.value === value) {
        return current;
      }

      current = current.next;
    }

    return null;
  }

  get(index) {
    if (index >= this.length) {
      return null;
    }

    if (index < 0) {
      return null;
    }

    let current = this.head;
    let count = 0;
    while (count < index) {
      current = current.next;
      count++;
    }

    return current;
  }

  set(index, value) {
    let node = this.get(index);
    if (!node) return false;

    node.value = value;

    return true;
  }
  insert(index, value) {
    if (index < 0 || index > this.length) {
      return false;
    }

    if (index === 0) {
      return this.prepend(value);
    }

    if (index === this.length) {
      return this.append(value);
    }

    const node = new ListNode(value);
    const previous = this.get(index - 1);

    node.next = previous.next;
    previous.next = node;

    this.length++;

    return node;
  }

  remove(index) {
    if (index < 0 || index >= this.length) {
      return null;
    }
    if (index === 0) {
      return this.removeFirst();
    }

    if (index === this.length - 1) {
      return this.removeLast();
    }

    const previousNode = this.get(index - 1);
    const removedNode = previousNode.next;

    previousNode.next = removedNode.next;
    removedNode.next = null;
    this.length--;
    return removedNode;
  }

  removeLast() {
    let removedNode = this.tail;
    if (!this.head) {
      return null;
    }

    if (this.length === 1) {
      this.head = null;
      this.tail = null;
    } else {
      let current = this.head;
      while (current.next !== this.tail) {
        current = current.next;
      }

      this.tail = current;
      current.next = null;
    }

    this.length--;
    return removedNode;
  }
  removeFirst() {
    const removedNode = this.head;

    if (!this.head) {
      return null;
    }

    if (this.length === 1) {
      this.head = null;
      this.tail = null;
    } else {
      this.head = this.head.next;
    }

    this.length--;

    removedNode.next = null;

    return removedNode;
  }
}

class ListNode {
  constructor(value) {
    this.value = value;
    this.next = null;
  }
}
const list = new LinkedList();

list.append("red");
list.append("green");
list.append("blue");
list.append("purple");
list.append("orange");

console.log(list.get(3));
