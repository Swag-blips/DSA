const { DoublyLinkedList } = require("../../data-structures/doubly-linked-list");

const list1 = new DoublyLinkedList();

list1.append(10);
list1.append(5);
list1.append(15);
list1.append(20);
list1.append(25);
list1.prepend(2);
list1.prepend(1);

function convertToArray2(node) {
  const arr = [];
  let back = node;
  let head;

  while (back) {
    if (back.prev === null) {
      head = back;
    }
    back = back.prev;
  }

  let curr = head;

  while (curr) {
    arr.push(curr.value);
    curr = curr.next;
  }

  return arr;
}

console.log(convertToArray2(list1.tail));
