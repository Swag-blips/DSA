const { LinkedList, ListNode } = require("../../data-structures/linked-list");
const list = new LinkedList();

list.append(1);
list.append(2);
list.append(2);
list.append(3);
// list.append(4);
// list.append(5);
// list.append(6);

function removedLinkedListElement(head, val) {
  if (!head) {
    return head;
  }

  if (!head.next) {
    if (head.value === val) {
      head = null;
    }

    return head;
  }
  let curr = head;
  let prev = null;

  while (curr) {
    let nextValue = curr.next;
    let nextValueForPrev = curr;
    if (curr.value === val) {
      if (curr === head) {
        head = head.next;
      } else {
        prev.next = curr.next;
        curr.next = null;
      }
    }
    prev = nextValueForPrev;
    curr = nextValue;

    console.log('prev', prev, 'curr', curr)
  }

  return head;
}

console.dir(removedLinkedListElement(list.head, 2), {
  depth: null,
  colors: true,
});

// function createList(values) {
//   const list = new LinkedList();

//   for (const value of values) {
//     list.append(value);
//   }

//   return list.head;
// }

// function listToArray(head) {
//   const result = [];
//   let curr = head;

//   while (curr) {
//     result.push(curr.value);
//     curr = curr.next;
//   }

//   return result;
// }

// listToArray()

// function assertListEqual(actualHead, expected) {
//   const actual = listToArray(actualHead);

//   if (
//     actual.length !== expected.length ||
//     actual.some((value, index) => value !== expected[index])
//   ) {
//     throw new Error(`Expected [${expected}], but got [${actual}]`);
//   }
// }

// assertListEqual(
//   removedLinkedListElement(createList([1, 2, 6, 3, 4, 5, 6]), 6),
//   [1, 2, 3, 4, 5],
// );
// console.log("Test 1 passed");

// assertListEqual(removedLinkedListElement(createList([]), 1), []);
// console.log("Test 2 passed");

// assertListEqual(removedLinkedListElement(createList([7, 7, 7, 7]), 7), []);
// console.log("Test 3 passed");

// assertListEqual(removedLinkedListElement(createList([1]), 1), []);
// console.log("Test 4 passed");

// assertListEqual(removedLinkedListElement(createList([1]), 2), [1]);
// console.log("Test 5 passed");

// assertListEqual(
//   removedLinkedListElement(createList([1, 2, 3, 4]), 1),
//   [2, 3, 4],
// );
// console.log("Test 6 passed");

// assertListEqual(
//   removedLinkedListElement(createList([1, 2, 3, 4]), 4),
//   [1, 2, 3],
// );
// console.log("Test 7 passed");

// assertListEqual(removedLinkedListElement(createList([1, 2, 2, 3]), 2), [1, 3]);
// console.log("Test 8 passed");

// assertListEqual(removedLinkedListElement(createList([2, 2, 1, 2, 2]), 2), [1]);
// console.log("Test 9 passed");

// assertListEqual(
//   removedLinkedListElement(createList([1, 2, 3, 4, 5]), 9),
//   [1, 2, 3, 4, 5],
// );
// console.log("Test 10 passed");

// console.log("✅ All tests passed");
