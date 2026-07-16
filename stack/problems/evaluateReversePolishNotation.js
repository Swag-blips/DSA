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

function evaluateReversePolishNotation(tokens) {
  for (let i = 0; i < tokens.length; i++) {
    const currentToken = tokens[i];

    if (
      currentToken !== "+" &&
      currentToken !== "-" &&
      currentToken !== "/" &&
      currentToken !== "*"
    ) {
      stack.push(currentToken);
      continue;
    }

    if (currentToken === "+") {
      const previousDigit = Number(stack.peek(2));
      const previousTwoDigit = Number(stack.peek(1));

      let newDigit = previousDigit + previousTwoDigit;
      stack.pop();
      stack.pop();
      stack.push(newDigit);
    } else if (currentToken === "-") {
      const previousDigit = Number(stack.peek(1));
      const previousTwoDigit = Number(stack.peek(2));

      let newDigit = previousDigit - previousTwoDigit;
      stack.pop();
      stack.pop();
      stack.push(newDigit);
    } else if (currentToken === "/") {
      const previousDigit = Number(stack.peek(2));
      const previousTwoDigit = Number(stack.peek(1));

      let newDigit = Math.trunc(previousDigit / previousTwoDigit);
      stack.pop();
      stack.pop();
      stack.push(newDigit);
    } else {
      const previousDigit = Number(stack.peek(2));
      const previousTwoDigit = Number(stack.peek(1));

      let newDigit = previousDigit * previousTwoDigit;
      stack.pop();
      stack.pop();
      stack.push(newDigit);
    }
  }

  return stack.stack.join("");
}

console.log(
  evaluateReversePolishNotation([
    "10",
    "6",
    "9",
    "3",
    "+",
    "-11",
    "*",
    "/",
    "*",
    "17",
    "+",
    "5",
    "+",
  ]),
);
