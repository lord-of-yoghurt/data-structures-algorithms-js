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


  /*
          70
      40      30
    10  15  25  20
  */
  describe('insert', () => {
    it('inserts a value into the heap at the right place', () => {
      
      testHeap
        .insert(40)
        .insert(10)
        .insert(25)
        .insert(70)
        .insert(15)
        .insert(30)
        .insert(20);

      assert.equal(70, testHeap.values[0]);
      assert.equal(20, testHeap.values[6]);
    });
  });
});