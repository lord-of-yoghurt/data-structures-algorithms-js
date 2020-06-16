class PriorityQueue {
  constructor() {
    this.values = [];
  }
}

class Node {
  constructor(val, priority) {
    this.val = val;
    this.priority = priority;
  }
}

module.exports = { PriorityQueue, Node };