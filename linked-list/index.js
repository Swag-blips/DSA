const { LinkedList, ListNode } = require("../data-structures/LinkedList");

const list = new LinkedList();

list.append("red");
list.append("green");
list.append("blue");
list.append("purple");
list.append("orange");

console.log(list.get(3));
