// FIFO: first in, first out

class Queue {
  constructor() {
    this.first = null;
    this.last = null;
    this.size = 0;
  }

  // TODO: write tests for everything!

  // add to the end of the queue
  // O(1)
  push(data) {
    const newNode = new Node(data);

    // if the queue is empty, new node becomes first
    if (this.isEmpty()) {
      this.first = newNode;
    }

    // we have to keep track of the node that will
    // become first after the first one pops,
    // so if there's one node present, point its next
    // to the new node
    else if (this.size === 1) {
      this.first.next = newNode;
    }

    // otherwise, it doesn't matter how many nodes there are
    // after the first two. point the last node's next
    // to the new node
    else {
      this.last.next = newNode;
    }

    // the new node is always last
    this.last = newNode;

    this.size++;

    return this;
  }

  // remove from the beginning of the queue
  // O(1)
  pop() {
    // if the queue is empty, do nothing
    if (this.isEmpty()) return null;

    const node = this.first;
    // first node's next points to the node right after,
    // so all we need to do is reassign first
    this.first = this.first.next;

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

module.exports = { Node, Queue };