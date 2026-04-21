const { LinkedList } = require("../data-structures/linked-list");

function createList(values) {
  const list = new LinkedList();

  for (const value of values) {
    list.append(value);
  }

  return list.head;
}

function listToArray(head) {
  const values = [];
  let current = head;

  while (current) {
    values.push(current.value);
    current = current.next;
  }

  return values;
}

module.exports = { createList, listToArray };
