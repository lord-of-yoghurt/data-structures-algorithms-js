class BinarySearchTree {
  constructor() {
    this.root = null;
  }

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
      } else {
        if (!current.right) {
          current.right = newNode;
          return this;
        } else current = current.right;
      }
    }
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
myTree.insert(50);
myTree.insert(25);
myTree.insert(75);
myTree.insert(67);


console.log(myTree);