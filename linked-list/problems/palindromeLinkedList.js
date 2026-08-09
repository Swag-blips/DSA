const { LinkedList, ListNode } = require("../../data-structures/LinkedList");

function isPalindrome(head) {
  let curr = head;

  let value = "";

  while (curr) {
    value += curr.value;
    curr = curr.next;
  }

  return value === value.split("").reverse().join("");
}
