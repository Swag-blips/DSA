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
    const lastItem = this.data[this.length - 1];
    delete this.data[this.length - 1];
    this.length--;
    return lastItem;
  }

  shift() {
    if (this.length === 0) return undefined;

    const firstElement = this.data[0];

    for (let i = 1; i < this.length; i++) {
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

// const myArray = new CustomArray();

// myArray.push("salad");
// myArray.push("fish");
// myArray.push("mango");
// myArray.push("meat");
// myArray.push("bush");
// myArray.push("elephant");

// myArray.deleteByIndex(2);

// console.log(myArray);

// reverse string

const reverseString = (value) => {
  const reversedArray = new CustomArray();
  const convertedValue = value.split("");

  for (let i = 0; i < value.length; i++) {
    reversedArray.push(convertedValue[i]);
  }
  let toBeReversed = "";

  for (let j = 0; j < value.length; j++) {
    toBeReversed += reversedArray.pop();
  }

  console.log(toBeReversed);
};

const isPalindrome = (value) => {
  const reversedArray = new CustomArray();
  let toBeReversed = "";

  for (let i = 0; i < value.length; i++) {
    reversedArray.push(value[i]);
  }

  for (let j = 0; j < value.length; j++) {
    toBeReversed += reversedArray.pop();
  }

  return toBeReversed === value;
};

const reverseInteger = (value) => {
  const reversedArray = new CustomArray();

  const numberToString = value.toString();
  const convertedValue = numberToString.split("");

  let toBeReversed = "";

  for (let i = 0; i < convertedValue.length; i++) {
    reversedArray.push(convertedValue[i]);
  }

  for (let j = 0; j < convertedValue.length; j++) {
    toBeReversed += reversedArray.pop();
  }

  console.log(Number(toBeReversed));
};

reverseInteger(1234);

const sentenceCapitalization = (value) => {
  const sentenceArray = value.toLowerCase().split(" ");

  const capitalizedSentence = sentenceArray
    .map((word) => word[0].toUpperCase() + word.slice(1))
    .join(" ");

  console.log(capitalizedSentence);
};

const fizzBuzz = (n) => {
  for (let i = 1; i <= n; i++) {
    if (i % 3 === 0 && i % 5 === 0) {
      console.log("FizzBuzz", i);
    } else if (i % 3 === 0) {
      console.log("fizz", i);
    } else if (i % 5 === 0) {
      console.log("buzz", i);
    } else {
      console.log(i);
    }
  }
};

// Max profit

const maxProfit = (prices) => {
  let minPrice = prices[0];

  let maxProfit = 0;

  for (let i = 1; i < prices.length; i++) {
    const currentPrice = prices[i];

    //update miniomum price if the lower price is found

    minPrice = Math.min(minPrice, currentPrice);

    const potentialProfit = currentPrice - minPrice;

    maxProfit = Math.max(maxProfit, potentialProfit);

    console.log(maxProfit);
  }
  return maxProfit;
};

const prices = [7, 1, 5, 3, 6, 4];
const profit = maxProfit(prices);
console.log("Maximum profit:", profit);
