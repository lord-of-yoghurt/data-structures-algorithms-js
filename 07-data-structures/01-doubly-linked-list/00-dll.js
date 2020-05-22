// Doubly linked lists use nodes that point forward
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

  toString() {
    if (this.isEmpty()) {
      console.log('The list is empty. Add some stuff!');
    }

    else {
      let current = this.first;

      let str = '';

      for (let i = 0; i < this.length; i++) {
        if (i === this.length - 1) {
          str += `(${current.data})`;
        } else {
          str += `(${current.data}) ⇌  `;
          current = current.next;
        }
      }

      console.log(str);
    }
    
    return this;
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

    // DRY: if only one element in the list, use pop()
    if (this.length === 1) return this.pop();

    // grab the node to return
    const node = this.first;

    // point first's previous to null
    this.first.previous = null;
    // previous first's next becomes the new first
    this.first = node.next;

    this.length--;

    return node;
  }

  // find a node by index
  get(idx) {
    // determine the last item's index for later
    const lastIdx = this.length - 1;

    // out-of-bound indices not allowed
    if (idx < 0 || idx > lastIdx) return undefined;

    // possible O(1) outcomes
    // (there can be others such as idx 1 or lastIdx - 1)
    if (idx === 0) return this.first;
    if (idx === lastIdx) return this.last;

    let current = this.first;

    for (let i = 0; i < idx; i++) {
      current = current.next;
    }

    return current;
  }

  // update the value of a node
  set(idx, data) {
    if (arguments.length !== 2) return undefined;

    const node = this.get(idx);

    if (node) {
      node.data = data;
      return node;
    }

    return undefined;
  }

  // add a node at a given position
  insert(idx, data) {
    // handle out-of-bound indices
    if (idx < 0) return undefined;

    if (idx >= this.length || this.isEmpty()) {
      return this.push(data);
    }

    if (idx === 0) return this.unshift(data);

    const newNode = new Node(data),
          current = this.get(idx);
    
    // new node's previous is now current's previous
    newNode.prev = current.prev;

    // current's previous' next is now the new node
    current.prev.next = newNode;

    // current is now the new node's next
    newNode.next = current;

    // current's previous is now the new node
    current.prev = newNode;

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