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

  // to remove a vertex, we have to remove all of its
  // edges as well
  removeVertex(vtx) {
    if (!this.adjList[vtx]) return false;

    // go over every edge of the vertex we're removing
    for (let item of this.adjList[vtx]) {
      // call removeEdge on the vertex itself and every edge
      this.removeEdge(vtx, item);
    }

    // delete the corresponding property from the
    // adjList object entirely
    delete this.adjList[vtx];

    return this;
  }
}

module.exports = Graph;