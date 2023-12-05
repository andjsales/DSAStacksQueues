class Node {
  constructor (value) {
    this.val = value;
    this.next = null;
  }
}

class Queue {
  constructor () {
    this.first = null;
    this.last = null;
    this.size = 0;
  }

  enqueue(val) {
    let newNode = new Node(val);
    if (!this.first) {
      this.first = newNode;
      this.last = newNode;
    } else {
      this.last.next = newNode;
      this.last = newNode;
    }
    this.size++;
  }

  // Removes the node (first element) from the queue and returns its value
  // Throws an error if the queue is empty
  dequeue() {
    if (!this.first) {
      throw new Error("Queue is empty");
    }
    let temp = this.first;
    if (this.first === this.last) {
      this.last = null;
    }
    this.first = this.first.next;
    this.size--;
    return temp.val;
  }

  // Returns the value of the first element without removing it
  peek() {
    if (!this.first) {
      return null;
    }
    return this.first.val;
  }

  // Checks if the queue is empty
  isEmpty() {
    return this.size === 0;
  }
}

module.exports = Queue;
