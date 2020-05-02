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

  toString() {
    if (!this.length) console.log('The list is empty!');

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
}

module.exports = { Node, SinglyLinkedList };