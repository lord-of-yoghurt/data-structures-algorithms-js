// basic hash function. it takes a key
// (to which a value will be attached in a hash table)
// and the length of the array that will store
// the values of the hash table.
const basicHashFunc = (key, arrLen) => {
  let total = 0;

  // for every character of the key
  for (let char of key) {
    // get the UTF-16 code for char,
    // subtract 96 to make it match the alphabet
    // (a is 0, b is 1, etc.)
    let value = char.charCodeAt(0) - 96;
    // add the result of the above to the total,
    // reduce the number by using modulo. this ensures
    // that the resulting index stays within the bounds
    // of the provided array (from its length)
    total = (total + value) % arrLen;
  }

  return total;
}

// improved hash function
module.exports = (key, arrLen) => {
  // we need a prime number in the hash function
  // in order to minimize collisions (meaning that
  // two pieces of data may end up occupying the same
  // spot in the storage array)
  const PRIME_NUM = 31;
  let total = 0;

  // make the algorithm constant for any key that is
  // longer than 100 chars
  for (let i = 0; i < Math.min(key.length, 100); i++) {
    // get the UTF-16 code and match the alphabet (a is 0)
    let value = key[i].charCodeAt(0) - 96;
    // this will work best if arrLen is also prime
    total = (total * PRIME_NUM + value) % arrLen;
  }

  return total;
}