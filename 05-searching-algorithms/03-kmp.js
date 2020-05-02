function test(expected, value) {
  if (expected !== value) {
    console.log(`Expected ${expected}, but got ${value}`);
  }
}

/*
The KMP Algorithm is used to find out if a certain pattern
is a substring of a certain string. It's a major improvement over
the Naive Search algorithm in that it's O(n + m) vs O(nm) for the latter
*/
function kmpSearch(str, patt) {
  let matches = 0;

  const lps = generatePiTable(patt);

  for (let i = 0, j = 0; i < str.length;) {
    // handle counting overall matches
    // if str char matches patt char AND
    // we're at the end of patt
    if (str[i] === patt[j] && j === patt.length - 1) {

      // increment matches
      matches++;
      // advance to the next char of str
      i++;
      // go to the beginning of patt
      j = 0;
      
    } 

    // if char of str doesn't match char of patt
    else if (str[i] !== patt[j]) {

      // if j is not at the beginning of patt
      if (j !== 0) {
        // grab the index from the LPS table - 1
        // and bring j to that index in the patt
        j = lps[j-1];
      } else {
        // if j can't backtrack, simply advance i
        i++;
      }

    }

    // handle a match: advance in str and patt
    else {
      i++;
      j++;
    }
  }


  return matches;
}

/* 
Pi Table, also known as LPS (longest Prefix/Suffix)
is designed to see what the longest pair of prefix/suffix
is in a pattern. E.g.

P:
a b c d a b c
prefixes (from the beginning of P): a, ab, abc, abcd
suffixes (from the end of P): c, bc, abc, dabc

Note that 'abc' is both a prefix and a suffix. 
The suffix doesn't have to appear at the very end of the
pattern, but the prefix MUST start from char 0 of the pattern.

For each character of the pattern, we generate a number
based on reappearances:

a b c d a b c
0 0 0 0 1 2 3

'a' is a match further on, so it gets 1. It's followed by
'b', which is also a match, which gets 2. Same for c.

The values in this table (which is returned as an array)
are at the root of the KMP Algorithm's ability to go over
the given string WITHOUT BACKTRACKING (the only backtracking
we do is in the pattern.)

How the below function works

Starting position:
a b a b c a b d a b c a
j i

lps: [0] (we prepopulate it with 0 because the value
  for the first char of pattern is always zero)

char at j !== char at i, so we push 0 into lps, advance i

a b a b c a b d a b c a
j   i

lps: [0, 0]

Now it's a match, so we push 1 for the 'a' where i is,
advance j and i

a b a b c a b d a b c a
  j   i

lps: [0, 0, 1]

Further on, we have another match

a b a b c a b d a b c a
    j   i

lps: [0, 0, 1, 2]

Now we have a mismatch and we have to backtrack j. It gets a value of
lps[j - 1], so it's back to 0 because lps[2] is 1.

After that, there's no match, but j is at 0, so we just advance i.

*/
function generatePiTable(patt) {
  const table = [0];

  // i starts at the second char of patt,
  // j starts at the beginning
  for (let i = 1, j = 0; i < patt.length;) {
    // if they don't match...
    if (patt[i] !== patt[j]) {
      // ...and j is 0,
      if (j === 0) {
        // we add the value of j to the array and
        // advance further in the pattern
        table.push(j);
        i++;
      // if j is somewhere in the middle of the pattern,
      } else {
        // we set its value to what's in the
        // array so far, at index of current j - 1.
        // this allows us to skip over whatever 
        // characters have already matched so we can
        // start matching from before that.
        j = table[j - 1];
      }
    
    // if characters match, it means we have a
    // repeating substring in the pattern. 
    } else {
      // assign a number to the char based on where j is
      table.push(j + 1);
      // advance both i and j further into the pattern
      i++;
      j++;
    }
  }

  return table;
}

// console.log(generatePiTable('acacabacacabacacac'));
// console.log(generatePiTable('abcdabeabf'));
// console.log(generatePiTable('ababd'));
// console.log(generatePiTable('abcbcdabc'));

test(2, kmpSearch('something, something else', 'thing'));
test(0, kmpSearch('something, something else', 'thingz'));
test(3, kmpSearch('ice cream, you scream, we all scream', 'cream'));
test(5, kmpSearch('ice cream, you scream, we all scream', 'e'));
test(0, kmpSearch('omgomgomg', 'wtf'));
test(1, kmpSearch('abbcdabbccabcaf', 'bca'));
test(3, kmpSearch('aaaaabaaabaaaabaaaaaab', 'aaaab'));