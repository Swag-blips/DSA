const { LinkedList, ListNode } = require("../../data-structures/linked-list");

const list1 = new LinkedList();
const list2 = new LinkedList();

list1.append(0);
// list1.append(4);
// list1.append(3);



list2.append(0);
// list2.append(6);
// list2.append(4);


function addTwoNumbers(node1, node2) {
  let head1 = node1;
  let head2 = node2;

  let finalList = {
    head: null,
    tail: null,
  };

  let value1 = "";
  let value2 = "";
  while (head1) {
    value1 += head1.value;
    head1 = head1.next;
  }

  while (head2) {
    value2 += head2.value;
    head2 = head2.next;
  }

  value1 = value1.split("").reverse().join("");
  value2 = value2.split("").reverse().join("");

  let finalValue = Number(value1) + Number(value2);

  finalValue = finalValue.toString().split("").reverse();

  for (let i = 0; i < finalValue.length; i++) {
    const val = new ListNode(Number(finalValue[i]));

    if (!finalList.head) {
      finalList.head = val;
      finalList.tail = val;
    } else {
      finalList.tail.next = val;
      finalList.tail = val;
    }
  }

  return finalList.head;
}

console.log(addTwoNumbers(list1.head, list2.head));
 
