const assert = require('assert').strict;

const { fibIter, fibRec } = require('../00-fibonacci');

describe('iterative fibonacci', () => {
  it('returns the n-th member of fib sequence in O(n)', () => {
    assert.equal(21, fibIter(8));
  });
});

describe('recursive fibonacci', () => {
  it('returns the n-th member of fib sequence in O(crap)', () => {
    assert.equal(34, fibRec(9));
  });
});