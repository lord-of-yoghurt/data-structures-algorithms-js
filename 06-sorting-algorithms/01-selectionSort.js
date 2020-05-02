function swap(arr, idx1, idx2) {
  let temp = arr[idx1];
  arr[idx1] = arr[idx2];
  arr[idx2] = temp;
}

function selectionSort(arr) {
  if (arr.length <= 1) return arr;
  // no mutating the original input!
  const sorted = [...arr];

  // start outer loop from the beginning of arr
  for (let i = 0; i < arr.length; i++) {
    // set the current minimum (INDEX!) to
    // where i is at the moment
    let currMin = i;

    // start inner loop from the next position after i
    for (let j = i + 1; j < arr.length; j++) {
      // if the value at j is less than the value at
      // currMin, set j to currMin (indices!)
      if (sorted[j] < sorted[currMin]) currMin = j;
    }

    // perform the swap only if the value of 
    // currMin has changed from where it was
    // before the current pass
    if (currMin !== i) swap(sorted, i, currMin);
  }

  return sorted;
}

console.log(selectionSort([10,6,20,3,5,-42]));