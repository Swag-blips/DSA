
// redo


const { Stack } = require("../../data-structures/Stack");

function longestValidParentheses(val) {
  const stack = new Stack();

  let longest = 0;
  let lastInvalidIndex = -1;

  for (let i = 0; i < val.length; i++) {
    if (val[i] === "(") {
      stack.push(i);
      continue;
    }

    if (!stack.isEmpty()) {
      stack.pop();

      let currentLength;

      if (stack.isEmpty()) {
        currentLength = i - lastInvalidIndex;
      } else {
        currentLength = i - stack.peek();
      }

      longest = Math.max(longest, currentLength);
    } else {
      lastInvalidIndex = i;
    }
  }

  return longest;
}
