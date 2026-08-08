const { Stack } = require("../../data-structures/Stack");

function simplifyPath(path) {
  const stack = new Stack();

  const splitPath = path.split("/");

  const everyIsRoot = splitPath.every((path) => path === "");

  if (everyIsRoot) {
    return "/";
  }
  console.log(splitPath);
  for (const path of splitPath) {
    if (path === "") {
      if (stack.peek() === "/") continue;
      stack.push("/");
    } else if (path === "..") {
      if (stack.peek() !== "/") {
        stack.pop();
      } else {
        const popped = stack.pop();

        stack.pop();
        if (stack.peek() !== "/") stack.push(popped);
      }
    } else if (path === ".") {
      continue;
    } else {
      if (stack.peek() !== "/") stack.push("/");
      stack.push(path);
    }
  }

  if (stack.peek() === "/" && stack.size() > 1) stack.pop();
  return stack.stack.join("");
}

console.log(simplifyPath('/a/.../b'));
