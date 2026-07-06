// Static arrays

class StaticArray {
  constructor(capacity) {
    this.capacity = capacity;
    this.arr = new Int32Array(capacity);
    this.length = 0;
  }

  // o(1)
  read(i) {
    if (i < 0 || i >= this.length) {
      throw new Error("Index out of bounds");
    }
    return this.arr[i];
  }

  //o(n)
  traverse() {
    for (let i = 0; i < this.arr.length; i++) {
      console.log(this.arr[i]);
    }
  }

  // o(1) insert at the end

  insertEnd(n) {
    if (this.length < this.capacity) {
      this.arr[this.length] = n;
      this.length++;
      return;
    }

    throw new Error("Array is out of capacity");
  }

  // o(n) insert middle

  insertMiddle(i, n) {
    if (this.length >= this.capacity)
      throw new Error("Array is out of capacity");

    for (let index = this.length - 1; index >= i; index--) {
      this.arr[index + 1] = this.arr[index];
    }
    this.arr[i] = n;
    this.length++;
  }

  removeMiddle(i) {
    for (let index = i + 1; index < this.length; index++) {
      this.arr[index - 1] = this.arr[index];
    }
    this.arr[this.length - 1] = 0;
    this.length--;
  }

  removeEnd() {
    if (this.length > 0) {
      this.arr[this.length - 1] = 0;
      this.length--;
      return;
    }
    throw new Error("Operation cannot be performed on an empty array");
  }
}
