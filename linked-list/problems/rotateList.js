const { LinkedList, ListNode } = require("../../data-structures/LinkedList");
const list = new LinkedList();

list.append(0);
list.append(1);
list.append(2);
list.append(4);
list.append(5);

function rotateList(head, k) {
  if (!head.next) {
    return head;
  }
  let tail = head;

  while (tail.next !== null) {
    tail = tail.next;
  }
  let count = 0;
  while (count < k) {
    let prev = head;

    while (prev.next !== tail) {
      prev = prev.next;
    }

    prev.next = null;
    tail.next = head;
    head = tail;
    tail = prev;
    count++;
  }
  return head;
}

rotateList(list.head, 4);
