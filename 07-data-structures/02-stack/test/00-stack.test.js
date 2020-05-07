const assert = require('assert').strict;

const { Node, Stack } = require('../00-stack');

const testNode = new Node('apples'),
      testStack = new Stack();

describe('a single node', () => {
  it('stores some data', () => {
    assert.equal('apples', testNode.data);
  });

  it('points to another node', () => {
    assert.equal(null, testNode.next);
  });
});

describe('a stack', () => {
  it('initializes with size 0', () => {
    assert.equal(0, testStack.size);
  });

  describe('push', () => {
    it('points first and last to the same node if stack empty', () => {
      testStack.push('apples');
      console.log(testStack);
      assert.equal(testStack.first.data, testStack.last.data);
    });

    it('adds an item on top of the stack', () => {
      testStack.push('oranges').push('peaches');

      assert.equal('peaches', testStack.last.data);
    });

    it('keeps track of the first item correctly', () => {
      assert.equal('apples', testStack.first.data);
    });

    it('updates the size of the stack correctly', () => {
      assert.equal(3, testStack.size);
    });
  });

  describe('pop', () => {
    it('removes an item from the top of the stack', () => {
      testStack.pop();

      assert.equal('oranges', testStack.last.data);
    });

    it('keeps track of the first item correctly', () => {
      assert.equal('apples', testStack.first.data);
    });

    it('updates the size of the stack correctly', () => {
      assert.equal(2, testStack.size);
    });

    it('points first and last to the same node if one node left', () => {
      testStack.pop();

      assert.equal(testStack.first.data, testStack.last.data);
    });
  });
});