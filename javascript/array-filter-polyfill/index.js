/**
 * @template T
 * @param {(value: T, index: number, array: Array<T>) => boolean} callbackFn
 * @param {unknown} [thisArg]
 * @returns {Array<T>}
 */
Array.prototype.myFilter = function (callbackFn, thisArg) {
  const len = this.length;
  const newArr = [];

  for (let i = 0; i < len; i++) {
    if (typeof this[i] === undefined) continue;
    const value = callbackFn.call(thisArg, this[i] || i);

    if (value) {
      newArr.push(this[i]);
    }
  }

  return newArr;
};

console.log([1, 2, , 3, 4].myFilter((value) => value % 2 == 0));
