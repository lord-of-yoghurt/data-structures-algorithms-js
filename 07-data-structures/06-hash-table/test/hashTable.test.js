const assert = require('assert').strict;

const HashTable = require('../hashTable');

const testTable = new HashTable();

describe('a hash table', () => {
  it('has a keyMap array with default size of 53', () => {
    assert.equal(53, testTable.keyMap.length);
  });
});