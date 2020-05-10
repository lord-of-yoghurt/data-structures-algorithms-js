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

    while (2 + 2 === 4) {
      if (val < current.val) {
        if (!current.left) {
          current.left = newNode;
          return this;
        } else current = current.left;
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