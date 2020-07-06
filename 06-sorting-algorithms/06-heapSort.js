const MaxBinaryHeap = require(
  '../07-data-structures/05-heaps/00-maxBinaryHeap'
);

const heap = new MaxBinaryHeap();

function heapSort(arr) {
  const sorted = [];

  for (let i = 0; i < arr.length; i++) {
    heap.insert(arr[i]);
  }

  for (let i = 0; i < arr.length; i++) {
    sorted.unshift(heap.extractMax());
  }

  return sorted;
}

console.log(heapSort([10, 2, 5, 1, 9, 8, 4, 6, 3, 7]));