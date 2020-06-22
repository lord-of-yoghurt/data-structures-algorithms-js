const hash = require('./hash');

class HashTable {
  // we need a prime number of elements in keyMap.
  // default is 53, but it can be larger
  constructor(size = 53) {
    this.keyMap = new Array(size);
  }

  set(key, val) {
    if (typeof key !== 'string' || typeof val !== 'string') {
      return undefined;
    }

    // hash the key
    const idx = hash(key, this.keyMap.length);

    // use separate chaining to store the value.
    // if there's nothing at this index,
    if (!this.keyMap[idx]) {
      // create an array and store the k-v pair there
      // in their own sub-array
      this.keyMap[idx] = [[key, val]];
    } else {
      // otherwise, if there's already an array at that index,
      // we have a collision. push the new pair into the 
      // existing array
      this.keyMap[idx].push([key, val]);
    }

    return [key, val];
  }
}

module.exports = HashTable;