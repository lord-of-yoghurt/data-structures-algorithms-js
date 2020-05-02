function quickSort(arr, left = 0, right = arr.length - 1) {
  // base case
  if (left < right) {
    // partition arr
    const pivotIdx = partition(arr, left, right);

    // recursive calls continue as long as
    // we're dealing with a subarray that's
    // longer than 1
    // (i.e. left idx hasn't met the right idx)

    // left of the sorted pivot
    quickSort(arr, left, pivotIdx - 1);

    // right of the sorted pivot
    quickSort(arr, pivotIdx + 1, right);
  }

  return arr;
}

// the process described below is called partitioning
function partition(arr, start = 0, end = arr.length - 1) {
  // pivot is set at the end of the array
  // the pivot is a number we will compare other numbers against,
  // and eventually this one number will be set into a 
  // sorted position
  let pivot = arr[end],
      // this is where the pivot will move to become sorted
      pIndex = start;
  
  // go over the array from the start to end - 1
  // (because the last element is the pivot),
  // make sure that all the elements less than the pivot 
  // remain to the left of the pivot, and everything greater
  // is on the right of the pivot         
  for (let i = start; i < end; i++) {
    if (arr[i] <= pivot) {
      swap(arr, i, pIndex);
      pIndex++;
    }
  }

  // once the rest of the numbers are set in place,
  // pIndex is at the position where the pivot should be
  // in order to be considered sorted. 
  // therefore we're swapping the end index (where the pivot
  // currently is) with the pIndex position.
  swap(arr, end, pIndex);

  // pIndex is then returned to be used for recursive calls
  return pIndex;
}

function swap(arr, idx1, idx2) {
  const temp = arr[idx1];
  arr[idx1] = arr[idx2];
  arr[idx2] = temp;
}

console.log(quickSort([7,2,1,6,8,5,3,4]));