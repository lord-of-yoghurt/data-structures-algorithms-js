// LIFO: last in, first out
class Stack {
  constructor() {
    // first is the BOTTOM of the stack
    this.first = null;
    // last is the TOP of the stack
    this.last = null;
    this.size = 0;
  }

  // add a new node to the top of the stack
  // O(1)
  push(data) {
    const newNode = new Node(data);

    // establish the bottom of the stack if empty
    if (this.isEmpty()) {
      this.first = newNode;
    }

    // if empty, will point to null
    newNode.next = this.last;
    // if empty, new node is first AND last
    this.last = newNode;

    this.size++;

    return this;
  }

  // remove a node from the top of the stack
  // O(1)
  pop() {
    if (this.isEmpty()) return null;

    // grab the node to remove
    const node = this.last;
    // reassign the `last` pointer to the `next`
    // of the node we're removing
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