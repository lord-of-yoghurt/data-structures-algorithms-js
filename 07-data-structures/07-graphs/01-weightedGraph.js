class WeightedGraph {
  constructor() {
    this.adjList = {};
  }

  addVertex(data) {
    if (!this.adjList[data]) {
      this.adjList[data] = [];
    }

    return this;
  }

  // each vertex in the adjList will have
  // neighbours such as:
  // { "A": [ 
  //   { vtx: "B", weight: 10 } 
  // ] }
  addEdge(vtx1, vtx2, weight) {
    const list = this.adjList;

    if (!list[vtx1] || !list[vtx2]) return false;

    list[vtx1].push({ vtx: vtx2, weight });
    list[vtx2].push({ vtx: vtx1, weight });

    return this;
  }
}

module.exports = WeightedGraph;