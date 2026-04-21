const { Stack } = require("../../data-structures/stack");

const stackS = new Stack();
const stackT = new Stack();
function backspaceString(s, t) {
  const modifiedS = s.split("");
  const modifiedT = t.split("");

  for (let i = 0; i < modifiedS.length; i++) {
    if (modifiedS[i] === "#") {
      stackS.pop();
    } else {
      stackS.push(modifiedS[i]);
    }
  }
  for (let j = 0; j < modifiedT.length; j++) {
    if (modifiedT[j] === "#") {
      stackT.pop();
    } else {
      stackT.push(modifiedT[j]);
    }
  }

  console.log(stackS.stack.join("") === stackT.stack.join(""));
}

backspaceString("a#c", "b");
