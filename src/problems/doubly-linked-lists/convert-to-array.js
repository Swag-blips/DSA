const { DoublyLinkedList } = require("../../data-structures/doubly-linked-list");

function convertToArray(head) {
  const arr = [];
  let curr = head;

  while (curr) {
    arr.push(curr.value);
    curr = curr.next;
  }

  return arr;
}
  
