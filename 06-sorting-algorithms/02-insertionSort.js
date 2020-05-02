function swap(arr, idx1, idx2) {
  let temp = arr[idx1];
  arr[idx1] = arr[idx2];
  arr[idx2] = temp;
}

function insertionSort(arr) {
  // no mutating the original input
  const sorted = [...arr];

  // starting from the second element (first is already sorted),
  // until the end of the array
  for (let i = 1; i < arr.length; i++) {
    // starting from one after i, until EITHER
    // the beginning of the array OR
    // until the number at j - 1 is less than
    // the number at j (in which case the number at j
    // doesn't need to go any further back)
    for (let j = i + 1; j > 0 || sorted[j] > sorted[j - 1]; j--) {
      // if the number we're looking at is less than
      // the number before it, swap them
      if (sorted[j] < sorted[j - 1]) {
        swap(sorted, j, j - 1);
      }
    }
  }

  return sorted;
}

console.log(insertionSort([10,3,8,1,4,5,2,6,9,7]));


/* 
          j-1 j
[1, 3, 10, 8, 4, 5, 2, 6, 9, 7]
           i
*/