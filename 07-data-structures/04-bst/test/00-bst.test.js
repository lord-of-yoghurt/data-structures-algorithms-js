const assert = require('assert').strict;

const { BinarySearchTree } = require('../00-bst');

const myTree = new BinarySearchTree();

describe('a BST', () => {
  it('exists', () => {
    assert.equal(null, myTree.root);
  });

  describe('insert (iterative)', () => {
    it('places a node at the root of the tree if no root', () => {
      myTree.insert(50);

      assert.equal(50, myTree.root.val);
    });

    it('places a node at the left side properly', () => {
      myTree.insert(25);

      assert.equal(25, myTree.root.left.val);
    });

    it('places a node at the right side properly', () => {
      myTree.insert(75);

      assert.equal(75, myTree.root.right.val);
    });

    it('ignores elements that are already in the tree', () => {
      assert.equal(null, myTree.insert(50));
    });
  });

  /*
            50
        25      75
      10  40
  */

  describe('insert (recursive)', () => {
    it('places nodes correctly on the left', () => {
      myTree.insertRec(10);

      assert.equal(10, myTree.root.left.left.val);
    });

    it('places nodes correctly on the right', () => {
      myTree.insertRec(40);

      assert.equal(40, myTree.root.left.right.val);
    });
  });
});