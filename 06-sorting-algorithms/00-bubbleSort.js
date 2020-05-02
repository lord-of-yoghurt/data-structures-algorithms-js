function swap(arr, idx1, idx2) {
  const temp = arr[idx1];
  arr[idx1] = arr[idx2];
  arr[idx2] = temp;
}

function bubbleSort(arr) {
  // no mutating the original input!
  const sorted = [...arr];

  // we don't want to sort values we already know about,
  // so the outer loop starts from the end. 
  // after the first pass, the last number will be sorted,
  // so we don't need to look at it again.
  for (let i = arr.length - 1; i > 0; i--) {
    // flag for checking if any swaps were made
    let noSwaps = true;
    // the inner loop for comparing pairs of numbers
    for (let j = 0; j < i; j++) {
      // if the current number is greater than the following,
      if (sorted[j] > sorted[j + 1]) {
        // swap them
        swap(sorted, j, j + 1);
        // change the flag - a swap was made!
        noSwaps = false;
      }
    }
    // to save time, if no swaps were made, break the loop.
    // no swaps means the array is sorted!
    if (noSwaps) break;
  }

  return sorted;
}

console.log(bubbleSort([9,23,1,42,16,2,6,4,8,32,3]));