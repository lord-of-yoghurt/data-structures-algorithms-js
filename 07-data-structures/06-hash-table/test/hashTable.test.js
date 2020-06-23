const assert = require('assert').strict;

const HashTable = require('../hashTable');

const testTable = new HashTable(),
      // smaller table to test for collisions
      collTable = new HashTable(13);

describe('a hash table', () => {
  it('has a keyMap array with default size of 53', () => {
    assert.equal(53, testTable.keyMap.length);
  });

  describe('set', () => {
    it('stores a value using a hashed key', () => {
      testTable.set('royal blue', '4169E1');

      const newPair = testTable.keyMap.find(val => !!val);

      assert.equal('4169E1', newPair[0][1]);
    });

    it('handles a collision using separate chaining', () => {
      // these two will create a collision
      // (resulting index is the same)
      collTable.set('pink', '#ffc0cb');
      collTable.set('cyan', '#00ffff');

      const pairs = collTable.keyMap.find(val => !!val);

      assert.equal(2, pairs.length);
    });

    it('updates value if a duplicate key is provided', () => {
      testTable.set('royal blue', '#4169e1');

      const pair = testTable.keyMap.find(val => !!val);

      assert.equal('#4169e1', pair[0][1]);
    });
  });

  describe('get', () => {
    it('fetches a key-value pair by key', () => {
      testTable.set('lime green', '#32cd32');

      const pair = testTable.get('lime green');

      assert.equal('#32cd32', pair[1]);
    });

    it('handles k/v pair after collision', () => {
      const pair = collTable.get('pink');

      assert.equal('#ffc0cb', pair[1]);
    });

    it('returns undefined if key is not present', () => {
      assert.equal(undefined, testTable.get('pink silver'));
    });
  });
});