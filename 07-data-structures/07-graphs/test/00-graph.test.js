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
      testGraph.addVertex('Moscow');
      testGraph.addVertex('Shanghai');

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
      testGraph.addEdge('New York', 'Shanghai');
      testGraph.addEdge('Moscow', 'Paris');

      assert.equal('Paris', testGraph.adjList['New York'][0]);
    });
  });

  describe('removeEdge', () => {
    it('removes a connection between two vertices', () => {
      testGraph.removeEdge('New York', 'Paris');

      assert.equal(-1, testGraph.adjList['New York'].indexOf('Paris'));
      assert.equal(-1, testGraph.adjList['Paris'].indexOf('New York'));
    });
  });
});