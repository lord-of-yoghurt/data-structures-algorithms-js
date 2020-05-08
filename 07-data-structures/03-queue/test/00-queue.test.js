const assert = require('assert').strict;

const { Queue } = require('../00-queue');

const testQueue = new Queue();

describe('a queue', () => {
  it('initialises with size 0', () => {
    assert.equal(0, testQueue.size);
  });

  describe('enqueue', () => {
    it('adds new nodes at the end of the queue', () => {
      testQueue.enqueue('apples').enqueue('oranges');

      assert.equal('oranges', testQueue.last.data);
    });

    it('keeps track of the node after first', () => {
      assert.equal('oranges', testQueue.first.next.data);
    });

    it('keeps track of the first node correctly', () => {
      testQueue.enqueue('peaches');

      assert.equal('apples', testQueue.first.data);
    });

    it('updates the size of the queue correctly', () => {
      assert.equal(3, testQueue.size);
    });
  });

  describe('dequeue', () => {
    it('removes the first node correctly', () => {
      testQueue.dequeue();

      assert.equal('oranges', testQueue.first.data);
    });

    it('keeps track of the node after the first', () => {
      assert.equal('peaches', testQueue.first.next.data);
    });

    it('updates the size of the queue correctly', () => {
      assert.equal(2, testQueue.size);
    });
  });
});