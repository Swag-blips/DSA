const { LinkedList, ListNode } = require("../../data-structures/linked-list");

const list1 = new LinkedList();
const list2 = new LinkedList();
const list3 = new LinkedList();
const list4 = new LinkedList();
const list5 = new LinkedList();
list1.append(5);
// list1.append(2);
// list1.append(3);
// list1.append(4);
// list2.append(1);

list2.append(1);
// list2.append(4);

list3.append(2);
// list3.append(6);

list4.append(3);
// list4.append(3);

list5.append(4);

function mergeKList() {
  const lists = [list1.head, list2.head, list3.head, list4.head, list5.head];
  const list = { head: null, tail: null };
  let outerList = list.head;
  let outerCount = 0;

  for (let i = 0; i < lists.length; i++) {
    if (!list.head) {
      let curr = lists[i];
      let count = 0;

      while (curr) {
        if (count === 0) {
          list.head = curr;
          list.tail = curr;
        } else {
          list.tail.next = curr;
          list.tail = curr;
        }
        count++;
        curr = curr.next;
      }
    } else {
      let curr = lists[i];
      outerList = list.head;
      let prev;
      while (curr) {
        while (outerList) {
          if (curr.value <= outerList.value) {
            const node = new ListNode(curr.value);

            if (outerCount === 0) {
              node.next = list.head;
              list.head = node;
            } else {
              node.next = prev.next;
              prev.next = node;
            }

            outerList = list.head;
            outerCount = 0;
            break;
          }

          if (outerList.next === null) {
            const node = new ListNode(curr.value);
            outerList.next = node;
            list.tail = node;
            outerList = list.head;
            outerCount = 0;
            break;
          }

          prev = outerList;
          outerList = outerList.next;
          outerCount++;
        }
        curr = curr.next;
      }
    }
  }

  console.dir(list, {
    depth: null,
    colors: true,
  });
}

mergeKList();
