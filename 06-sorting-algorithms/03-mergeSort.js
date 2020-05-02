function mergeSort(arr) {
  /* 
              [4, 2, 3, 1]
           [4, 2]      [3, 1]
  BC:    [4]   [2]    [3]   [1]
  */
  // get length in its own variable
  const len = arr.length;

  // base case:
  // if the length of the array is less than two,
  // we can stop splitting things up and start merging them.
  // single-length arrays are SORTED
  if (len < 2) return arr;

  // use the length of the array to calculate the middle.
  // floor is used to round it down in case of odd lengths
  const middle = Math.floor(len / 2);

  // the awesome part! REMEMBER THE BASE CASE!
  // we're returning a merged array comprised of...
  return merge(
    // the left half of the original array merge-sorted
    // (which, if longer than 1, will continue to split up
    // before it can be merged)
    mergeSort(arr.slice(0, middle)),
    // and the right half of the original array merge-sorted
    // (ditto for splitting if longer than 1)
    mergeSort(arr.slice(middle))
  );
}


function merge(arr1, arr2) {
  const merged = [];

  let i = 0,
      j = 0;

  // this runs while we have numbers left to look at
  // in BOTH arrays (once one of the conditions
  // evaluates to false, this loop will break)
  while (i < arr1.length && j < arr2.length) {
    if (arr1[i] <= arr2[j]) {
      merged.push(arr1[i]);
      i++;
    } else {
      merged.push(arr2[j]);
      j++;
    }
  }

  // at this point, i and j retain their positions.
  // running out of values in one array means the
  // rest of the numbers in the other come after
  // the last number in the first

  // handle numbers potentially left in the first array
  while (i < arr1.length) {
    merged.push(arr1[i]);
    i++;
  }

  // handle numbers potentially left in the second array
  while (j < arr2.length) {
    merged.push(arr2[j]);
    j++;
  }

  return merged;
}

console.log(mergeSort([10,2,5,1,9,8,4,6,3,7]));