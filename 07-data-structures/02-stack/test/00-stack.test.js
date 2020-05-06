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

// TODO: stack tests for push() and pop()