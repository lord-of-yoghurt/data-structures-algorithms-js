const assert = require('assert').strict;

const { Queue } = require('../00-queue');

const testQueue = new Queue();

describe('a queue', () => {
  it('initialises with size 0', () => {
    assert.equal(0, testQueue.size);
  });

  describe('push', () => {
    it('adds new nodes at the end of the queue', () => {
      testQueue.push('apples').push('oranges');

      assert.equal('oranges', testQueue.last.data);
    });

    it('keeps track of the node after first', () => {
      assert.equal('oranges', testQueue.first.next.data);
    });

    it('keeps track of the first node correctly', () => {
      testQueue.push('peaches');

      assert.equal('apples', testQueue.first.data);
    });

    it('updates the size of the queue correctly', () => {
      assert.equal(3, testQueue.size);
    });
  });

  describe('pop', () => {
    it('removes the first node correctly', () => {
      testQueue.pop();

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