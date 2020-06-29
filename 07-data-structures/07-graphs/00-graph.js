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
  // an object for visited vertices, and a callback)
  dfRec(vtx, visited = {}, fn) {
    // get a reference to the adjacency list
    const list = this.adjList;

    // base case: if the vertex doesn't exist, return
    if (!list[vtx]) return;

    // add the vertex to the visited object
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

  // iterative depth-first traversal
  // (takes in the vertex to start with, and a callback)
  dfIter(startVtx, fn) {
    const list = this.adjList;

    if (!list[startVtx]) return false;

    // stack array for vertices and their neighbours
    const s = [],
    // object to keep track of visited vertices
          visited = {};

    // add the first vertex to the stack
    s.push(startVtx);

    // while there's anything in the stack
    while (s.length > 0) {
      // remove the last added vertex from the stack
      const vtx = s.pop();

      // if it's not visited yet
      if (!visited[vtx]) {
        // call the callback
        fn(vtx);

        // mark it visited
        visited[vtx] = true;

        // push all its neighbours in the stack
        for (let nVtx of list[vtx]) {
          s.push(nVtx);
        }
      }
    }
  }

  // breadth-first traversal with a callback.
  // similar to iterative DF traversal, 
  // except we're using a queue instead of a stack,
  // therefore visiting all neighbour vertices
  // at current depth (meaning visiting all immediate
  // neighbours of a vertex before moving on to
  // those vertices' neighbours)
  bfTrav(startVtx, fn) {
    const list = this.adjList;

    if (!list[startVtx]) return false;

    // create the queue array
    const q = [],
          // and the object for visited vertices
          visited = {};
    
    q.push(startVtx);

    while (q.length > 0) {
      // since it's a queue, we remove the first
      // element added
      const vtx = q.shift();

      if (!visited[vtx]) {
        fn(vtx);

        visited[vtx] = true;

        for (let nVtx of list[vtx]) {
          q.push(nVtx);
        }
      }
    }
  }
}

module.exports = Graph;