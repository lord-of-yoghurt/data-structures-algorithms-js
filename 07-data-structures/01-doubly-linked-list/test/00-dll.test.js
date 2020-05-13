const assert = require('assert').strict;

const { Node, DoublyLinkedList } = require('../00-dll');

const testNode = new Node('apples'),
      testList = new DoublyLinkedList();

describe('a node', () => {
  it('stores a value', () => {
    assert.equal('apples', testNode.data);
  });

  it('points to the next node', () => {
    assert.equal(null, testNode.next);
  });

  it('points to the previous node', () => {
    assert.equal(null, testNode.prev);
  });
});

describe('a doubly linked list', () => {
  it('knows its first node', () => {
    assert.equal(null, testList.first);
  });

  it('knows its last node', () => {
    assert.equal(null, testList.last);
  });

  it('has a length', () => {
    assert.equal(0, testList.length);
  });

  describe('push', () => {
    it('handles an empty list', () => {
      testList.push('apples');
      console.log(testList);
      assert.equal('apples', testList.first.data);
      assert.equal('apples', testList.last.data);
    });

    it('adds a new node to the end of a list', () => {
      testList.push('oranges');
      console.log(testList);
      assert.equal('apples', testList.first.data);
      assert.equal('oranges', testList.last.data);
    });
  });
});