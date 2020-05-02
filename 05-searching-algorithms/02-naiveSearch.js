function test(expected, value) {
  if (expected !== value) {
    throw new Error(`Expected ${expected}, but got ${value}!`);
  }
}

function naiveSearch(str, patt) {
  let matches = 0;

  for (let i = 0; i < str.length; i++) {
    for (let j = 0; j < patt.length; j++) {
      // break the loop if the chars don't match
      // we're looking ahead in the str, hence
      // the usage of str[i + j] - i should
      // stay in place in case there's a match
      // starting from the next char in str
      if (patt[j] !== str[i + j]) break;

      // if we got to the end of the pattern 
      // and the loop didn't break, increment matches
      if (j === patt.length - 1) {
        matches++;
      }
    }
  }

  return matches;
}

/* 
0 1 2 3 4 5
  i
a a a a a b a a a b a a a a b a a a a a a b
  a a a a b
          j
  0 1 2 3 4
*/

test(2, naiveSearch('something, something else', 'thing'));
test(0, naiveSearch('something, something else', 'thingz'));
test(3, naiveSearch('ice cream, you scream, we all scream', 'cream'));
test(5, naiveSearch('ice cream, you scream, we all scream', 'e'));
test(0, naiveSearch('omgomgomg', 'wtf'));
test(1, naiveSearch('abbcdabbccabcaf', 'bca'));
test(3, naiveSearch('aaaaabaaabaaaabaaaaaab', 'aaaab'));
