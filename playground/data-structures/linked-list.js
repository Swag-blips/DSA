const { LinkedList } = require("../../src/data-structures/linked-list");

const list = new LinkedList();

list.append("red");
list.append("green");
list.append("blue");
list.append("purple");
list.append("orange");

console.log(list.get(3));
