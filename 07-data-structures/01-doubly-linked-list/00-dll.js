// Doubly linked lists use nodes that point forward
// to the next node and backward to the 
// previous node. This makes removing nodes
// and traversing backwards much easier.

class DoublyLinkedList {
  constructor() {
    this.head = null;
    this.tail = null;
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
      let current = this.head;

      let str = '';

      for (let i = 0; i < this.length; i++) {
        if (i === this.length - 1) {
          str += `(${current.data})`;
        } else {
          str += `(${current.data}) ⇌ `;
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
    // becomes head and tail
    if (this.isEmpty()) {
      this.head = newNode;
      this.tail = newNode;
    } 

    // otherwise, point the pointers
    else {
      // tail's next becomes the new node
      this.tail.next = newNode;
      // new node's previous becomes current tail
      newNode.prev = this.tail;
      // tail gets reassigned to the new node
      this.tail = newNode;
    }

    this.length++;

    return this;
  }

  // remove from the end of the list
  pop() {
    if (this.isEmpty()) return undefined;

    // grab the tail node
    const node = this.tail;

    if (this.length === 1) {
      this.head = null;
      this.tail = null;
    }

    else {
      // point its previous to nothingness
      node.prev.next = null;
      // make its previous the new tail
      this.tail = node.prev;
    }

    this.length--;

    return node;
  }

  // add to the beginning of the list
  unshift(data) {
    // DRY: if the list is empty, use push
    if (this.isEmpty()) return this.push(data);

    const newNode = new Node(data);

    // point head's previous to new node
    this.head.prev = newNode;
    // point new node's next to head
    newNode.next = this.head;
    // new node becomes head
    this.head = newNode;

    this.length++;

    return this;
  }

  // remove from the beginning of the list
  shift() {
    if (this.isEmpty()) return undefined;

    // DRY: if only one element in the list, use pop()
    if (this.length === 1) return this.pop();

    // grab the node to return
    const node = this.head;

    // previous head's next becomes the new head
    this.head = node.next;

    // point head's previous to null
    this.head.prev = null;

    this.length--;

    return node;
  }

  // find a node by index
  get(idx) {
    // determine the tail item's index for later
    const tailIdx = this.length - 1;

    // out-of-bound indices not allowed
    if (idx < 0 || idx > tailIdx) return undefined;

    // possible O(1) outcomes
    // (there can be others such as idx 1 or tailIdx - 1)
    if (idx === 0) return this.head;
    if (idx === tailIdx) return this.tail;

    let current = this.head;

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

  // remove a node from a given position
  remove(idx) {
    // do nothing if index is out of bounds
    if (!idx || idx < 0 || this.isEmpty() || idx >= this.length) {
      return undefined;
    }

    // if only one element, or the index addresses 
    // the tail element, use pop
    if (this.length === 1 || idx === this.length - 1) {
      return this.pop();
    }

    // for the head element, use unshift
    if (idx === 0) return this.shift();

    const node = this.get(idx);

    // set node's previous' next to node's next
    node.prev.next = node.next;

    // set node's next's previous to node's previous
    node.next.prev = node.prev;

    // disconnect the node
    node.prev = null;
    node.next = null;

    this.length--;

    return node;
  }

  // reversing a doubly linked list means reversing
  // the pointers between nodes. for any two nodes (a) ⇌ (b):
  // a.prev becomes b
  // b.next becomes a
  reverse() {
    if (this.isEmpty()) {
      throw new Error('The list is empty!');
    }

    if (this.length === 1) return this;

    let current = this.head;
    let temp;

    while (current) {
      // store current's previous node
      temp = current.prev;
      // the reversal: current node's previous
      // becomes its next
      current.prev = current.next;
      // temp is storing what used to be
      // current's previous. 
      // NOW it becomes current's next
      current.next = temp;
      // move on to the next node
      // (except now it's previous after reversal)
      current = current.prev;
    }

    // temp is currently the second node
    // of the REVERSED list. 

    // advance it backwards
    temp = temp.prev;
    // reassign the tail
    this.tail = this.head;
    // reassign the head;
    this.head = temp;

    return this;
  }

  // reverse the DLL recursively
  reverseRec(node = this.head) {
    // handle edge cases
    if (this.isEmpty()) return false;

    if (this.length === 1) return this;

    // declare the temp variable for all the swapping
    let temp;

    // BASE CASE:
    // if the node we're on doesn't exist,
    // then the list is reversed - 
    // swap the head and the tail pointers
    if (!node) {
      temp = this.head;
      this.head = this.tail;
      this.tail = temp;
      return this;
    }

    // otherwise, swap the next/prev pointers
    // (refer to iterative method for more details)
    temp = node.prev;
    node.prev = node.next;
    node.next = temp;
    // call the function recursively on the next node
    // (really it's previous though :-D )
    this.reverseRec(node.prev);
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