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

  describe('...and its methods', () => {
    it('adds an item to the end of the list (push)', () => {
      assert.equal(3, testList.length);

      testList.push('chickens');

      assert.equal(4, testList.length);
      assert.equal('chickens', testList.tail.data);
    });

    it('removes an item from the end of the list (pop)', () => {
      testList.pop();

      assert.equal(3, testList.length);
      assert.equal('grapefruits', testList.tail.data);
    });

    it('adds an item to the beginning of the list (unshift)', () => {
      testList.unshift('elephants');

      assert.equal(4, testList.length);
      assert.equal('elephants', testList.head.data);
    });

    it('removes an item from the beginning of the list (shift)', () => {
      testList.shift();

      assert.equal(3, testList.length);
    });
  });
});