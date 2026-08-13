const { hasCycle } = require('./solution');

test('three-node cycle returns true', () => {
  const edges = [['a', 'b'], ['b', 'c'], ['c', 'a']];
  expect(hasCycle(edges)).toBe(true);
});

test('diamond DAG returns false', () => {
  const edges = [['a', 'b'], ['a', 'c'], ['b', 'd'], ['c', 'd']];
  expect(hasCycle(edges)).toBe(false);
});

test('self-loop returns true', () => {
  const edges = [['a', 'a']];
  expect(hasCycle(edges)).toBe(true);
});

test('empty edge list returns false', () => {
  expect(hasCycle([])).toBe(false);
});

test('disjoint components where only one has a cycle returns true', () => {
  const edges = [['x', 'y'], ['y', 'z'], ['p', 'q'], ['q', 'p']];
  expect(hasCycle(edges)).toBe(true);
});
