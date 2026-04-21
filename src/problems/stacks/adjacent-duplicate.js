const { Stack } = require("../../data-structures/stack");

const stack = new Stack();

function adjacentDuplicate(s) {
  const splittedS = s.split("");
  for (let i of splittedS) {
    console.log("ith iteration", i);
    console.log("stack", stack.stack);
    if (stack.stack.length === 0) {
      stack.push(i);
      continue;
    }
    if (stack.peek() === i) {
      stack.pop();
      continue;
    } else {
      stack.push(i);
    }
  }

  return stack.stack.join("");
}

console.log(adjacentDuplicate("azxxzy"));
