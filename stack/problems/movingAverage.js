class MovingAverage {
  constructor(windowSize) {
    this.windowSize = windowSize;
    this.stream = [];
  }

  next(number) {
    this.stream.push(number);
    const streamLength = this.stream.length;

    if (streamLength < this.windowSize) {
      const finalVal = this.stream.reduce((acc, cur) => acc + cur, 0);

      return finalVal / streamLength;
    } else {
      const subArrayLength = streamLength - this.windowSize;

      const subArray = this.stream.slice(subArrayLength, streamLength);

      const finalVal = subArray.reduce((acc, cur) => acc + cur, 0);

      return finalVal / this.windowSize;
    }
  }
}