class Queue {
  constructor() {
    this.front = null;
    this.rear = null;
    this.length = 0;
  }

  enqueue(value) {
    const node = new ListNode(value);

    if (!this.front) {
      this.front = node;
      this.rear = node;
    } else {
      this.rear.next = node;
      this.rear = node;
    }

    this.length++;
    return this;
  }

  dequeue() {
    if (!this.front) return;
    const removedNode = this.front;
    if (this.length === 1) {
      this.front = null;
      this.rear = null;
    } else {
      this.front = this.front.next;
      removedNode.next = null;
    }

    this.length--;
    return removedNode;
  }
}

class ListNode {
  constructor(value) {
    this.value = value;
    this.next = null;
  }
}

const studentqueue = new Queue();
const sandwichqueue = new Queue();

function numOfStudents(students, sandwiches) {
  for (const student of students) {
    studentqueue.enqueue(student);
  }

  for (const sandwich of sandwiches) {
    sandwichqueue.enqueue(sandwich);
  }

  while (sandwichqueue.front) {
    let studentCurr = studentqueue.front;
    let sandwichCurr = sandwichqueue.front;
    let shouldBreak = false;

    if (studentCurr.value === sandwichCurr.value) {
      studentqueue.dequeue();
      sandwichqueue.dequeue();
    } else {
      const student = studentqueue.dequeue();
      studentqueue.enqueue(student.value);
    }

    let innerCur = studentqueue.front;

    while (innerCur) {
      if (innerCur.value === sandwichqueue.front.value) {
        shouldBreak = true;
        break;
      }
      innerCur = innerCur.next;
    }

    if (!shouldBreak) {
      console.log("BREAKING OUTER LOOP");
      break;
    }
  }

  return studentqueue.length;
}

console.log(numOfStudents([1, 1, 1, 0, 0, 1], [1, 0, 0, 0, 1, 1]));
