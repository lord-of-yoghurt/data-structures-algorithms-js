class MaxBinaryHeap {
  constructor() {
    this.values = [];
  }

  swapVal(idx1, idx2) {
    const VALS = this.values;

    if (!VALS[idx1] || !VALS[idx2]) {
      throw new Error('Must provide indices for existing values!');
    }

    const temp = VALS[idx1];
    VALS[idx1] = VALS[idx2];
    VALS[idx2] = temp;
  }

  insert(val) {
    const VALS = this.values;
    let len = this.values.length;
    // push the value to the end of the 
    // values array
    VALS.push(val);

    if (len === 1) return this;

    // grab its index
    let vIdx = len - 1;

    while (true) {
      let pIdx = Math.floor((vIdx - 1) / 2);

      if (vIdx && VALS[vIdx] > VALS[pIdx]) {
        this.swapVal(vIdx, pIdx);
        vIdx = pIdx;
      } else return this;
    }
  }

  extractMax() {
    const VALS = this.values;

    // handle empty heap
    if (VALS.length === 0) return undefined;

    // swap the first and the last values
    this.swapVal(0, VALS.length - 1);

    const max = VALS.pop();

    // handle heap with just the root 
    // (now empty after pop)
    if (VALS.length === 0) return max;

    // index of the replacing value is now 0
    let vIdx = 0,
        // its left child's index
        lIdx = 1,
        // its right child's index
        rIdx = 2;
    
    while (VALS[lIdx] > VALS[vIdx] || VALS[rIdx] > VALS[vIdx]) {
      // if the left child is larger, swap with it
      if (VALS[lIdx] > VALS[rIdx]) {
        this.swapVal(vIdx, lIdx);
        // reassign the value's index
        vIdx = lIdx;
      // otherwise, do the same with the right child
      } else {
        this.swapVal(vIdx, rIdx);
        vIdx = rIdx;
      }

      // recalculate left and right child's indices
      lIdx = 2 * vIdx + 1;
      rIdx = 2 * vIdx + 2;
    }

    return max;
  }
}

module.exports = MaxBinaryHeap;