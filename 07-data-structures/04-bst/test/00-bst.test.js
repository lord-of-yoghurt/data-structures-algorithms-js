const assert = require('assert').strict;

const { BinarySearchTree } = require('../00-bst');

const testTree = new BinarySearchTree(),
      emptyTree = new BinarySearchTree();

describe('a BST', () => {
  it('exists', () => {
    assert.equal(null, testTree.root);
  });

  describe('insert (iterative)', () => {
    it('places a node at the root of the tree if no root', () => {
      testTree.insert(50);

      assert.equal(50, testTree.root.val);
    });

    it('places a node at the left side properly', () => {
      testTree.insert(25);

      assert.equal(25, testTree.root.left.val);
    });

    it('places a node at the right side properly', () => {
      testTree.insert(75);

      assert.equal(75, testTree.root.right.val);
    });

    it('ignores elements that are already in the tree', () => {
      assert.equal(null, testTree.insert(50));
    });
  });

  /*
            50
        25      75
      10  40
  */

  describe('insert (recursive)', () => {
    it('places nodes correctly on the left', () => {
      testTree.insertRec(10);

      assert.equal(10, testTree.root.left.left.val);
    });

    it('places nodes correctly on the right', () => {
      testTree.insertRec(40);

      assert.equal(40, testTree.root.left.right.val);
    });
  });

  describe('find', () => {
    it('returns a node if it\'s present in the tree', () => {
      assert.equal(10, testTree.find(10).val);
    });

    it('returns null if it ain\'t', () => {
      assert.equal(null, testTree.find(11));
    });

    it('handles an empty tree', () => {
      assert.equal(null, emptyTree.find(50));
    });
  });

  describe('find (recursive)', () => {
    it('returns a node if it\'s there', () => {
      assert.equal(10, testTree.find(10).val);
    });

    it('returns null if it ain\'t', () => {
      assert.equal(null, testTree.find(11));
    });
  });
});