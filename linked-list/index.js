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
}

class ListNode {
  constructor(value) {
    this.value = value;
    this.next = null;
  }
}
const list = new LinkedList();

// list.append("red");
// list.append("green");
// list.append("blue");
// list.prepend("purple");
list.prepend("orange");

console.log(list);

// const node1 = new ListNode("red");
// const node2 = new ListNode("blue");
// const node3 = new ListNode("green");

// node1.next = node2;
// node2.next = node3;

// let current = node1;

// while (current) {
//   console.log(current.value);
//   current = current.next;
// }
