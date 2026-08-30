

const { LinkedList } = require("../src/data-structures/linked-list");

function splitListIntoParts(head, k) {
  let curr = head;

  let length = 0;

  while (curr) {
    curr = curr.next;
    length++;
  }

  curr = head;

  let size = Math.floor(length / k);

  let remainder = length % k;

  let list = [];
  if (size >= 1) {
    for (let i = 0; i < k; i++) {
      list.push([]);
      for (let j = 0; j < size; j++) {
        list[i].push(null);
      }
    }

    if (remainder >= 1) {
      for (let i = 0; i < remainder; i++) {
        list[i].push(null);
      }
    }
  } else {
    for (let i = 0; i < k; i++) {
      list.push([]);
    }

    for (let i = 0; i < length; i++) {
      list[i].push(null);
    }
  }

  let count = 0;
  let el = 0;

  while (curr) {
    let checkFilled = list[count].every((el) => {
      return el !== null;
    });
    if (checkFilled) {
      count++;
      el = 0;
    }
    list[count][el] = curr.value;

    el++;
    curr = curr.next;
  }
  console.log(list);
  return list;
}

if (require.main === module) {
  const linkedList = new LinkedList();

  for (let value = 1; value <= 10; value++) {
    linkedList.append(value);
  }

  try {
    splitListIntoParts(linkedList.head, 3);
  } catch (error) {
    console.log("Error:", error.message);
  }
}

module.exports = { splitListIntoParts };
