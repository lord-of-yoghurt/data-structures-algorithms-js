// basic hashing function. it takes a key
// (to which a value will be attached in a hash table)
// and the length of the array that will store
// the values of the hash table.
module.exports = (key, len) => {
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
    total = (total + value) % len;
  }

  return total;
}