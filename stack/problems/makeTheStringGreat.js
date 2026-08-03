const { Stack } = require("../../data-structures/Stack");

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
