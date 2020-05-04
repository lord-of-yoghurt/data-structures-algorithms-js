const assert = require('assert').strict;

const { Node, SinglyLinkedList } = require('../00-singlyLinkedList');

const testNode = new Node('apples'),
      testList = new SinglyLinkedList();


// test node functionality
describe('a single node', () => {
  it('has a value', () => {
    assert.equal('apples', testNode.data);
  });

  it('points to the next node', () => {
    assert.equal(null, testNode.next);
  });
});

// test list functionality
describe('a linked list', () => {
  it('is empty upon creation', () => {
    assert.equal(0, testList.length);
  });

  it('updates length upon items added', () => {
    testList.push('apples').push('oranges').push('grapefruits');

    assert.equal(3, testList.length);
  });

  it('sets head and tail correctly', () => {
    assert.equal('apples', testList.head.data);
    assert.equal('grapefruits', testList.tail.data);
  });

  it('outputs the whole list in a nice format', () => {
    assert.equal(
      '(apples) -> (oranges) -> (grapefruits)',
      testList.toString()
    );
  });

  describe('push', () => {
    it('adds an item to the end of the list', () => {
      assert.equal(3, testList.length);

      testList.push('chickens');

      assert.equal(4, testList.length);
      assert.equal('chickens', testList.tail.data);
    });
  });

  describe('pop', () => {
    it('removes an item from the end of the list', () => {
      testList.pop();

      assert.equal(3, testList.length);
      assert.equal('grapefruits', testList.tail.data);
    });
  });

  describe('unshift', () => {
    it('adds an item to the beginning of the list', () => {
      testList.unshift('elephants');

      assert.equal(4, testList.length);
      assert.equal('elephants', testList.head.data);
    });
  });

  describe('shift', () => {
    it('removes an item from the beginning of the list', () => {
      testList.shift();

      assert.equal(3, testList.length);
    });
  });

  describe('get', () => {
    it('returns a node at a specified index', () => {
      const node = testList.get(1);

      assert.equal('oranges', node.data);
    });

    it('returns undefined if index is out of bounds', () => {
      assert.equal(undefined, testList.get(10));
    });
  });

  describe('set', () => {
    it('updates the value of a specified node (set)', () => {
      testList.set(2, 'bananas');

      assert.equal('bananas', testList.tail.data);
    });
  });

  describe('insert', () => {
    it('inserts a node at a specified position correctly', () => {
      testList.insert(2, 'mangos');

      assert.equal(4, testList.length);
      assert.equal('bananas', testList.tail.data);
      assert.equal('oranges', testList.get(1).data);
    });

    it('handles inserting at the tail correctly', () => {
      testList.insert(4, 'pineapples');

      assert.equal('pineapples', testList.tail.data);
    });
  });
});