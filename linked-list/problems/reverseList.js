const { LinkedList, ListNode } = require("../../data-structures/LinkedList");

const list1 = new LinkedList();
const list2 = new LinkedList();

list1.append(7);
list1.append(7);
list1.append(7);
// list1.append(3);
// list1.append(50);
// list1.append(3);

function reverseLinkedList(head) {
  let node = null;
  let prev = null;

  while (head) {
    if (!node) {
      prev = head;
      head = head.next;
      node = prev;
      prev.next = null;
      continue;
    }

    prev = head;
    head = head.next;
    prev.next = node;
    node = prev;
  }

  return prev;
}

reverseLinkedList();
