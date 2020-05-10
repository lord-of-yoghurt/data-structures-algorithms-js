class BinarySearchTree {
  constructor() {
    this.root = null;
  }

  // insert iteratively
  insert(val) {
    const newNode = new Node(val);

    if (!this.root) {
      this.root = newNode;
      return this;
    }

    let current = this.root;

    // this will run until we return
    while (2 + 2 === 4) {
      // if the value is less than the value of the current
      // (going down the left side of the tree)
      if (val < current.val) {
        // ...and if there's no node to the left
        if (!current.left) {
          // insert there and return
          current.left = newNode;
          return this;
          // otherwise, shift over to the node on the left
        } else current = current.left;
      // going down the right side of the tree, same logic
      } else if (val > current.val) {
        if (!current.right) {
          current.right = newNode;
          return this;
        } else current = current.right;
      // otherwise, the value already exists, so ignore it
      } else return null;
    }
  }

  // insert recursively
  insertRec(val, current = this.root) {
    const newNode = new Node(val);

    // if no root, assign new node to it
    if (!this.root) {
      this.root = newNode;
      return this;
    }

    // if value already exists, ignore it
    if (val === current.val) return null;

    // left side (val is less than current)
    if (val < current.val) {
      // if its left doesn't exist, assign new node there
      if (!current.left) {
        current.left = newNode;
      // otherwise, call this function current's left
      } else {
        this.insertRec(val, current.left);
      }
    }

    // right side, same logic
    if (val > current.val) {
      if (!current.right) {
        current.right = newNode;
      } else {
        this.insertRec(val, current.right);
      }
    }

    return this;
  }
}

class Node {
  constructor(val) {
    this.val = val;
    this.left = null;
    this.right = null;
  }
}

const myTree = new BinarySearchTree();
myTree.insertRec(50);
myTree.insertRec(25);
myTree.insertRec(75);
myTree.insertRec(67);
myTree.insertRec(25);


console.log(myTree);

module.exports = { Node, BinarySearchTree };