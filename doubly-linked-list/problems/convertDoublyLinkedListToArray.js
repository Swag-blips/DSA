const { DoublyLinkedList } = require("../../data-structures/DoublyLinkedList");

function convertToArray(head) {
  const arr = [];
  let curr = head;

  while (curr) {
    arr.push(curr.value);
    curr = curr.next;
  }

  return arr;
}
