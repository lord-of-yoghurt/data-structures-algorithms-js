const assert = require('assert').strict;

const Graph = require('../00-graph');
const { isMainThread } = require('worker_threads');

const testGraph = new Graph();

describe('graph traversals', () => {
  before(() => {
    testGraph
      .addVertex("A")
      .addVertex("B")
      .addVertex("C")
      .addVertex("D")
      .addVertex("E")
      .addVertex("F");

    testGraph
      .addEdge("A", "B")
      .addEdge("A", "C")
      .addEdge("B", "D")
      .addEdge("C", "E")
      .addEdge("D", "E")
      .addEdge("D", "F")
      .addEdge("E", "F");
  });

  describe('depth-first traversal (recursive)', () => {
    it('visits every node in DF fashion, recursively', () => {
      const graphArr = [];

      testGraph.dfRec("A", {}, vtx => graphArr.push(vtx));

      assert.deepStrictEqual(
        ["A", "B", "D", "E", "C", "F"],
        graphArr
      );
    });
  });

  // this will be different because of the helper stack
  describe('depth-first traversal (iterative)', () => {
    it('visits every node in DF fashion, iteratively', () => {
      const graphArr = [];

      testGraph.dfIter("A", vtx => graphArr.push(vtx));

      assert.deepStrictEqual(
        ["A", "C", "E", "F", "D", "B"],
        graphArr
      );
    });
  });

  describe('breadth-first traversal', () => {
    it('visits every node in BF fashion', () => {
      const graphArr = [];

      testGraph.bfTrav("A", vtx => graphArr.push(vtx));

      assert.deepStrictEqual(
        ["A", "B", "C", "D", "E", "F"],
        graphArr
      );
    });
  });
});