const { LinkedList, ListNode } = require("../../data-structures/LinkedList");

const list = new LinkedList();

list.append(9);
list.append(8);
list.append(7);
list.append(6);
list.append(5);
list.append(6);

function swapNodeInPairs(head) {
  if (!head) return head;
  let linkedListLength = 0;

  let lenTracker = head;

  while (lenTracker) {
    lenTracker = lenTracker.next;
    linkedListLength++;
  }

  const remainder = Math.trunc(linkedListLength / 2);
  let swapCounter = 0;

  let curr = head.next;
  let prev = head;
  let slow = head;

  if (linkedListLength === 2) {
    curr.next = prev;
    prev.next = null;
    head = curr;
  } else {
    while (swapCounter < remainder) {
      let nextValForCurr = curr?.next?.next;
      let nextValForPrev = curr.next;
      if (swapCounter === 0) {
        prev.next = curr.next;
        curr.next = prev;

        head = curr;
        slow = head;
      } else {
        console.log("prev", prev, "curr", curr, "slow", slow);
        prev.next = curr.next;
        curr.next = prev;
        slow.next = curr;
      }

      //   console.log("LIST AT THE END OF SWAP");
      //   console.dir(head, {
      //     depth: null,
      //     colors: true,
      //   });
      slow = prev;
      curr = nextValForCurr;
      prev = nextValForPrev;

      swapCounter++;
    }
  }

  return head;
}

// console.dir(swapNodeInPairs(list.head), {
//   depth: null,
//   colors: true,
// });

function createList(values) {
  const list = new LinkedList();

  for (const value of values) {
    list.append(value);
  }

  return list.head;
}

function listToArray(head) {
  const result = [];
  let curr = head;

  while (curr) {
    result.push(curr.value);
    curr = curr.next;
  }

  return result;
}
