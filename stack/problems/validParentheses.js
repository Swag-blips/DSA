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

  peek(n) {
    return this.stack[this.stack.length - n];
  }

  isEmpty() {
    return this.stack.length === 0;
  }

  size() {
    return this.stack.length;
  }
}

const stack = new Stack();

function isValid(s) {
  let modifiedS = s.split("");

  while (s.includes("()" || s.includes("[]") || s.includes("{}"))) {
    s = s.replace("()", "");
    s = s.replace("{}", "");
    s = s.replace("[]", "");
  }

  return s === "";
}

console.log(isValid("(([()[){})"));

// stack solution
