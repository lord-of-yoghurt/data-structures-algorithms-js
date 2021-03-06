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
    if (this.length === 0) {
      console.log('The list is empty!');

      return undefined;
    }

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

  get(idx) {
    if (idx >= this.length) return undefined;

    if (idx === 0) return this.head;

    // starting from the beginning of the list...
    let current = this.head;

    for (let i = 0; i < idx; i++) {
      current = current.next;
    }

    return current;
  }

  set(idx, data) {
    const node = this.get(idx);

    if (!node) return null;

    node.data = data;

    return node;
  }

  insert(idx, data) {
    // check for out-of-bound indices
    if (idx < 0 || idx > this.length) return undefined;

    // if inserting at the head, use unshift
    if (idx === 0) return this.unshift(data);
    // if inserting at the tail, use push
    if (idx === this.length) return this.push(data);

    const node = this.get(idx - 1),
          newNode = new Node(data);

    newNode.next = node.next;
    node.next = newNode;

    this.length++;
    
    return newNode;
  }

  remove(idx) {
    // check for out-of-bound indices
    if (idx < 0 || idx >= this.length) return undefined;

    // if removing at the head, use shift
    if (idx === 0) return this.shift();
    // if removing at the tail, use pop
    if (idx === this.length - 1) return this.pop();

    // get the node BEFORE the one being removed
    const node = this.get(idx - 1);

    // point its next to the one AFTER the one being removed
    node.next = node.next.next;

    this.length--;

    return this;
  }

  // reverse in place! no copying the list
  reverse() {
    // sanity
    if (this.length < 2) return this;

    // we need three pointers: previous, current, next
    let prev, cur, next;

    //--- 1. THE PREP
    // reassign the tail to the head
    this.tail = this.head;

    // previous is the head (this part is already done)
    prev = this.head;
    // current is the one after
    cur = prev.next;
    // next is the one after that
    next = cur.next;

    //--- 2. THE LOOP
    // while next comes back truthy,
    while (next) {
      // current now points BACK to previous
      cur.next = prev;
      // shift previous forward
      prev = cur;
      // shift current forward
      cur = next;
      // shift next forward
      next = cur.next;
    }

    //--- 3. THE AFTERMATH
    // once there's no more next, current is on the LAST node.
    // point current to previous for the last time
    cur.next = prev;
    // reassign the head
    this.head = cur;
    // make sure the tail doesn't point to anything
    this.tail.next = null;

    // return thyself
    return this;
  }

  // rotate a list clockwise n times
  // for n == 2
  // before: A -> B -> C -> D -> E
  // after: C -> D -> E -> A -> B
  rotate(n) {
    for (let i = 0; i < n; i++) {
      // temp <- head's next
      const temp = this.head.next;
      // tail's next <- head
      this.tail.next = this.head;
      // tail <- head
      this.tail = this.head;
      // tail's next <- null
      this.tail.next = null;
      // head <- temp
      this.head = temp;
    }

    return this;
  }
}

module.exports = { Node, SinglyLinkedList };