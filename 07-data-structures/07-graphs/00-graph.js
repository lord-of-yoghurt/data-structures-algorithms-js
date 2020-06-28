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

  // recursive depth-first traversal of a graph
  // (takes in the vertex to start with,
  // an object for visited nodes, and a callback)
  dfRec(vtx, visited = {}, fn) {
    // get a reference to the adjacency list
    const list = this.adjList;

    // base case: if the vertex doesn't exist, return
    if (!list[vtx]) return;

    // add the node to the visited object
    visited[vtx] = true;

    // call the callback on it
    fn(vtx);

    // for each one of its neighbours,
    for (let nVtx of list[vtx]) {
      // if it hasn't been visited,
      if (!visited[nVtx]) {
        // make a recursive call on the neighbour
        // using the visited object in its current form
        // and the originally provided callback
        this.dfRec(nVtx, visited, fn);
      }
    }
  }
}

module.exports = Graph;