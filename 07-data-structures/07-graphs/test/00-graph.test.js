const assert = require('assert').strict;

const Graph = require('../00-graph');

const testGraph = new Graph();

describe('a graph', () => {
  it('uses an adjacency list via JS object', () => {
    assert.equal('object', typeof testGraph.adjList);
  });

  describe('addVertex', () => {
    it('creates a new vertex entry in the adjacency list', () => {
      testGraph.addVertex('New York');
      testGraph.addVertex('Paris');

      assert.equal(
        true, Object.keys(testGraph.adjList).includes('New York')
      );
    });

    it('creates an array for each entry to store edges', () => {
      assert.equal(0, testGraph.adjList['New York'].length);
    });
  });

  describe('addEdge', () => {
    it('adds a connection between two vertices', () => {
      testGraph.addEdge('New York', 'Paris');

      assert.equal('Paris', testGraph.adjList['New York'][0]);
    });
  });
});