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

module.exports = { reverseLinkedList };
