const { ListNode } = require("../../data-structures/linked-list");

function mergeTwoList(list1, list2) {
  let isInserted = false;
  let finalNode = null;

  while (list2) {
    let prev = list1;
    let next = list1?.next || null;
    const node = new ListNode(list2.value);

    while (next) {
      if (list2.value <= prev.value) {
        node.next = list1;
        list1 = node;

        isInserted = true;
        break;
      }
      if (list2.value <= next.value) {
        node.next = prev.next;
        prev.next = node;
        isInserted = true;

        break;
      }

      finalNode = next;
      next = next.next;
      prev = prev.next;
    }

    if (!isInserted) {
      if (!list1) {
        list1 = node;
      } else if (!list1.next) {
        if (list1.value >= node.value) {
          node.next = list1;
          list1 = node;
        } else {
          list1.next = node;
        }
      } else {
        finalNode.next = node;
      }
    }

    isInserted = false;
    list2 = list2.next;
  }

  return list1;
}

module.exports = { mergeTwoList };
