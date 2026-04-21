class MyLinkedList {
  constructor() {
    this.head = null;
    this.tail = null;
    this.length = 0; 
  }

  /**    
   * @param {number} index
   * @return {ListNode}
   */
  getPrev(index) {
    return this.getNode(index - 1);
  }
  getNode(index) {
    if (index < 0 || index >= this.length) {
      return -1;
    }
    let curr = this.head;
    let count = 0;

    while (count < index) {
      curr = curr.next;
      count++;
    }

    return curr;
  }

  /**
   * @param {number} index
   * @return {number}
   */
  get(index) {
    if (index < 0 || index >= this.length) {
      return -1;
    }
    let curr = this.head;
    let count = 0;

    while (count < index) {
      curr = curr.next;
      count++;
    }

    return curr.val;
  }

  /**
   * @param {number} val
   * @return {void}
   */
  addAtHead(val) {
    const node = new ListNode(val);

    if (!this.head) {
      this.head = node;
      this.tail = node;
    } else {
      node.next = this.head;
      this.head = node;
    }

    this.length++;
    return;
  }

  /**
   * @param {number} val
   * @return {void}
   */
  addAtTail(val) {
    const node = new ListNode(val);

    if (!this.head) {
      this.head = node;
      this.tail = node;
    } else {
      this.tail.next = node;
      this.tail = node;
    }

    this.length++;
    return;
  }

  /**
   * @param {number} index
   * @param {number} val
   * @return {void}
   */
  addAtIndex(index, val) {
    if (index < 0 || index > this.length) {
      return;
    }

    if (index === 0) {
      this.addAtHead(val);
      return;
    }
    if (index === this.length) {
      this.addAtTail(val);
      return;
    }

    const node = new ListNode(val);
    const prevNode = this.getPrev(index);

    node.next = prevNode.next;
    prevNode.next = node;
    this.length++;
    return;
  }

  /**
   * @param {number} index
   * @return {void}
   */
  deleteAtIndex(index) {
    if (index < 0 || index >= this.length) {
      return;
    }

    if (index === 0) {
      if (this.length === 1) {
        this.head = null;
        this.tail = null;
      } else {
        const removedNode = this.head;
        this.head = this.head.next;
        removedNode.next = null;
      }

      this.length--;
      return;
    }

    if (index === this.length - 1) {
      let curr = this.head;
      while (curr.next !== this.tail) {
        curr = curr.next;
      }

      this.tail = curr;
      curr.next = null;
      this.length--;
      return;
    }

    const prevNode = this.getPrev(index);
    const nextNode = prevNode.next;

    prevNode.next = nextNode.next;
    nextNode.next = null;
    this.length--;
    return;
  }
}

class ListNode {
  constructor(val) {
    this.val = val;
    this.next = null;
  }
}

const ll = new MyLinkedList();
ll.addAtHead(1);
ll.addAtTail(3);
ll.addAtIndex(1, 2);

ll.deleteAtIndex(1);
console.log(ll.get(1));

console.dir(ll, {
  depth: null,
  colors: true,
});
