// a stack is a linear data structure that follows a particular order in which operations are performed, they maybe LIFO or FILO

// stack implementation

class Stack {
  constructor() {
    this.items = [];
  }

  // add element to the top of the stack
  push(element) {
    this.items.push(element);
  }

  // remove element from the top of the stack
  pop() {
    if (this.isEmpty()) return null;
    return this.items.pop();
  }
  // return the top element without removing it
  peek() {
    if (this.isEmpty()) return null;
    return this.items[this.items.length - 1];
  }

  // check if the stack is empty
  isEmpty() {
    return this.items.length === 0;
  }

  // clear stack
  clear() {
    this.items = [];
  }
}

const stack = new Stack();
stack.push(4);
stack.push(8);

console.log(stack);

// reversing a string with stack

function reverse(str) {
  const stack = new Stack();

  for (let char of str) {
    stack.push(char);
  }

  let reversedStr = "";
  while (!stack.isEmpty()) {
    reversedStr += stack.pop();
  }
  console.log(reversedStr);
  return reversedStr;
}

const original = "hello";
const reversed = reverse(original);

console.log(`The reverse of ${original} is ${reversed}`);
