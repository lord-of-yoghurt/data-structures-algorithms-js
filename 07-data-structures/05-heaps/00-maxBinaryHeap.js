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
      // calculate the parent value's index
      let pIdx = Math.floor((vIdx - 1) / 2);

      // if the value's index is more than 0
      // and the value is larger than its parent
      if (vIdx && VALS[vIdx] > VALS[pIdx]) {
        // swap them
        this.swapVal(vIdx, pIdx);
        // value's index becomes its parent's index
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
    let vIdx = 0;

    while (true) {
      // calculate indices of the left and right children
      // of replacement value
      let lIdx = 2 * vIdx + 1,
          rIdx = 2 * vIdx + 2,
          // helper variables for readability
          val = VALS[vIdx],
          lChild = VALS[lIdx],
          rChild = VALS[rIdx];
      
      // if the new value is less than either of its children
      if (val < lChild || val < rChild) {
        // replace with the largest of them and reassign indices
        if (lChild > rChild) {
          this.swapVal(vIdx, lIdx);
          vIdx = lIdx;
        } else {
          this.swapVal(vIdx, rIdx);
          vIdx = rIdx;
        }
      } else return max;
    }
  }
}

module.exports = MaxBinaryHeap;