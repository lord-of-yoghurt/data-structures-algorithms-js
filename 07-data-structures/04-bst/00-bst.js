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
    while (true) {
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

  // count nodes recursively
  // this is done in postorder form: left child, right child, node
  countNodes(node = this.root) {
    // counts for left and right sides
    let lCount, rCount;

    // if the node exists
    if (node) {
      // call the function on its left
      // and assign the return value to lCount
      // (this will continue being called until 
      // we reach leaf nodes, at which point
      // 0 will be returned)
      lCount = this.countNodes(node.left);
      // same for the right
      rCount = this.countNodes(node.right);

      // return whatever the counts are + 1 
      // for the current node
      return lCount + rCount + 1;
    }

    // base case: if there's no node, simply return 0
    return 0;
  }

  // height of a node is the number of edges 
  // from the node to a leaf node via longest path.
  // height of a tree is the height of its root
  countHeight(node = this.root) {
    let lHeight, rHeight;

    // similar to counting nodes, but...
    if (node) {
      lHeight = this.countHeight(node.left);
      rHeight = this.countHeight(node.right);

      // ...here we're using the max instead of the sum
      return Math.max(lHeight, rHeight) + 1;
    }

    return 0;
  }

  // check if this is a valid BST, which has to satisfy
  // node.left.val < node.val < node.right.val
  // for any given non-leaf node
  isValid(node = this.root, minVal = -Infinity, maxVal = Infinity) {
    // if the node is not null:
    if (node) {
      // if its value is between min and max
      if (minVal < node.val && node.val < maxVal) {
        // determine whether the same applies to BOTH
        // its left and right subtrees, recursively
        return (
          this.isValid(node.left, minVal, node.val) &&
          this.isValid(node.right, node.val, maxVal)
        );
      }

      // otherwise, it's not a valid BST
      return false;
    }

    // base case: an empty tree is a BST
    return true;
  }

  // find inorder predecessor of a given node
  // (max value of node's LEFT subtree)
  inOrderPre(node) {
    let current;

    // look to the left of the node.
    // if something is there,
    if (node.left) {
      // go there
      current = node.left;

      // while that node has a right child
      while (current.right) {
        // keep looking for the rightmost child
        current = current.right;
      }

      // return the result
      return current;
    }

    // otherwise, the predecessor is found
    // by searching for the given node and returning
    // the node where we take the last right turn

    // the temp variable is to store the potential
    // predecessor as we traverse down the tree
    let temp = null;
    current = this.root;

    while (current.val != node.val) {
      // this is the right turn - update the temp
      if (node.val > current.val) {
        temp = current;
        current = current.right;
      // otherwise, if the given node is less than
      // current, make a left turn
      } else {
        current = current.left;
      }
    }

    return temp;
  }

  // find inorder successor of a given node
  // (min value of node's RIGHT subtree)
  inOrderSucc(node) {
    let current = node;

    if (node.right) {
      current = node.right;

      while (current.left) {
        current = current.left;
      }

      return current;
    }

    return null;
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