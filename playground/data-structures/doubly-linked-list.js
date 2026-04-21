const { DoublyLinkedList } = require("../../src/data-structures/doubly-linked-list");

const list1 = new DoublyLinkedList();

list1.append(10);
list1.append(5);
list1.append(15);
list1.append(20);
list1.append(25);
list1.prepend(2);
list1.prepend(1);
console.log(list1.contains(2));
