const { Queue } = require("../../data-structures/Queue");

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
