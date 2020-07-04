const { PriorityQueue } = require('../05-heaps/01-priorityQueue');

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
  //   { name: "B", weight: 10 } 
  // ] }
  addEdge(vtx1, vtx2, weight) {
    const list = this.adjList;

    if (!list[vtx1] || !list[vtx2]) return false;

    list[vtx1].push({ name: vtx2, weight });
    list[vtx2].push({ name: vtx1, weight });

    return this;
  }

  // find the shortest path between two vertices
  // using Dijkstra's algorithm
  findShortestPath(fromVtx, toVtx) {
    const list = this.adjList;

    // sanity checks
    if (
      !fromVtx ||
      !toVtx ||
      !list[fromVtx] ||
      !list[toVtx]
    ) return null;

    // this object will store the shortest distance
    // from starting node to all other vertices
    const distances = {},
          // here, for each node in the graph,
          // the previous node on the shortest path
          // from the starting node will be recorded
          // (e.g. for A - C - D, the object will look like
          // { A: null, C: A, D: C }).
          // this is used to track paths and calculate distances
          prevRecord = {},
          // this is a priority queue based on the shortest distance
          // from the starting node
          vtxQueue = new PriorityQueue();

    // this will be filled out after the algorithm runs
    const result = {
      'distance': null,
      // pre-fill the path with the node we're traveling to
      'path': [toVtx]
    };

    // initial setup: for each node in the adjList
    for (let v in list) {
      // if it's the starting node
      if (v === fromVtx) {
        // put it in distances with the value of 0
        // (the distance from starting to starting is always 0)
        distances[v] = 0;
        // put it in the queue with the value of 0
        // so that it's guaranteed to be dequeued first
        // in order to be visited
        vtxQueue.enqueue(v, 0);
      } else {
        // all other nodes get a distance and a priority of infinity
        distances[v] = Infinity;
        vtxQueue.enqueue(v, Infinity);
      }

      // this is populated with null for every single node
      prevRecord[v] = null;
    }

    // the main loop: while there's anything in the priority queue
    while (!vtxQueue.isEmpty()) {
      // visit a node
      const current = vtxQueue.dequeue().val; 

      // if it's the node we're traveling TO, we're done
      if (current === toVtx) break;
      
      // for each of its neighbours,
      for (let item of list[current]) {
        // calculate the distance, which is the distance
        // to the neighbour from the node we're visiting,
        // plus the distance to the node we're visiting
        // on the shortest path from the starting node
        // (which is relevant as long as we're not visiting
        // the starting node)
        let distance = item['weight'] + distances[current];
        
        // if the distance is less than what's recorded
        // in the distances object (remember that everything
        // starts out with infinity),
        if (distance < distances[item['name']]) {
          // update the distance to that neighbour
          // from the starting node
          distances[item['name']] = distance;
          // record the previous node on the shortest path
          // to the neighbour we're looking at 
          prevRecord[item['name']] = current;
          // add it to the queue with calculated distance
          vtxQueue.enqueue(item['name'], distance);
        }
      }
    }

    // once the loop is complete, 
    // put together the result object.
    // the distance will be stored in the 
    // distances object under the vertex we're
    // traveling to
    result['distance'] = distances[toVtx];

    // grab its previous vertex from the record
    let prev = prevRecord[toVtx];

    // trace it back to the starting node
    // and fill out the path
    while (prev) {
      result['path'].unshift(prev);
      prev = prevRecord[prev];
    }

    // feel pretty friggin good about yourself :-]
    return result;
  }
}

module.exports = WeightedGraph;