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

  // add to the end of the list
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

  // remove from the end of the list
  pop() {
    if (this.isEmpty()) return undefined;

    // grab the last node
    const node = this.last;

    if (this.length === 1) {
      this.first = null;
      this.last = null;
    }

    else {
      // point its previous to nothingness
      node.prev.next = null;
      // make its previous the new last
      this.last = node.prev;
    }

    this.length--;

    return node;
  }

  // add to the beginning of the list
  unshift(data) {
    // DRY: if the list is empty, use push
    if (this.isEmpty()) return this.push(data);

    const newNode = new Node(data);

    // point first's previous to new node
    this.first.prev = newNode;
    // point new node's next to first
    newNode.next = this.first;
    // new node becomes first
    this.first = newNode;

    this.length++;

    return this;
  }

  // remove from the beginning of the list
  shift() {
    if (this.isEmpty()) return undefined;

    // grab the node to return
    const node = this.first;

    if (this.length === 1) return this.pop();

    else {
      // point first's previous to null
      this.first.previous = null;
      // previous first's next becomes the new first
      this.first = node.next;
    }

    this.length--;

    return node;
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