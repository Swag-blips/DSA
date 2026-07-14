class Stack {
  constructor() {
    this.stack = [];
  }

  push(value) {
    return this.stack.push(value);
  }

  pop() {
    if (this.isEmpty()) return null;

    return this.stack.pop();
  }

  peek() {
    return this.stack[this.stack.length - 1];
  }

  isEmpty() {
    return this.stack.length === 0;
  }

  size() {
    return this.stack.length;
  }
}

const stack = new Stack();

function makeTheStringGreat(s) {
  const modifiedS = s.split("");

  for (let i = 0; i < modifiedS.length; i++) {
    const previousElement = stack.peek();
    // console.log(`stack on ${i}th iteration`, stack);
    if (stack.size() === 0) {
      stack.push(modifiedS[i]);
      continue;
    }

    if (modifiedS[i].toLowerCase() === previousElement.toLowerCase()) {
      if (modifiedS[i] !== previousElement) {
        stack.pop();
        continue;
      } else {
        stack.push(modifiedS[i]);
        continue;
      }
    } else {
      stack.push(modifiedS[i]);
      continue;
    }
  }

  return stack.stack.join("");
}

console.log(makeTheStringGreat("s"));
