/* 
Write a function productOfArray() that takes an array and
multiplies all numbers in it, returning the final product.

productOfArray([1, 2, 3]); // 6
productOfArray([1, 2, 3, 10]); // 60

Iterative: set result var to 1, multiply each number by it and assign

Recursive: 

if the array is empty at first, return null
set result to 1

helper func:
  if the array is empty, return
  result gets multiplied by the first element of arr
  call helper on arr with first element sliced out

call helper on arr

return result

*/

function test(expected, value) {
  if (expected !== value) {
    throw new Error(`Expected ${expected}, but got ${value}!`);
  }

  console.log('You win!');
}

function productOfArrayIt(arr) {
  let result = 1;

  for (let i = 0; i < arr.length; i++) {
    result *= arr[i];
  }

  return result;
}

function productOfArrayRec(arr) {
  if (arr.length === 0) return null;

  let result = 1;

  const helper = a => {
    if (a.length === 0) return;

    result *= a[0];

    helper(a.slice(1));
  };

  helper(arr);

  return result;
}

function productOfArrayPure(arr) {
  // 1 will be returned for empty array,
  // and this is also the base case:
  // once the array is empty, we'll multiply
  // all the numbers, and multiplying them
  // by 1 won't change anything
  if (arr.length === 0) return 1;

  // if the array is not empty, we're returning
  // its first element multiplied by the return value
  // of this function called on the rest of the array
  // with first element sliced off. 
  return arr[0] * productOfArrayPure(arr.slice(1));
}

test(6, productOfArrayPure([1, 2, 3]));
test(60, productOfArrayPure([1, 2, 3, 10]));