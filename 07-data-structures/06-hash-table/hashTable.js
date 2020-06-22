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

    // get a reference to the keymap for brevity
    const map = this.keyMap;

    // use separate chaining to store the value.
    // if there's nothing at this index,
    if (!map[idx]) {
      // create an array and store the k-v pair there
      // in their own sub-array
      map[idx] = [[key, val]];
    } else {
      // otherwise, if there's already an array at that index,
      // we have a collision. 
      // if the k/v pair already exists, update the value
      if (map[idx][0][0] === key) map[idx][0][1] = val;

      // otherwise, push the new pair into the existing array
      else map[idx].push([key, val]);
    }

    return [key, val];
  }

  get(key) {
    if (typeof key !== 'string') return undefined;

    // hash the key and perform the look-up
    const idx = hash(key, this.keyMap.length),
          data = this.keyMap[idx];
    
    if (!data) return undefined;

    // if there's more than one pair at this index,
    // search for the pair using the key
    if (data.length > 1) {
      const kvPair = data.find(pair => pair[0] === key);
      return kvPair;
    }

    return data[0];
  }
}

module.exports = HashTable;