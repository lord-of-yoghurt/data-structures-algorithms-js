class Graph {
  constructor() {
    this.adjList = {};
  }

  addVertex(data) {
    const list = this.adjList;
    
    if (!list[data]) list[data] = [];

    return this;
  }

  addEdge(vtx1, vtx2) {
    const list = this.adjList;

    if (!list[vtx1] || !list[vtx2]) return false;

    list[vtx1].push(vtx2);
    list[vtx2].push(vtx1);

    return this;
  }

  removeEdge(vtx1, vtx2) {
    const list = this.adjList;

    list[vtx1] = list[vtx1].filter(v => v !== vtx2);
    list[vtx2] = list[vtx2].filter(v => v !== vtx1);

    return this;
  }
}

module.exports = Graph;