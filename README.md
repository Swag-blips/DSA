# Data Structures and Algorithms

JavaScript implementations of data structures, algorithms, coding problems, and language exercises.

## Repository structure

```text
src/
  data-structures/  Reusable data structure implementations
  algorithms/       General searching, sorting, and recursion algorithms
  problems/         Coding problems grouped by their primary topic
  utils/            Shared test and problem helpers
javascript/         Browser and JavaScript language exercises
playground/         Scratch code and executable demonstrations
tests/              Automated tests mirroring the source structure
```

Problem files use `kebab-case`, contain one primary solution, and should export that solution with CommonJS:

```js
function solution(input) {
  // ...
}

module.exports = { solution };
```

Keep sample input and exploratory logging in `playground/` or tests so importing a solution does not execute it.

## Commands

```bash
npm test
npm run check
```

`npm test` runs the built-in Node.js test runner. `npm run check` validates the syntax of every JavaScript file without executing the examples.

## Problem index

| Topic | Location |
| --- | --- |
| Arrays | `src/problems/arrays/` |
| Linked lists | `src/problems/linked-lists/` |
| Doubly linked lists | `src/problems/doubly-linked-lists/` |
| Matrices | `src/problems/matrices/` |
| Queues | `src/problems/queues/` |
| Stacks | `src/problems/stacks/` |

When adding a problem, place it under its primary topic. Record secondary techniques such as two pointers, sliding windows, or binary search in comments or future index metadata instead of duplicating the file across folders.
