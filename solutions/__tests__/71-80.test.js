import LinkedListNode from '../Data-Structures/LinkedListNode';
import TreeNode from '../Data-Structures/TreeNode';

import largestPathValue from '../71-80/Problem72';
import reverseLinkedList from '../71-80/Problem73';
import multiplicationTable from '../71-80/Problem74';
import longestIncreasingSubsequence from '../71-80/Problem75';
import colRemoved from '../71-80/Problem76';
import mergeIntervals from '../71-80/Problem77';
import mergeKLists from '../71-80/Problem78';
import nonDecreasing from '../71-80/Problem79';
import deepestNode from '../71-80/Problem80';

describe('Problems 71 - 80', () => {
  test('Problem 72 Largest Path Value in a Graph', () => {
    expect(largestPathValue('ABACA', [[0, 1], [0, 2], [2, 3], [3, 4]])).toBe(3);
    expect(largestPathValue('A', [[0, 0]])).toBeNull();

    expect(
      largestPathValue('AAAAAA', [
        [0, 3],
        [0, 5],
        [0, 4],
        [0, 2],
        [1, 0],
        [1, 4],
        [2, 3],
        [2, 5],
        [4, 2],
        [3, 5]
      ])
    ).toBe(6);

    expect(
      largestPathValue('AAAABB', [
        [0, 3],
        [0, 5],
        [0, 4],
        [0, 2],
        [1, 0],
        [1, 4],
        [2, 3],
        [2, 5],
        [4, 2],
        [3, 5]
      ])
    ).toBe(4);
  });

  test('Problem 73 Reverse Linked List', () => {
    const head = new LinkedListNode(1);
    head.next = new LinkedListNode(2);
    head.next.next = new LinkedListNode(3);
    head.next.next.next = new LinkedListNode(4);
    head.next.next.next.next = new LinkedListNode(5);

    const reversedHead = new LinkedListNode(5);
    reversedHead.next = new LinkedListNode(4);
    reversedHead.next.next = new LinkedListNode(3);
    reversedHead.next.next.next = new LinkedListNode(2);
    reversedHead.next.next.next.next = new LinkedListNode(1);

    expect(reverseLinkedList(head)).toEqual(reversedHead);
  });

  test('Problem 74 Multiplication Table', () => {
    expect(multiplicationTable(6, 12)).toBe(4);
    expect(multiplicationTable(3, 9)).toBe(1);
    expect(multiplicationTable(3, 6)).toBe(2);
    expect(multiplicationTable(3, 1)).toBe(1);
  });

  test('Problem 75 Longest Increasing Subsequence', () => {
    expect(
      longestIncreasingSubsequence([
        0,
        8,
        4,
        12,
        2,
        10,
        6,
        14,
        1,
        9,
        5,
        13,
        3,
        11,
        7,
        15
      ])
    ).toBe(6);
    expect(longestIncreasingSubsequence([10, 9, 2, 5, 3, 7, 101, 18])).toBe(4);
    expect(longestIncreasingSubsequence([1, 3, 6, 7, 9, 4, 10, 5, 6])).toBe(6);
  });

  test('Problem 76 Columns Removed To Make Rows Ordered Lexicographically ', () => {
    expect(
      colRemoved([['c', 'b', 'a'], ['d', 'a', 'f'], ['g', 'h', 'i']])
    ).toBe(1);

    expect(colRemoved([['c', 'a'], ['d', 'f'], ['g', 'i']])).toBe(0);

    expect(colRemoved([['a', 'b', 'c', 'd', 'e', 'f']])).toBe(0);
  });

  expect(colRemoved([['z', 'y', 'x'], ['w', 'v', 'u'], ['t', 's', 'r']])).toBe(
    3
  );

  test('Problem 77 Merge Intervals', () => {
    expect(mergeIntervals([[1, 3], [5, 8], [4, 10], [20, 25]])).toEqual([
      [1, 3],
      [4, 10],
      [20, 25]
    ]);

    expect(mergeIntervals([[1, 3], [2, 6], [8, 10], [15, 18]])).toEqual([
      [1, 6],
      [8, 10],
      [15, 18]
    ]);

    expect(mergeIntervals([[1, 4], [4, 5]])).toEqual([[1, 5]]);

    expect(mergeIntervals([[2, 3], [4, 5], [6, 7], [8, 9], [1, 10]])).toEqual([
      [1, 10]
    ]);
  });

  test('Problem 78 Merge k Sorted Lists', () => {
    const list1 = new LinkedListNode(1);
    list1.next = new LinkedListNode(4);
    list1.next.next = new LinkedListNode(5);

    const list2 = new LinkedListNode(1);
    list2.next = new LinkedListNode(3);
    list2.next.next = new LinkedListNode(4);

    const list3 = new LinkedListNode(2);
    list3.next = new LinkedListNode(6);

    const expectedResult = new LinkedListNode(1);
    expectedResult.next = new LinkedListNode(1);
    expectedResult.next.next = new LinkedListNode(2);
    expectedResult.next.next.next = new LinkedListNode(3);
    expectedResult.next.next.next.next = new LinkedListNode(4);
    expectedResult.next.next.next.next.next = new LinkedListNode(4);
    expectedResult.next.next.next.next.next.next = new LinkedListNode(5);
    expectedResult.next.next.next.next.next.next.next = new LinkedListNode(6);

    expect(mergeKLists([list1, list2, list3])).toEqual(expectedResult);
  });

  test('Problem 79 Non Decreasing Array', () => {
    expect(nonDecreasing([10, 5, 7])).toBe(true);
    expect(nonDecreasing([10, 5, 1])).toBe(false);
    expect(nonDecreasing([4, 2, 3])).toBe(true);
    expect(nonDecreasing([4, 2, 1])).toBe(false);
    expect(nonDecreasing([1, 1, 1])).toBe(true);
    expect(nonDecreasing([3, 4, 2, 3])).toBe(false);
    expect(nonDecreasing([2, 3, 3, 2, 4])).toBe(true);
    expect(nonDecreasing([5, 5, 3, 4])).toBe(false);
    expect(nonDecreasing([-1, 4, 2, 3])).toBe(true);
  });

  test('Problem 80 Return the deepest node of the tree', () => {
    const a = new TreeNode('a');
    const b = new TreeNode('b');
    const c = new TreeNode('c');
    const d = new TreeNode('d');
    a.left = b;
    a.right = c;
    b.left = d;

    expect(deepestNode(a)).toEqual(d);
    const e = new TreeNode('e');
    const f = new TreeNode('f');

    c.right = e;
    e.right = f;
    expect(deepestNode(a)).toEqual(f);
  });
});
