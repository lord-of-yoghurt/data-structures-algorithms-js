const hash = require('./hash');

class HashTable {
  // we need a prime number of elements in keyMap.
  // default is 53, but it can be larger
  constructor(size = 53) {
    this.keyMap = new Array(size);
  }

  // add or update a key-value pair
  set(key, val) {
    if (typeof key !== 'string' || typeof val !== 'string') {
      return undefined;
    }

    // hash the key
    const idx = Math.abs(hash(key, this.keyMap.length));

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

  // find a key-value pair using a key
  get(key) {
    if (typeof key !== 'string') return undefined;

    // hash the key and perform the look-up
    const idx = Math.abs(hash(key, this.keyMap.length)),
          data = this.keyMap[idx];
    
    if (!data) return undefined;

    // if there's more than one pair at this index,
    // search for the pair using the key
    if (data.length > 1) {
      return data.find(pair => pair[0] === key);
    }

    return data[0];
  }

  // get all keys of the hash table
  keys() {
    const keys = [],
          map = this.keyMap,
          len = this.keyMap.length;

    // loop over the keymap
    for (let i = 0; i < len; i++) {
      // if the item we're on is truthy and
      // there's more than one k-v pair (after collision),
      // such as [ ['a', 'b' ], ['c', 'd'] ]
      if (map[i] && map[i].length > 1) {
        // loop over all subitems
        for (let j = 0; j < map[i].length; j++) {
          // each key is two arrays deep, in the first place
          keys.push(map[i][j][0]);
        }
      // otherwise, and only if it's a truthy value,
      } else if (map[i]) {
        // the key is in the only sub-array, in the first place
        keys.push(map[i][0][0]);
      }
    }

    // will be empty if there's no data in keyMap
    return keys;
  }

  // get all values of the hash table
  values() {
    const values = [],
      map = this.keyMap,
      len = this.keyMap.length;

    // loop over the keymap
    for (let i = 0; i < len; i++) {
      // if the item we're on is truthy and
      // there's more than one k-v pair (after collision),
      // such as [ ['a', 'b' ], ['c', 'd'] ]
      if (map[i] && map[i].length > 1) {
        // loop over all subitems
        for (let j = 0; j < map[i].length; j++) {
          // each value is two arrays deep, in the second place
          values.push(map[i][j][1]);
        }
        // otherwise, and only if it's a truthy value,
      } else if (map[i]) {
        // the value is in the only sub-array, in the second place
        values.push(map[i][0][1]);
      }
    }

    // will be empty if there's no data in keyMap
    return values;
  }
}

module.exports = HashTable;