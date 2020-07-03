class PriorityQueue {
  constructor() {
    this.values = [];
  }

  isEmpty() {
    return this.values.length === 0;
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
    if (!val || priority < 0) return false;

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

  dequeue() {
    const VALS = this.values;

    let len = this.values.length;

    // will return undefined if queue is empty
    if (len < 2) return VALS.pop();

    // swap first and last nodes
    this.swapNodes(0, len - 1);

    // this is the node we're removing,
    // it'll be returned
    const removed = VALS.pop();

    // the index of the replacement node
    let nIdx = 0;

    while (true) {
      // get indices of the replacement node's L/R children
      let lIdx = 2 * nIdx + 1,
          rIdx = 2 * nIdx + 2,
          // helper variables to shorten things
          current = VALS[nIdx],
          lChild = VALS[lIdx],
          rChild = VALS[rIdx];
      
      // if the replacement node's priority is lower
      // (i.e. priority number is greater) than its
      // left or right child's
      if (current.priority > lChild.priority ||
          current.priority > rChild.priority) {
        // if the left child's priority is higher
        if (lChild.priority < rChild.priority) {
          // swap replacement node with it
          this.swapNodes(nIdx, lIdx);
        } else {
          // otherwise, swap with the right child
          this.swapNodes(nIdx, rIdx);
        }
      } else return removed;
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