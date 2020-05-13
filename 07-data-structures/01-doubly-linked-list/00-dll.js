// Linked lists use nodes that point forward
// to the next node and backward to the 
// previous node. This makes removing nodes
// and traversing backwards much easier.

class DoublyLinkedList {
  constructor() {
    this.first = null;
    this.last = null;
    this.length = 0;
  }

  isEmpty() {
    return this.length === 0;
  }

  push(data) {
    const newNode = new Node(data);

    // if list empty, new node
    // becomes first and last
    if (this.isEmpty()) {
      this.first = newNode;
      this.last = newNode;
    } 

    // otherwise, point the pointers
    else {
      // last's next becomes the new node
      this.last.next = newNode;
      // new node's previous becomes current last
      newNode.prev = this.last;
      // last gets reassigned to the new node
      this.last = newNode;
    }

    this.length++;

    return this;
  }
}

class Node {
  constructor(data) {
    this.data = data;
    this.next = null;
    this.prev = null;
  }
}

module.exports = { Node, DoublyLinkedList };