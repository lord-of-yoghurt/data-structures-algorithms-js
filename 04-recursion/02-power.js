/* 
Write a function called power() that accepts two numbers as arguments:
the first will be brought to the power of the second. Return the result. 
This is similar to Math.pow, but without negative bases/exponents

power(2, 0); // 1
power(2, 2); // 4
power(2, 5); // 32

Iterative:

Set i to the second argument, decrement it
For each iteration, multiply num by itself

*/

function test(expected, value) {
  if (expected !== value) {
    throw new Error(`Expected ${expected}, but got ${value}!`);
  }
}

// iterative
function powerIt(num, exp) {
  if (exp === 0) return 1;
  if (exp === 1) return num;

  let result = num; 

  for (let i = exp; i > 1; i--) {
    result *= num;
  }

  return result;
}

// recursive
function powerRec(num, exp) {
  if (exp === 0) return 1;

  return num * powerRec(num, exp - 1);
}

powerRec(2, 4);
//                                               ^
// return 2 * powerRec(2, 3)                     | 16
//        return 2 * powerRec(2, 2)              | 8
//               return 2 * powerRec(2, 1)       | 4
//                      return 2 * powerRec(2, 0)| 2
//                             return 1          | 1

test(1, powerRec(2, 0));
test(243, powerRec(3, 5));
test(256, powerRec(4, 4));