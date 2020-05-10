const assert = require('assert').strict;

const { Node, BinarySearchTree } = require('../00-bst');

const myTree = new BinarySearchTree();

describe('a BST', () => {
  it('exists', () => {
    assert.equal(null, myTree.root);
  });
});