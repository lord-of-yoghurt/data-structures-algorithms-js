const assert = require('assert').strict;

const { PriorityQueue, Node } = require('../01-priorityQueue');

const testQueue = new PriorityQueue();

describe('a priority queue', () => {
  describe('enqueue', () => {
    it('adds a node to the queue and places it correctly', () => {
      testQueue
        .enqueue('watch tv', 5)
        .enqueue('do work', 1)
        .enqueue('ride bike', 3)
        .enqueue('cook dinner', 2)
        .enqueue('hydrate', 1);
      
      assert.equal('do work', testQueue.values[0].val);
    });
  });

  describe('dequeue', () => {
    it('removes and replaces the node with the highest priority', () => {
      const removed = testQueue.dequeue();

      assert.equal('do work', removed.val);
      assert.equal('hydrate', testQueue.values[0].val);
    });
  });
});