class PriorityQueue {
  constructor() {
    this.values = [];
  }

  // swap two nodes in the values array
  // using provided indices
  swapNodes(idx1, idx2) {
    const VALS = this.values;

    const temp = VALS[idx1];
    VALS[idx1] = VALS[idx2];
    VALS[idx2] = temp;
  }

  // add an item to the queue
  // and put it in the right place based on priority
  enqueue(val, priority) {
    if (!val || !priority || priority < 1) return false;

    const newNode = new Node(val, priority),
          VALS = this.values;

    VALS.push(newNode);

    // if there's only one item, nothing else needs to be done
    if (VALS.length === 1) return this;

    let nIdx = VALS.length - 1,
        pIdx = Math.floor((nIdx - 1) / 2);

    // min heap - if node's priority number is smaller
    // than its parent's (means priority is higher),
    // swap them and recalculate indices
    while (VALS[nIdx].priority < VALS[pIdx].priority) {
      this.swapNodes(pIdx, nIdx);
      nIdx = pIdx;
      pIdx = Math.floor((nIdx - 1) / 2);

      // get out of the loop if the parent index
      // is out of bounds (means the node's index is 0)
      if (pIdx < 0) break;
    }

    return this;
  }
}

class Node {
  constructor(val, priority) {
    this.val = val;
    this.priority = priority;
  }
}

module.exports = { PriorityQueue, Node };