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

module.exports = { swapNodeInPairs };
   
