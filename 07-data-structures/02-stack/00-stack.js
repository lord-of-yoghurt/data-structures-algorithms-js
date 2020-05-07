// LIFO: last in, first out
class Stack {
  constructor() {
    this.first = null;
    this.last = null;
    this.size = 0;
  }

  // O(1)
  push(data) {
    const newNode = new Node(data);

    if (this.isEmpty()) {
      this.first = newNode;
    }
      
    newNode.next = this.last;
    this.last = newNode;

    this.size++;

    return this;
  }

  // O(1)
  pop() {
    if (this.isEmpty()) return null;

    const node = this.last;
    this.last = node.next;

    this.size--;

    return node;
  }

  isEmpty() {
    return this.size === 0;
  }
}

class Node {
  constructor(data) {
    this.data = data;
    this.next = null;
  }
}

module.exports = { Node, Stack };