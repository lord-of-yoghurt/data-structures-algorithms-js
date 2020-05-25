const assert = require('assert').strict;

const { Node, DoublyLinkedList } = require('../00-dll');

const testNode = new Node('apples'),
      testList = new DoublyLinkedList(),
      emptyList = new DoublyLinkedList();

describe('a node', () => {
  it('stores a value', () => {
    assert.equal('apples', testNode.data);
  });

  it('points to the next node', () => {
    assert.equal(null, testNode.next);
  });

  it('points to the previous node', () => {
    assert.equal(null, testNode.prev);
  });
});

describe('a doubly linked list', () => {
  it('knows its head node', () => {
    assert.equal(null, testList.head);
  });

  it('knows its tail node', () => {
    assert.equal(null, testList.tail);
  });

  it('has a length', () => {
    assert.equal(0, testList.length);
  });

  describe('push', () => {
    it('handles an empty list', () => {
      testList.push('apples');

      assert.equal('apples', testList.head.data);
      assert.equal('apples', testList.tail.data);
    });

    it('adds a new node to the end of a list', () => {
      testList.push('oranges');

      assert.equal('apples', testList.head.data);
      assert.equal('oranges', testList.tail.data);
    });

    it('increments the length of the list', () => {
      assert.equal(2, testList.length);

      testList.push('onions');

      assert.equal(3, testList.length);
    });
  });

  describe('pop', () => {
    it('removes a node from the end of the list', () => {
      testList.pop();

      assert.equal('oranges', testList.tail.data);
    });

    it('ensures the tail node still points to null', () => {
      assert.equal(null, testList.tail.next);
    });

    it('decrements the list length', () => {
      assert.equal(2, testList.length);
    });

    it('handles an empty list', () => {
      assert.equal(undefined, emptyList.pop());
    });

    it('handles a list with one element', () => {
      emptyList.push('remove this!');
      emptyList.pop();

      assert.equal(null, emptyList.head);
      assert.equal(null, emptyList.tail);
    });
  });

  describe('unshift', () => {
    it('handles an empty list', () => {
      emptyList.unshift('peppers');

      assert.equal('peppers', emptyList.head.data);
      assert.equal('peppers', emptyList.tail.data);
    });

    it('adds a node to the beginning of the list', () => {
      testList.unshift('bananas');

      assert.equal('bananas', testList.head.data);
    });

    it('increments the length of the list', () => {
      assert.equal(3, testList.length);
    });
  });

  describe('shift', () => {
    it('removes a node from the beginning of the list', () => {
      testList.shift();

      assert.equal('apples', testList.head.data);
    });

    it('ensures the head node\'s previous is null', () => {
      assert.equal(null, testList.head.prev);
    });

    it('decrements the length of the list', () => {
      assert.equal(2, testList.length);
    });

    it('handles a list with one item', () => {
      emptyList.shift();

      assert.equal(null, emptyList.head);
      assert.equal(null, emptyList.tail);
    });

    it('handles an empty list', () => {
      assert.equal(undefined, emptyList.shift());
    });
  });

  describe('get', () => {
    it('takes an index and returns a node at that index', () => {
      testList.push('mangos').push('peaches').push('strawberries');

      assert.equal('peaches', testList.get(3).data);
    });

    it('handles out-of-bound indices', () => {
      assert.equal(undefined, testList.get(5));
    });
  });

  describe('set', () => {
    it('updates the value of a node at a certain index', () => {
      testList.set(2, 'watermelons');

      assert.equal('watermelons', testList.get(2).data);
    });

    it('handles out-of-bound indices', () => {
      assert.equal(undefined, testList.set(10, 'turnips'));
    });
  });

  describe('insert', () => {
    it('adds a node at a given position', () => {
      testList.insert(2, 'mangos');

      assert.equal('mangos', testList.get(2).data);
    });

    it('ensures the new node is properly connected', () => {
      let node = testList.get(2);

      assert.equal('oranges', node.prev.data);
      assert.equal('watermelons', node.next.data);
    });

    it('updates the length of the list', () => {
      assert.equal(6, testList.length);
    });

    it('handles out-of-bound indices', () => {
      testList.insert(6, 'grapes');

      assert.equal('grapes', testList.tail.data);
    });
  });

  describe('remove', () => {
    it('deletes a node from a given position', () => {
      testList.remove(3);

      assert.equal('peaches', testList.get(3).data);
    });

    it('preserves the connections after removal', () => {
      assert.equal('peaches', testList.get(2).next.data);
      assert.equal('mangos', testList.get(3).prev.data);
    });

    it('updates the length of the list', () => {
      assert.equal(6, testList.length);
    });

    it('handles out-of-bound indices', () => {
      assert.equal(undefined, testList.remove(10));
    });
  });

  // before reversal
  // (apples) ⇌ (oranges) ⇌ (mangos) ⇌ (peaches) ⇌ (strawberries) ⇌ (grapes)
  describe('reverse', () => {
    it('reverses the order of the list', () => {
      testList.reverse();

      assert.equal('grapes', testList.head.data);
      assert.equal('apples', testList.tail.data);
      assert.equal('peaches', testList.get(2).data);
    });
  });

  describe('reverse (recursive)', () => {
    it('reverses the order of the list', () => {
      testList.reverseRec();

      assert.equal('apples', testList.head.data);
      assert.equal('grapes', testList.tail.data);
      assert.equal('strawberries', testList.get(4).data);
    });
  });
});