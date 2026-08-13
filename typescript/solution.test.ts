import { hasCycle } from './solution';

test('three-node cycle returns true', () => {
  const edges: [string, string][] = [['a', 'b'], ['b', 'c'], ['c', 'a']];
  expect(hasCycle(edges)).toBe(true);
});

test('diamond DAG returns false', () => {
  const edges: [string, string][] = [['a', 'b'], ['a', 'c'], ['b', 'd'], ['c', 'd']];
  expect(hasCycle(edges)).toBe(false);
});

test('self-loop returns true', () => {
  const edges: [string, string][] = [['a', 'a']];
  expect(hasCycle(edges)).toBe(true);
});

test('empty edge list returns false', () => {
  expect(hasCycle([])).toBe(false);
});

test('disjoint components where only one has a cycle returns true', () => {
  const edges: [string, string][] = [['x', 'y'], ['y', 'z'], ['p', 'q'], ['q', 'p']];
  expect(hasCycle(edges)).toBe(true);
});
