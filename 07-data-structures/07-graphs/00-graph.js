class Graph {
  constructor() {
    this.adjList = {};
  }

  addVertex(data) {
    this.adjList[data] = [];

    return this;
  }

  addEdge(vtx1, vtx2) {
    const list = this.adjList;

    if (!list[vtx1] || !list[vtx2]) return false;

    list[vtx1].push(vtx2);
    list[vtx2].push(vtx1);

    return this;
  }
}

module.exports = Graph;