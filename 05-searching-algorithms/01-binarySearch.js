function test(expected, value) {
  if (expected !== value) {
    throw new Error(`Expected ${expected}, but got ${value}`);
  }

  console.log('Lookin\' good, chief.');
}

function binarySearchIt(arr, val) {
  if (arr.length === 0) return -1;

  let left = 0,
      right = arr.length - 1;

  while (left <= right) {
    let middle = Math.ceil((right + left) / 2);
    if (arr[middle] === val) {
      return middle;
    } else if (arr[middle] > val) {
      right = middle - 1;
    } else {
      left = middle + 1;
    }
  }

  return -1;
}

// doesn't work - fix
function binarySearchRec(arr, val) {
  if (arr.length === 0) return -1;

  let middle = Math.floor(arr.length / 2);

  if (arr[middle] === val) return middle;

  // the right half
  if (val > arr[middle]) {
    return binarySearch(arr.slice(middle + 1), val);
  }

  // the left half
  if (val < arr[middle]) {
    return binarySearch(arr.slice(0, middle), val);
  }
}

test(-1, binarySearchIt([1, 3, 4, 6, 7, 10, 15, 16, 23, 24, 27, 30], 29));
test(-1, binarySearchIt([1, 3, 4, 6, 7, 10, 15, 16, 23, 24, 27, 30], 2));
test(-1, binarySearchIt([1, 3, 4, 6, 7, 10, 15, 16, 23, 24, 27, 30], 50));
test(-1, binarySearchIt([1, 3, 4, 6, 7, 10, 15, 16, 23, 24, 27, 30], -50));
test(11, binarySearchIt([1, 3, 4, 6, 7, 10, 15, 16, 23, 24, 27, 30], 30));
test(0, binarySearchIt([1, 3, 4, 6, 7, 10, 15, 16, 23, 24, 27, 30], 1));
test(5, binarySearchIt([1, 3, 4, 6, 7, 10, 15, 16, 23, 24, 27, 30], 10));