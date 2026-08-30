const { ListNode } = require("../../data-structures/linked-list");

function oddEvenLinkedList(head) {
  if (!head) return null;

  if (!head.next || !head.next.next) return head;

  let count = 2;
  let curr = head.next;
  let prev = head;

  let removedNodes = [];
   
  while (curr) {
    let nextNode = curr.next;
    if (count % 2 === 0) {
      prev.next = nextNode;
      curr.next = null;
      removedNodes.push(curr.value);
    }

    prev = nextNode;
    curr = nextNode.next;

    count += 2;
  }

  let tail = head;

  while (tail.next !== null) {
    tail = tail.next;
  }


  for (let i = 0; i < removedNodes.length; i++) {
    let node = new ListNode(removedNodes[i]);

    tail.next = node;
    tail = node;
  }

  return head;
}

module.exports = { oddEvenLinkedList };

if (require.main === module) {
  const head = new ListNode(1);
  head.next = new ListNode(2);
  head.next.next = new ListNode(3);
  head.next.next.next = new ListNode(4);
  head.next.next.next.next = new ListNode(5);

  const result = oddEvenLinkedList(head);

  console.dir(result, { depth: null });
}
