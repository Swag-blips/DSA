class DoublyLinkedList {
  constructor() {
    this.head = null;
    this.tail = null;
    this.length = 0;
  }
  append(value) {
    const node = new ListNode(value);
    if (!this.head) {
      this.head = node;
      this.tail = node;
    } else {
      this.tail.next = node;
      node.prev = this.tail;
      this.tail = node;
    }
    this.length++;
    return node;
  }

  removeLast() {
    let removedNode = this.tail;
    if (!this.head) {
      return null;
    }

    if (this.length === 1) {
      this.head = null;
      this.tail = null;
      this.length--;
      return removedNode;
    }

    this.tail = this.tail.prev;
    this.tail.next = null;
    removedNode.prev = null;

    this.length--;
    return removedNode;
  }

  prepend(value) {
    const node = new ListNode(value);

    if (!this.head) {
      this.head = node;
      this.tail = node;
    } else {
      this.head.prev = node;
      node.next = this.head;
      this.head = node;
    }

    this.length++;
    return node;
  }

  contains(value) {
    let current = this.head;

    while (current) {
      if (current.value === value) return true;

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
    let current = this.head;
    let count = 0;

    if (index >= this.length || index < 0) {
      return null;
    }

    while (count < index) {
      current = current.next;
      count++;
    }

    return current;
  }
  set(index, value) {
    const node = this.get(index);

    if (!node) return false;
    node.value = value;
    return true;
  }

  insert(index, value) {
    if (index < 0 || index > this.length) {
      return null;
    }

    if (index === 0) {
      return this.prepend(value);
    }

    if (index === this.length) {
      return this.append(value);
    }

    const node = new ListNode(value);
    const prevNode = this.get(index - 1);
    const nextNode = prevNode.next;

    nextNode.prev = node;
    node.next = nextNode;
    prevNode.next = node;

    node.prev = prevNode;

    this.length++;

    return node;
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
      this.head.prev = null;
      removedNode.next = null;
    }

    this.length--;
    return removedNode;
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
    const futureNode = previousNode.next.next;

    previousNode.next = removedNode.next;
    futureNode.prev = previousNode;
    removedNode.next = null;
    removedNode.prev = null;

    this.length--;
    return removedNode;
  }
}

class ListNode {
  constructor(value) {
    this.value = value;
    this.next = null;
    this.prev = null;
  }
}

const list1 = new DoublyLinkedList();

list1.append(10);
list1.append(5);
list1.append(15);
list1.append(20);
list1.append(25);
list1.prepend(2);
list1.prepend(1);
console.log(list1.contains(2));
