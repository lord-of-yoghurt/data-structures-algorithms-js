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

  // find a node in the BST by value 
  // (returns node or null if not found)
  find(val) {
    // if no root, it's an empty tree, return right away
    if (!this.root) return null;

    // start from the root
    let current = this.root;

    // iterate until we return something
    while (true) {
      // if it's a match, we've found the node
      if (val === current.val) return current;

      // if the value is less than that of current,
      else if (val < current.val) {
        // look to its left - is there a node?
        if (!current.left) return null;
        else current = current.left;
      }

      // otherwise, if it's larger,
      else {
        if (!current.right) return null;
        else current = current.right;
      }
    }
  }

  // find a node by value recursively
  findRec(val, current = this.root) {
    if (!this.root) return null;

    if (val === current.val) return current;

    if (val < current.val) {
      if (!current.left) return null;
      else this.findRec(val, current.left);
    }

    else {
      if (!current.right) return null;
      else this.findRec(val, current.right);
    }
  }

  // perform preorder traversal recursively
  // (first a node, then its left child, then its right child)
  preOrder(fn, node = this.root) {
    if (node) {
      fn(node);
      this.preOrder(fn, node.left);
      this.preOrder(fn, node.right);
    }
  }

  // perform inorder traversal recursively
  // (first a node's left child, then node, then right child)
  inOrder(fn, node = this.root) {
    if (node) {
      this.inOrder(fn, node.left);
      fn(node);
      this.inOrder(fn, node.right);
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

module.exports = { BinarySearchTree };