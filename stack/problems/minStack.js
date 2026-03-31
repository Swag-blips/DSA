class MinStack {
  constructor() {
    this.stack = [];
    this.min = [];
  }

  push(val) {
    this.stack.push(val);

    val = Math.min(
      val,
      this.min.length > 0 ? this.min[this.min.length - 1] : val,
    );

    this.min.push(val);
    console.log(this.min);
  }

  /**
   * @return {void}
   */
  pop() {
    this.min.pop();
    return this.stack.pop();
  }

  /**
   * @return {number}
   */
  top() {
    return this.stack[this.stack.length - 1];
  }

  /**
   * @return {number}
   */
  getMin() {
    return this.min[this.min.length - 1];
  }
}

let minStack = new MinStack();
minStack.push(1);
minStack.push(2);
minStack.push(0);
minStack.getMin(); // return 0
minStack.pop();
minStack.top(); // return 2
console.log(minStack.getMin());
