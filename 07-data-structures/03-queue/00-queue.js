// FIFO: first in, first out

class Queue {
  constructor() {
    this.first = null;
    this.last = null;
    this.size = 0;
  }

  // add to the end of the queue
  // O(1)
  enqueue(data) {
    const newNode = new Node(data);

    // if the queue is empty, new node becomes first
    if (this.isEmpty()) {
      this.first = newNode;
    // otherwise, point the last node's next to the new node
    } else {
      this.last.next = newNode;
    }

    // in both cases, the new node is last:
    // if empty, the new node is both first and last
    // (which means that when we add more than one,
    // the `next` of the first node will be reassigned correctly);
    // otherwise, last will be reassigned to the new node
    // after previous last's next is pointed to it
    this.last = newNode;

    this.size++;

    return this;
  }

  // remove from the beginning of the queue
  // O(1)
  dequeue() {
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