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

    // new node gets inserted at the end of the queue
    VALS.push(newNode);

    // if there's only one item, nothing else needs to be done
    if (VALS.length === 1) return this;

    // grab the index of the newly inserted node
    let nIdx = VALS.length - 1;

    while (true) {
      // calculate the new node's parent's index
      let pIdx = Math.floor((nIdx - 1) / 2);

      // as long as nIdx is greater than zero
      // (to prevent out-of-bound indices)
      // and the priority of the value at nIdx
      // is higher (i.e. the number is smaller)
      if (nIdx && VALS[nIdx].priority < VALS[pIdx].priority) {
        // keep swapping and recalculating indices
        this.swapNodes(pIdx, nIdx);
        nIdx = pIdx;
      } else return this;
    }
  }
}

class Node {
  constructor(val, priority) {
    this.val = val;
    this.priority = priority;
  }
}

module.exports = { PriorityQueue, Node };