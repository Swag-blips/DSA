/**
 * @param {Node} nodeA
 * @param {Node} nodeB
 * @return {boolean}
 */
function identicalDOMTrees(nodeA, nodeB) {
  const a = nodeA.outerHTML.split("");
  const b = nodeB.outerHTML.split("");

  return a.length === b.length && a.every((val, i) => val === b[i]);
}

const treeA = new DOMParser().parseFromString(
  `<div><span>Foo</span><p>Para</p></div>`,
  "text/html",
);
const treeB = new DOMParser().parseFromString(
  `<div><span>Bar</span><p>Para</p></div>`,
  "text/html",
);
console.log(identicalDOMTrees(treeA.body, treeB.body));
