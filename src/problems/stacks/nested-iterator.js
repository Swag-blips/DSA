class NestedIterator {
  constructor(list) {
    this.list = list.flat(Infinity);
  }

  next() {
    let nextElement = this.list.shift();
    return nextElement;
  }

  hasNext() {
    return this.list.some((el) => typeof el === "number");
  }
}

const iterator = new NestedIterator([[1, 1], 2, [1, 1]]);

iterator.next();
