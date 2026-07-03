class StaticArray {
  constructor(capacity) {
    this.arr = new Int32Array(capacity);
    this.capacity = capacity;
    this.length = 0;
  }

  read(i) {
    if (i >= this.length || i < 0)
      throw new Error("Index is out of bounds");

    return this.arr[i];
  }

  traverse() {
    for (let i = 0; i < this.length; i++) {
      console.log(this.arr[i]);
    }
  }
  insertEnd(n) {
    if (this.length >= this.capacity) {
      throw new Error("Array capacity is filled");
    }
    this.arr[this.length] = n;
    this.length++;
  }

  insertMiddle(i, n) {
    if (this.length >= this.capacity)
      throw new Error("Array capacity is filled");

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

    throw new Error("No element in array");
  }
}
