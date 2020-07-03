const assert = require('assert').strict;

const WeightedGraph = require('../01-weightedGraph');

const testGraph = new WeightedGraph;

describe('a weighted graph', () => {
  before(() => {
    testGraph
      .addVertex('A')
      .addVertex('B')
      .addVertex('C')
      .addVertex('D')
      .addVertex('E')
      .addVertex('F')
      .addVertex('G');

    testGraph
      .addEdge('A', 'B', 6)
      .addEdge('A', 'C', 10)
      .addEdge('B', 'C', 7)
      .addEdge('B', 'D', 8)
      .addEdge('C', 'D', 4)
      .addEdge('C', 'E', 3)
      .addEdge('C', 'F', 7)
      .addEdge('C', 'G', 22)
      .addEdge('D', 'E', 6)
      .addEdge('E', 'F', 5)
      .addEdge('F', 'G', 4);
  });

  it('stores a weight for each edge', () => {
    assert.equal(
      10,
      testGraph.adjList['C'][0]['weight']
    );
  });

  describe('findShortestPath', () => {
    it('calculates the shortest path between two nodes', () => {
      const pathData = testGraph.findShortestPath('A', 'G');

      assert.equal(21, pathData.distance);
      assert.deepStrictEqual(['A', 'C', 'F', 'G'], pathData.path);
    });
  });
});