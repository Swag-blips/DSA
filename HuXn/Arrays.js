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
}

const myArray = new CustomArray();

myArray.push("salad");
myArray.push("fish");
myArray.push("mango");
myArray.shift();

console.log(myArray);
