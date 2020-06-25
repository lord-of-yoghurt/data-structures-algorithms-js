class Graph {
  constructor() {
    this.adjList = {};
  }

  addVertex(data) {
    this.adjList[data] = [];

    return this;
  }
}

module.exports = Graph;