class BrowserHistory {
  /**
   * @constructor
   * @param {string} homepage
   */
  constructor(homepage) {
    const browserNode = new BrowserNode(homepage);
    this.head = browserNode;
    this.tail = browserNode;
    this.curr = browserNode;
  }

  /**
   * @param {string} url
   * @return {void}
   */
  visit(url) {
    const node = new BrowserNode(url);

    if (this.head && !this.head.next) {
      this.tail.next = node;
      this.tail = node;
      node.prev = this.head;
    } else if (this.curr !== this.tail) {
      this.curr.next = node;
      node.prev = this.curr;

      this.tail = node;
    } else {
      this.tail.next = node;
      node.prev = this.tail;
      this.tail = node;
    }

    this.curr = this.tail;

    return;
  }

  /**
   * @param {number} steps
   * @return {string}
   */
  back(steps) {
    let count = 0;
    if (!this.curr.prev) return this.curr.url;
    while (count < steps && this.curr.prev) {
      this.curr = this.curr.prev;
      count++;
    }
    return this.curr.url;
  }

  /**
   * @param {number} steps
   * @return {string}
   */
  forward(steps) {
    let count = 0;

    if (!this.curr.next) return this.curr.url;

    while (count < steps && this.curr.next) {
      this.curr = this.curr.next;
      count++;
    }
    return this.curr.url;
  }
}

class BrowserNode {
  constructor(url) {
    this.url = url;
    this.prev = null;
    this.next = null;
  }
}

const browserHistory = new BrowserHistory("start.com");
browserHistory.visit("one.com");
browserHistory.visit("two.com");
console.log(browserHistory.back(10));
console.log(browserHistory.back(1));
console.log(browserHistory.back(1));
browserHistory.visit("three.com");
console.log(browserHistory.back(1));
console.log(browserHistory.forward(10));

// console.dir(browserHistory, {
//   depth: null,
//   colors: true,
// });
