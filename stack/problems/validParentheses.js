const { Stack } = require("../../data-structures/Stack");

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
