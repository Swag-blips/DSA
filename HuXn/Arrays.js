class CustomArray {
  constructor() {
    this.length = 0;
    this.data = {};
  }

  push(item) {
    this.data[this.length] = item;
    this.length++;
  }

  get(index) {
    return this.data[index];
  }

  pop() {
    if (this.length === 0) return undefined;
    delete this.data[this.length - 1];
    this.length--;
    return;
  }

  shift() {
    if (this.length === 0) return undefined;

    const firstElement = this.data[0];

    for (let i = 0; i < this.length; i++) {
      this.data[i - 1] = this.data[i];
    }

    delete this.data[this.length - 1];
    this.length--;
  }

  deleteByIndex(index) {
    if (this.length === 0) return undefined;

    const specificElement = this.data[index];
    delete this.data[index];
    for (let i = index + 1; i < this.length; i++) {
      this.data[i - 1] = this.data[i];
    }

    delete this.data[this.length - 1];
    this.length--;

    return specificElement;
  }
}

const myArray = new CustomArray();

myArray.push("salad");
myArray.push("fish");
myArray.push("mango");
myArray.push("meat");
myArray.push("bush");
myArray.push("elephant");

myArray.deleteByIndex(2);

console.log(myArray);

// reverse string
