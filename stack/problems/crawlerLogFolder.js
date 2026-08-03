const { Stack } = require("../../data-structures/Stack");

const stack = new Stack();

function crawlerLogFolder(operations) {
  for (let i = 0; i < operations.length; i++) {
    const currentOperation = operations[i];
    if (stack.size() === 0) {
      stack.push(currentOperation);
      continue;
    }

    if (currentOperation === "./") {
      continue;
    } else if (currentOperation === "../") {
      stack.pop();
      continue;
    } else {
      stack.push(currentOperation);
    }
  }
  return stack.stack;
}

crawlerLogFolder();


