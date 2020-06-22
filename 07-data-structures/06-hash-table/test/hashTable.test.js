const assert = require('assert').strict;

const HashTable = require('../hashTable');

const testTable = new HashTable();

describe('a hash table', () => {
  it('has a keyMap array with default size of 53', () => {
    assert.equal(53, testTable.keyMap.length);
  });

  describe('set', () => {
    it('stores a value using a hashed key', () => {
      testTable.set('royal blue', '#4169e1');

      const newPair = testTable.keyMap.find(val => !!val);

      assert.equal('#4169e1', newPair[0][1]);
    });

    it('handles a collision using separate chaining', () => {
      testTable.set('royal blue', '4169E1');

      const pairs = testTable.keyMap.find(val => !!val);

      assert.equal(2, pairs.length);
    });
  });
});