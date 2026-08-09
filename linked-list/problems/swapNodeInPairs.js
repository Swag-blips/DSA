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

function assertListEqual(actualHead, expected) {
  const actual = listToArray(actualHead);

  if (
    actual.length !== expected.length ||
    actual.some((value, i) => value !== expected[i])
  ) {
    throw new Error(
      `Expected [${expected}], but got [${actual}]`
    );
  }
}

assertListEqual(
  swapNodeInPairs(createList([1, 2, 3, 4])),
  [2, 1, 4, 3]
);
console.log("Test 1 passed");

assertListEqual(
  swapNodeInPairs(createList([])),
  []
);
console.log("Test 2 passed");

assertListEqual(
  swapNodeInPairs(createList([1])),
  [1]
);
console.log("Test 3 passed");

assertListEqual(
  swapNodeInPairs(createList([1, 2])),
  [2, 1]
);
console.log("Test 4 passed");

assertListEqual(
  swapNodeInPairs(createList([1, 2, 3])),
  [2, 1, 3]
);
console.log("Test 5 passed");

assertListEqual(
  swapNodeInPairs(createList([1, 2, 3, 4, 5])),
  [2, 1, 4, 3, 5]
);
console.log("Test 6 passed");

assertListEqual(
  swapNodeInPairs(createList([1, 2, 3, 4, 5, 6])),
  [2, 1, 4, 3, 6, 5]
);
console.log("Test 7 passed");

assertListEqual(
  swapNodeInPairs(createList([9, 8, 7, 6, 5, 6])),
  [8, 9, 6, 7, 6, 5]
);
console.log("Test 8 passed");

assertListEqual(
  swapNodeInPairs(createList([5, 5, 5, 5])),
  [5, 5, 5, 5]
);
console.log("Test 9 passed");

assertListEqual(
  swapNodeInPairs(createList([10, 20, 30, 40, 50, 60, 70])),
  [20, 10, 40, 30, 60, 50, 70]
);
console.log("Test 10 passed");

console.log("✅ All tests passed");