function removeNthFromEnd(head, n) {
  let length = 0;

  let curr = head;

  while (curr) {
    length += 1;
    curr = curr.next;
  }
  let previousNode = length - n;
  if (n === 1 && length === 1) {
    head = null;
  } else if (previousNode === 0) {
    let headNode = head;
    head = head.next;
    headNode.next = null;
  } else {
    curr = head;

    let count = 1;

    while (count < previousNode) {
      curr = curr.next;
      count++;
    }

    let nextNode = curr.next;
    curr.next = nextNode.next;
    nextNode.next = null;
  }

  return head;
}

module.exports = { removeNthFromEnd };
