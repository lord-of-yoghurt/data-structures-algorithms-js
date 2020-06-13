const assert = require('assert').strict;

const MaxBinaryHeap = require('../00-maxBinaryHeap');

const testHeap = new MaxBinaryHeap();

describe('a max binary heap', () => {
  it('exists', () => {
    assert.equal(true, testHeap instanceof MaxBinaryHeap);
  });

  it('has an array of values as its only property', () => {
    assert.equal(true, testHeap.values instanceof Array);
  });
});