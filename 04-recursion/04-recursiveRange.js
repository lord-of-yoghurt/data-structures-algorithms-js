/* 
Write a function recRange() that takes a number. 
The function should return the sum of all numbers from 0 up to
the given number.

Kinda like a factorial!
*/

function test(expected, value) {
  if (expected !== value) {
    throw new Error(`Expected ${expected}, but got ${value}!`);
  }

  console.log('Good boy.');
}

function iterRange(num) {
  let sum = 0;

  for (let i = num; i > 0; i--) {
    sum += i;
  }

  return sum;
}

function recRange(num) {
  // base case: if num is 0, return 0
  if (num === 0) return 0;

  // return num plus the return value of this function
  // called on num - 1
  return num += recRange(num - 1);
}

test(21, iterRange(6));
test(55, iterRange(10));
test(21, recRange(6));
test(55, recRange(10));