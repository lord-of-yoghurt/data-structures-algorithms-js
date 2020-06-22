const hash = require('./hash');

class HashTable {
  constructor(size = 53) {
    this.keyMap = new Array(size);
  }
}

module.exports = HashTable;