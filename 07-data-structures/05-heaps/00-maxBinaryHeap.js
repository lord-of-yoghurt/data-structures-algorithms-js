class MaxBinaryHeap {
  constructor() {
    this.values = [];
  }

  swapVal(idx1, idx2) {
    if (!this.values[idx1] || !this.values[idx2]) {
      throw new Error('Must provide indices for existing values!');
    }

    const temp = this.values[idx1];
    this.values[idx1] = this.values[idx2];
    this.values[idx2] = temp;
  }

  insert(val) {
    const VALS = this.values;
    // push the value to the end of the 
    // values array
    VALS.push(val);

    // grab its index
    let vIdx = VALS.length - 1;

    // grab the index of its parent using formula
    let pIdx = Math.floor((vIdx - 1) / 2);

    // assuming the newly added value is larger
    // than its parent's value, bubble it up
    while (VALS[vIdx] > VALS[pIdx]) {
      // swap them
      this.swapVal(vIdx, pIdx);

      // new value's index is now the parent index
      vIdx = pIdx;

      // update the parent index
      pIdx = Math.floor((vIdx - 1) / 2);
    }

    return this;
  }
}

module.exports = MaxBinaryHeap;