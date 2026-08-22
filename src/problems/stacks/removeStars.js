const { Stack } = require("../../data-structures/stack");

function removeStars(s) {
  const stack = new Stack();
  const strArr = s.split("");

  for (let i = 0; i < strArr.length; i++) {
    const currentElement = strArr[i];
    if (currentElement === "*") {
      stack.pop();
      continue;
    } else {
      stack.push(currentElement);
    }
  }

  return stack.stack.join("");
}

removeStars("erase*****");
