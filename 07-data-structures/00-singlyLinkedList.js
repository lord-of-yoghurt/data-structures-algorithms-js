class Node {
  constructor(data) {
    this.data = data;
    this.next = null;
  }
}

class SinglyLinkedList {
  constructor() {
    this.length = 0;
    this.head = null;
    this.tail = null;
  }

  toString() {
    if (!this.length) return console.log('The list is empty!');

    let current = this.head,
      str = '';

    for (let i = 0; i < this.length; i++) {
      if (!current.next) str += `(${current.data})`;
      else {
        str += `(${current.data}) -> `;
        current = current.next;
      }
    }

    console.log(str);
    return str;
  }

  push(data) {
    const newNode = new Node(data);

    // if the list is empty, the new node
    // will be its head and its tail
    if (!this.head) {
      this.head = newNode;
      this.tail = newNode;
    } else {
      // hook up the new node after the tail
      this.tail.next = newNode;
      // reassign the tail 
      this.tail = newNode;
    }

    this.length++;

    // make method chainable
    return this;
  }

  pop() {
    if (this.length === 0) return console.log('The list is empty!');

    if (this.length === 1) return this.clear();
    
    // in order to remove the last node, we need to get 
    // the next-to-last one
    let current = this.head;

    while (current.next.next) {
      current = current.next;
    }

    this.tail = current;
    this.length--;

    return this;
  }

  unshift(data) {
    const newNode = new Node(data);

    if (!this.length) {
      this.head = newNode;
      this.tail = newNode;
    }

    // insert the new node at the beginning:
    // the head becomes next after new node
    newNode.next = this.head;
    // new node becomes the new head
    this.head = newNode;

    this.length++;

    return this;
  }

  // remove the first item of the list
  shift() {
    if (!this.length) return console.log('The list is empty!');

    if (this.length === 1) return this.clear();

    // reassign the head to its following node
    this.head = this.head.next;
    this.length--;

    return this;
  }

  clear() {
    if (!this.length) return console.log('The list is empty!');

    this.head = null;
    this.tail = null;
    this.length = 0;

    return this;
  }
}

module.exports = { Node, SinglyLinkedList };