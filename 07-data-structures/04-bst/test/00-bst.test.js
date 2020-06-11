const assert = require('assert').strict;

const { Node } = require('../00-bst');

const { testTree, emptyTree, rotateTree } = require('./mocks');

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

  describe('find (iterative)', () => {
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

  describe('findParent', () => {
    it('returns the parent of a given node', () => {
      const node = testTree.find(10);
      const parent = testTree.findParent(node);
      
      assert.equal(25, parent.val);
    });

    it('handles a node that doesn\'t exist', () => {
      const node = new Node(42);
      assert.equal(null, testTree.findParent(node));
    });

    it('handles the root of a tree', () => {
      assert.equal(null, testTree.findParent(testTree.root));
    });

    it('handles a value that\'s not a node', () => {
      assert.equal(null, testTree.findParent(25));
    });
  });

  /*
          50
      25      75
    10  40
  */

  describe('preorder traversal with a callback', () => {
    it('iterates over a tree in preorder fashion (node, L, R)', () => {
      // traverse the tree and put every value in an array
      const treeArr = [];

      testTree.preOrder(node => {
        treeArr.push(node.val);
      });

      assert.equal(10, treeArr[2]);
      assert.equal(75, treeArr[4]);
    });
  });

  describe('inorder traversal with a callback', () => {
    const treeArr = [];

    before((done) => {
      testTree.inOrder(node => {
        treeArr.push(node.val);
      });

      done();
    });

    it('iterates over a tree in inorder fashion (L, node, R)', () => {
      assert.equal(40, treeArr[2]);
      assert.equal(50, treeArr[3]);
    });

    it('sorts the values of all nodes if put in an array', () => {
      assert.deepStrictEqual(treeArr, [10, 25, 40, 50, 75]);
    });
  });

  describe('postorder traversal with a callback', () => {
    it('iterates over a tree in postorder fashion (L, R, node)', () => {
      const treeArr = [];

      testTree.postOrder(node => {
        treeArr.push(node.val);
      });

      assert.deepStrictEqual(treeArr, [10, 40, 25, 75, 50]);
    });
  });

  describe('level traversal with a callback', () => {
    it('iterates over a tree in breadth-first fashion', () => {
      const treeArr = [];
      
      testTree.bfsTrav(node => {
        treeArr.push(node.val);
      });

      assert.deepStrictEqual(treeArr, [50, 25, 75, 10, 40]);
    });
  });

  describe('countNodes', () => {
    it('counts the number of nodes in a tree', () => {
      assert.equal(5, testTree.countNodes());
    });

    it('works with subtrees', () => {
      assert.equal(3, testTree.countNodes(testTree.find(25)));
    });
  });

  describe('countHeight', () => {
    it('counts the height of a tree', () => {
      assert.equal(3, testTree.countHeight());
    });

    it('works with subtrees', () => {
      assert.equal(2, testTree.countHeight(testTree.find(25)));
    });
  });

  describe('isValid', () => {
    // one of the tests makes tree invalid - 
    // this puts it back to being valid
    after(() => {
      testTree.root.left.val = 25;
    });

    it('determines whether a given tree is a BST', () => {
      assert.equal(true, testTree.isValid());
    });

    it('works with subtrees', () => {
      assert.equal(true, testTree.isValid(testTree.find(25)));
    });

    it('returns false for invalid BST\'s', () => {
      testTree.root.left.val = 100;

      assert.equal(false, testTree.isValid());
    });
  });

  /*
            50
     25            75
  10    40      65    85
      35  45  
  */
  describe('inOrderPre', () => {
    it('finds inorder predecessor of a given node', () => {
      testTree.insert(35).insert(45).insert(65).insert(85);

      assert.equal(45, testTree.inOrderPre(testTree.root).val);
    });

    it('handles a leaf node that has a predecessor', () => {
      assert.equal(50, testTree.inOrderPre(testTree.find(65)).val);
    });

    it('handles a leaf node that has no predecessor', () => {
      assert.equal(null, testTree.inOrderPre(testTree.find(10)));
    });
  });

  /*
            50
     25               75
  10    40        65      85
      35  45   55    70
                 60
                  61
                   62
  */

  describe('inOrderSucc', () => {
    it('finds inorder successor of a given node', () => {
      testTree.insert(55).insert(70);

      assert.equal(55, testTree.inOrderSucc(testTree.root).val);
    });

    it('handles a leaf node that has a successor', () => {
      assert.equal(65, testTree.inOrderSucc(testTree.find(55)).val);
    });

    it('handles a leaf node that has no successor', () => {
      assert.equal(null, testTree.inOrderSucc(testTree.find(85)));
    });
  });

  describe('replaceWithSucc', () => {
    it('replaces a node with its inorder successor', () => {
      testTree.insert(60).insert(61).insert(62);
      testTree.replaceWithSucc(testTree.find(55));

      assert.equal(60, testTree.find(65).left.val);
      assert.equal(61, testTree.find(60).right.val);
    });

    it('keeps the tree valid', () => {
      assert.equal(true, testTree.isValid());
    });
  });

  /*
            50
     25               75
  10    40        65      85
      35  45   60    70
                 61
                  62
  */

  describe('remove', () => {
    it('removes a node with no children', () => {
      testTree.remove(10);

      assert.equal(null, testTree.find(25).left);
    });

    it('removes a node with one child', () => {
      testTree.remove(25);

      assert.equal(40, testTree.root.left.val);
    });

    it('keeps subtree intact upon single-child node removal', () => {
      assert.equal(45, testTree.find(40).right.val);
    });

    it('removes a node with two children', () => {
      testTree.remove(50);

      assert.equal(60, testTree.root.val);
    });

    it('modifies the tree correctly if node has two children', () => {
      assert.equal(61, testTree.find(65).left.val);
      assert.equal(62, testTree.find(61).right.val);
      assert.equal(true, testTree.find(62).isLeaf());
    });

    it('keeps the tree valid', () => {
      assert.equal(true, testTree.isValid());
    });
  });

  /*
            60
     40               75
  35    45        65      85
               61    70
                 62
  */

  describe('BST balancing', () => {
    describe('isBalanced', () => {
      after(() => {
        testTree.insert(62);
      });

      it('returns false if the tree is not balanced', () => {
        assert.equal(false, testTree.isBalanced());
      });

      it('returns true if the tree is balanced', () => {
        testTree.remove(62);

        assert.equal(true, testTree.isBalanced());
      });
    });

    /*
            50
        25      75
      10  40
    */

    describe('rotateRight', () => {
      it('performs a right rotation on a node', () => {
        rotateTree.rotateRight();

        assert.equal(25, rotateTree.root.val);
        assert.equal(40, rotateTree.find(50).left.val);
        assert.equal(10, rotateTree.root.left.val);
      });
    });

    describe('rotateLeft', () => {
      it('performs a left rotation on a node', () => {
        rotateTree.rotateLeft();

        assert.equal(50, rotateTree.root.val);
        assert.equal(40, rotateTree.find(25).right.val);
        assert.equal(75, rotateTree.root.right.val);
      });
    });

    describe('treeToVine', () => {
      it('turns a tree into a vine for DSW balancing', () => {
        // the height and number of nodes should match
        // (treeToVine returns the number of nodes)
        assert.equal(testTree.treeToVine(), testTree.countHeight());
      });
    });
  });
});