/**
 * ACTUAL ALGORITHM
 */

// this only works for base-10 numbers!
function radixSort(arr) {
  // not mutating the original input
  let sorted = [...arr];

  // get the number of digits of the longest number
  const k = mostDigits(arr);

  // outer loop repeats as many times as 
  // the number of digits in the longest num
  for (let i = 0; i < k; i++) {
    // create the buckets
    const buckets = [...new Array(10)].map(() => []);

    // inner loop works for each number in the array
    for (let j = 0; j < arr.length; j++) {
      /* 
        this is where we get the i'th digit of each num,
        counting from right to left

        e.g. for number 7323 and i == 0:
              i
        7 3 2 3
      */
      const numIdx = getDigitMath(sorted[j], i);

      // put the current number in the appropriate bucket
      buckets[numIdx].push(sorted[j]);
    }

    // after everything is assigned to buckets,
    // reassemble the sorted array by flattening 
    // the buckets array
    sorted = [].concat.apply([], buckets);
  }

  return sorted;
}

/**
 * HELPERS
 */

// getDigit helper gives us the Nth digit of a number,
// counting from right to left,
// starting with zero.

// using a string, expensive and fugly, credit goes to me
function getDigitStr(num, idx) {
  // turn the number into a string
  const numStr = num.toString();

  // split the str, reverse it, get the `idx`th position,
  // turn it back into a number
  return parseInt(numStr.split('').reverse()[idx]);
}

// using math awesomeness, credit goes to StackOverflow.
// works only for base 10.
// this will also return 0 if the index is larger
// than (number of digits in num) - 1
function getDigitMath(num, idx) {
  //                 10^3   10^2  10^1 10^0     
  // example: 7323 = 7000 + 300 + 20 + 3
  // idx: 2

  // divide 7323 by 10 to the power of 2 (7323 / 100 = 73.23)
  // round it down: 73
  // mod it by 10 (remainder of 73 divided by 10): 3
  return Math.floor(Math.abs(num) / Math.pow(10, idx)) % 10;
}

// count digits in a number using a string
function digitCountStr(num) {
  return num.toString().length;
}

// count digits in a number using math, base 10 only
// (c) StackOverflow
function digitCountMath(num) {
  if (num === 0) return 1;

  // Example: 7323
  // log10 of 7323 is 3.8647
  // round it down and get 3
  // add 1 and there's your number of digits
  return Math.floor(Math.log10(Math.abs(num))) + 1;
}

// get the largest number in the array
function maxNumOfArr(arr) {
  let max = 0;

  for (let num of arr) {
    if (num > max) max = num;
  }

  return max;
}

// get the number of digits of a number with the most digits :D
function mostDigits(arr) {
  return digitCountMath(maxNumOfArr(arr));
}

console.log(radixSort([4, 1327, 13, 376, 25, 8195, 10, 8]));