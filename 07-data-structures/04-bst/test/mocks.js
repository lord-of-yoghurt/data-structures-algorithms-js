const { BinarySearchTree } = require('../00-bst');

const testTree = new BinarySearchTree(),
      emptyTree = new BinarySearchTree(),
      rotateTree = new BinarySearchTree();

rotateTree
  .insert(50)
  .insert(25)
  .insert(75)
  .insert(10)
  .insert(40);

module.exports = { testTree, emptyTree, rotateTree };
