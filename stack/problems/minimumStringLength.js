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

function minimumStringLength(s) {
  const modifiedS = s.split("");

  for (let i = 0; i < modifiedS.length; i++) {
    const currentStr = modifiedS[i];
    if (stack.size() === 0) {
      stack.push(currentStr);
      continue;
    }

    if (
      (stack.peek() === "A" && currentStr === "B") ||
      (stack.peek() === "C" && currentStr === "D")
    ) {
      stack.pop();
      continue;
    } else {
      stack.push(currentStr);
    }
  }

  return stack.stack.length;
}

console.log(minimumStringLength("ACBBD"));
