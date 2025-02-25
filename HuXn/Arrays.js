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
}

const myArray = new CustomArray();

myArray.push(4);
myArray.push(6);
console.log(myArray.get(1));
console.log(myArray);
