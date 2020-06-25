const assert = require('assert').strict;

const Graph = require('../00-graph');

const testGraph = new Graph();

describe('a graph', () => {
  it('uses an adjacency list via JS object', () => {
    assert.equal('object', typeof testGraph.adjList);
  });
});