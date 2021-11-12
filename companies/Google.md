# Google

## Problem 1

This problem was recently asked by Google.

Given a list of numbers and a number k, return whether any two numbers from the list add up to k.

For example, given [10, 15, 3, 7] and k of 17, return true since 10 + 7 is 17.

Bonus: Can you do this in one pass?

[Solution](https://github.com/Li-Victor/daily-coding-problem/blob/master/solutions/1-10/Problem1.js)

---

## Problem 3

This problem was asked by Google.

Given the root to a binary tree, implement serialize(root), which serializes the tree into a string, and deserialize(s), which deserializes the string back into the tree.

For example, given the following Node class

```javascript
class TreeNode {
  constructor(val, left = null, right = null) {
    this.val = val;
    this.left = left;
    this.right = right;
  }
}
```

The following test should pass:

```javascript
const node = new TreeNode(
  'root',
  new TreeNode('left', new TreeNode('left.left'), new TreeNode('right'))
);
expect(deserialize(serialize(node)).left.left.val).toEqual('left.left'); // Jest Testing
```

[Solution](https://github.com/Li-Victor/daily-coding-problem/blob/master/solutions/1-10/Problem3.js)

---

## Problem 6

This problem was asked by Google.

An XOR linked list is a more memory efficient doubly linked list. Instead of each node holding next and prev fields, it holds a field named both, which is an XOR of the next node and the previous node. Implement an XOR linked list; it has an add(element) which adds the element to the end, and a get(index) which returns the node at index.

If using a language that has no pointers (such as Javascript), you can assume you have access to getPointer and dereferencePointer functions that converts between nodes and memory addresses.

[Solution](https://github.com/Li-Victor/daily-coding-problem/blob/master/solutions/1-10/Problem6.js)

---

## Problem 8

This problem was asked by Google.

A unival tree (which stands for "universal value") is a tree where all nodes under it have the same value.

Given the root to a binary tree, count the number of unival subtrees.

For example, the following tree has 5 unival subtrees:

```
   0
  / \
 1   0
    / \
   1   0
  / \
 1   1
```

[Solution](https://github.com/Li-Victor/daily-coding-problem/blob/master/solutions/1-10/Problem8.js)

---

## Problem 14

This problem was asked by Google.

The area of a circle is defined as πr^2. Estimate π to 3 decimal places using a Monte Carlo method.

Hint: The basic equation of a circle is x^2 + y^2 = r^2.

[Solution](https://github.com/Li-Victor/daily-coding-problem/blob/master/solutions/11-20/Problem14.js)

---

## Problem 17

This problem was asked by Google.

Suppose we represent our file system by a string in the following manner:

The string "dir\n\tsubdir1\n\tsubdir2\n\t\tfile.ext" represents:

```
dir
    subdir1
    subdir2
        file.ext
```

The directory dir contains an empty sub-directory subdir1 and a sub-directory subdir2 containing a file file.ext.

The string "dir\n\tsubdir1\n\t\tfile1.ext\n\t\tsubsubdir1\n\tsubdir2\n\t\tsubsubdir2\n\t\t\tfile2.ext" represents:

```
dir
    subdir1
        file1.ext
        subsubdir1
    subdir2
        subsubdir2
            file2.ext
```

The directory dir contains two sub-directories subdir1 and subdir2. subdir1 contains a file file1.ext and an empty second-level sub-directory subsubdir1. subdir2 contains a second-level sub-directory subsubdir2 containing a file file2.ext.

We are interested in finding the longest (number of characters) absolute path to a file within our file system. For example, in the second example above, the longest absolute path is "dir/subdir2/subsubdir2/file2.ext", and its length is 32 (not including the double quotes).

Given a string representing the file system in the above format, return the length of the longest absolute path to a file in the abstracted file system. If there is no file in the system, return 0.

Note:

The name of a file contains at least a period and an extension.

The name of a directory or sub-directory will not contain a period.


[Solution](https://github.com/Li-Victor/daily-coding-problem/blob/master/solutions/11-20/Problem17.js)

---

## Problem 18

This problem was asked by Google.

Given an array of integers and a number k, where 1 <= k <= length of the array, compute the maximum values of each subarray of length k.

For example, given array = [10, 5, 2, 7, 8, 7] and k = 3, we should get: [10, 7, 8, 8], since:

- 10 = max(10, 5, 2)
- 7 = max(5, 2, 7)
- 8 = max(2, 7, 8)
- 8 = max(7, 8, 7)

Do this in O(n) time and O(k) space. You can modify the input array in-place and you do not need to store the results. You can simply print them out as you compute them.

[Solution](https://github.com/Li-Victor/daily-coding-problem/blob/master/solutions/11-20/Problem18.js)

---

## Problem 20

This problem was asked by Google.

Given two singly linked lists that intersect at some point, find the intersecting node. The lists are non-cyclical.

For example, given A = 3 -> 7 -> 8 -> 10 and B = 99 -> 1 -> 8 -> 10, return the node with value 8.

In this example, assume nodes with the same value are the exact same node objects.

Do this in O(M + N) time (where M and N are the lengths of the lists) and constant space.

[Solution](https://github.com/Li-Victor/daily-coding-problem/blob/master/solutions/11-20/Problem20.js)

---

## Problem 23

This problem was asked by Google.

You are given an M by N matrix consisting of booleans that represents a board. Each True boolean represents a wall. Each False boolean represents a tile you can walk on.

Given this matrix, a start coordinate, and an end coordinate, return the minimum number of steps required to reach the end coordinate from the start. If there is no possible path, then return null. You can move up, left, down, and right. You cannot move through walls. You cannot wrap around the edges of the board.

For example, given the following board:

```
[[0, 0, 0, 0],
[1, 1, 0, 1],
[0, 0, 0, 0],
[0, 0, 0, 0]]
```
and start = (3, 0) (bottom left) and end = (0, 0) (top left), the minimum number of steps required to reach the end is 7, since we would need to go through (1, 2) because there is a wall everywhere else on the second row.

[Solution](https://github.com/Li-Victor/daily-coding-problem/blob/master/solutions/21-30/Problem23.js)

---

## Problem 24

This problem was asked by Google.

Implement locking in a binary tree. A binary tree node can be locked or unlocked only if all of its descendants or ancestors are not locked.

Design a binary tree node class with the following methods:

- is_locked, which returns whether the node is locked
- lock, which attempts to lock the node. If it cannot be locked, then it should return false. Otherwise, it should lock it and return true.
- unlock, which unlocks the node. If it cannot be unlocked, then it should return false. Otherwise, it should unlock it and return true.

You may augment the node to add parent pointers or any other property you would like. You may assume the class is used in a single-threaded program, so there is no need for actual locks or mutexes. Each method should run in O(h), where h is the height of the tree.

[Solution](https://github.com/Li-Victor/daily-coding-problem/blob/master/solutions/21-30/Problem24.js)

---

## Problem 26

This problem was asked by Google.

Given a singly linked list and an integer k, remove the kth last element from the list. k is guaranteed to be smaller than the length of the list.

The list is very long, so making more than one pass is prohibitively expensive.

Do this in constant space and in one pass.

[Solution](https://github.com/Li-Victor/daily-coding-problem/blob/master/solutions/21-30/Problem26.js)

---

## Problem 31

This problem was asked by Google.

The edit distance between two strings refers to the minimum number of character insertions, deletions, and substitutions required to change one string to the other. For example, the edit distance between “kitten” and “sitting” is three: substitute the “k” for “s”, substitute the “e” for “i”, and append a “g”.

Given two strings, compute the edit distance between them.

[Solution](https://github.com/Li-Victor/daily-coding-problem/blob/master/solutions/31-40/Problem31.js)

---

## Problem 35

This problem was asked by Google.

Given an array of strictly the characters 'R', 'G', and 'B', segregate the values of the array so that all the Rs come first, the Gs come second, and the Bs come last. You can only swap elements of the array.

Do this in linear time and in-place.

For example, given the array ['G', 'B', 'R', 'R', 'B', 'R', 'G'], it should become ['R', 'R', 'R', 'G', 'G', 'B', 'B'].

[Solution](https://github.com/Li-Victor/daily-coding-problem/blob/master/solutions/31-40/Problem35.js)

---

## Problem 37

This problem was asked by Google.

The power set of a set is the set of all its subsets. Write a function that, given a set, generates its power set.

For example, given the set {1, 2, 3}, it should return {{}, {1}, {2}, {3}, {1, 2}, {1, 3}, {2, 3}, {1, 2, 3}}.

You may also use a list or array to represent a set.

[Solution](https://github.com/Li-Victor/daily-coding-problem/blob/master/solutions/31-40/Problem37.js)

---

## Problem 40

This problem was asked by Google.

Given an array of integers where every integer occurs three times except for one integer, which only occurs once, find and return the non-duplicated integer.

For example, given [6, 1, 3, 3, 3, 6, 6], return 1. Given [13, 19, 13, 13], return 19.

Do this in O(N) time and O(1) space.

[Solution](https://github.com/Li-Victor/daily-coding-problem/blob/master/solutions/31-40/Problem40.js)

---

## Problem 42

This problem was asked by Google.

Given a list of integers S and a target number k, write a function that returns a subset of S that adds up to k. If such a subset cannot be made, then return null.

Integers can appear more than once in the list. You may assume all numbers in the list are positive.

For example, given S = [12, 1, 61, 5, 9, 2] and k = 24, return [12, 9, 2, 1] since it sums up to 24.

[Solution](https://github.com/Li-Victor/daily-coding-problem/blob/master/solutions/41-50/Problem42.js)

---

## Problem 44

This problem was asked by Google.

We can determine how "out of order" an array A is by counting the number of inversions it has. Two elements A[i] and A[j] form an inversion if A[i] > A[j] but i < j. That is, a smaller element appears after a larger element.

Given an array, count the number of inversions it has. Do this faster than O(N^2) time.

You may assume each element in the array is distinct.

For example, a sorted list has zero inversions. The array [2, 4, 1, 3, 5] has three inversions: (2, 1), (4, 1), and (4, 3). The array [5, 4, 3, 2, 1] has ten inversions: every distinct pair forms an inversion.

[Solution](https://github.com/Li-Victor/daily-coding-problem/blob/master/solutions/41-50/Problem44.js)

---

## Problem 48

This problem was asked by Google.

Given pre-order and in-order traversals of a binary tree, write a function to reconstruct the tree.

For example, given the following preorder traversal:

[a, b, d, e, c, f, g]

And the following inorder traversal:

[d, b, e, a, f, c, g]

You should return the following tree:

```
    a
   / \
  b   c
 / \ / \
d  e f  g
```

[Solution](https://github.com/Li-Victor/daily-coding-problem/blob/master/solutions/41-50/Problem48.js)

---

## Problem 52

This problem was asked by Google.

Implement an LRU (Least Recently Used) cache. It should be able to be initialized with a cache size n, and contain the following methods:

- set(key, value): sets key to value. If there are already n items in the cache and we are adding a new item, then it should also remove the least recently used item.
- get(key): gets the value at key. If no such key exists, return null.

Each operation should run in O(1) time.

[Solution](https://github.com/Li-Victor/daily-coding-problem/blob/master/solutions/51-60/Problem52.js)

---

## Problem 56

This problem was asked by Google.

Given an undirected graph represented as an adjacency matrix and an integer k, write a function to determine whether each vertex in the graph can be colored such that no two adjacent vertices share the same color using at most k colors.

[Solution](https://github.com/Li-Victor/daily-coding-problem/blob/master/solutions/51-60/Problem56.js)

---

## Problem 59

This problem was asked by Google.

Implement a file syncing algorithm for two computers over a low-bandwidth network. What if we know the files in the two computers are mostly the same?

[Solution](https://github.com/Li-Victor/daily-coding-problem/blob/master/solutions/51-60/Problem59.js)

---

## Problem 61

This problem was asked by Google.

Implement integer exponentiation. That is, implement the pow(x, y) function, where x and y are integers and returns x^y.

Do this faster than the naive method of repeated multiplication.

For example, pow(2, 10) should return 1024.

[Solution](https://github.com/Li-Victor/daily-coding-problem/blob/master/solutions/61-70/Problem61.js)

---

## Problem 64

This problem was asked by Google.

A knight's tour is a sequence of moves by a knight on a chessboard such that all squares are visited once.

Given N, write a function to return the number of knight's tours on an N by N chessboard.

[Solution](https://github.com/Li-Victor/daily-coding-problem/blob/master/solutions/61-70/Problem64.js)

---

## Problem 67

This problem was asked by Google.

Implement an LFU (Least Frequently Used) cache. It should be able to be initialized with a cache size n, and contain the following methods:

- set(key, value): sets key to value. If there are already n items in the cache and we are adding a new item, then it should also remove the least frequently used item. If there is a tie, then the least recently used key should be removed.
- get(key): gets the value at key. If no such key exists, return null.

Each operation should run in O(1) time

[Solution](https://github.com/Li-Victor/daily-coding-problem/blob/master/solutions/61-70/Problem67.js)

---

## Problem 68

This problem was asked by Google.

On our special chessboard, two bishops attack each other if they share the same diagonal. This includes bishops that have another bishop located between them, i.e. bishops can attack through pieces.

You are given N bishops, represented as (row, column) tuples on a M by M chessboard. Write a function to count the number of pairs of bishops that attack each other. The ordering of the pair doesn't matter: (1, 2) is considered the same as (2, 1).

For example, given M = 5 and the list of bishops:
```
(0, 0)
(1, 2)
(2, 2)
(4, 0)
```

The board would look like this:

```
[b 0 0 0 0]
[0 0 b 0 0]
[0 0 b 0 0]
[0 0 0 0 0]
[b 0 0 0 0]
```

You should return 2, since bishops 1 and 3 attack each other, as well as bishops 3 and 4.

[Solution](https://github.com/Li-Victor/daily-coding-problem/blob/master/solutions/61-70/Problem68.js)

---

## Problem 72

This problem was asked by Google.

In a directed graph, each node is assigned an uppercase letter. We define a path's value as the number of most frequently-occurring letter along that path. For example, if a path in the graph goes through "ABACA", the value of the path is 3, since there are 3 occurrences of 'A' on the path.

Given a graph with n nodes and m directed edges, return the largest value path of the graph. If the largest value is infinite, then return null.

The graph is represented with a string and an edge list. The i-th character represents the uppercase letter of the i-th node. Each tuple in the edge list (i, j) means there is a directed edge from the i-th node to the j-th node. Self-edges are possible, as well as multi-edges.

For example, the following input graph:

```
ABACA
[(0, 1),
 (0, 2),
 (2, 3),
 (3, 4)]
```

Would have maximum value 3 using the path of vertices [0, 2, 3, 4], (A, A, C, A).

The following input graph:

```
A
[(0, 0)]
```

Should return null, since we have an infinite loop.

[Solution](https://github.com/Li-Victor/daily-coding-problem/blob/master/solutions/71-80/Problem72.js)

---

## Problem 73

This problem was asked by Google.

Given the head of a singly linked list, reverse it in-place.

[Solution](https://github.com/Li-Victor/daily-coding-problem/blob/master/solutions/71-80/Problem73.js)

---

## Problem 76

This problem was asked by Google.

You are given an N by M 2D matrix of lowercase letters. Determine the minimum number of columns that can be removed to ensure that each row is ordered from top to bottom lexicographically. That is, the letter at each column is lexicographically later as you go down each row. It does not matter whether each row itself is ordered lexicographically.

For example, given the following table:
```
cba
daf
ghi
```
This is not ordered because of the a in the center. We can remove the second column to make it ordered:
```
ca
df
gi
```
So your function should return 1, since we only needed to remove 1 column.

As another example, given the following table:
```
abcdef
```
Your function should return 0, since the rows are already ordered (there's only one row).

As another example, given the following table:
```
zyx
wvu
tsr
```
Your function should return 3, since we would need to remove all the columns to order it.

[Solution](https://github.com/Li-Victor/daily-coding-problem/blob/master/solutions/71-80/Problem76.js)

---

## Problem 78

This problem was asked by Google.

Given k sorted singly linked lists, write a function to merge all the lists into one sorted singly linked list.

[Solution](https://github.com/Li-Victor/daily-coding-problem/blob/master/solutions/71-80/Problem78.js)

---

## Problem 80

This problem was asked by Google.

Given the root of a binary tree, return a deepest node. For example, in the following tree, return d.

```
    a
   / \
  b   c
 /
d
```
[Solution](https://github.com/Li-Victor/daily-coding-problem/blob/master/solutions/71-80/Problem80.js)

---

## Problem 83

This problem was asked by Google.

Invert a binary tree.

For example, given the following tree:

```
    a
   / \
  b   c
 / \  /
d   e f
```

should become:

```
  a
 / \
 c  b
 \  / \
  f e  d
```

[Solution](https://github.com/Li-Victor/daily-coding-problem/blob/master/solutions/81-90/Problem83.js)

---

## Problem 86

This problem was asked by Google.

Given a string of parentheses, write a function to compute the minimum number of parentheses to be removed to make the string valid (i.e. each open parenthesis is eventually closed).

For example, given the string "()())()", you should return 1. Given the string ")(", you should return 2, since we must remove all of them.

[Solution](https://github.com/Li-Victor/daily-coding-problem/blob/master/solutions/81-90/Problem86.js)

---

## Problem 90

This question was asked by Google.

Given an integer n and a list of integers l, write a function that randomly generates a number from 0 to n-1 that isn't in l (uniform).

[Solution](https://github.com/Li-Victor/daily-coding-problem/blob/master/solutions/81-90/Problem90.js)

---

## Problem 94

This problem was asked by Google.

Given a binary tree of integers, find the maximum path sum between two nodes. The path must go through at least one node, and does not need to go through the root.

[Solution](https://github.com/Li-Victor/daily-coding-problem/blob/master/solutions/81-90/Problem94.js)

---

## Problem 100

This problem was asked by Google.

You are in an infinite 2D grid where you can move in any of the 8 directions:

```
 (x,y) to
    (x+1, y),
    (x - 1, y),
    (x, y+1),
    (x, y-1),
    (x-1, y-1),
    (x+1,y+1),
    (x-1,y+1),
    (x+1,y-1)
```

You are given a sequence of points and the order in which you need to cover the points. Give the minimum number of steps in which you can achieve it. You start from the first point.

Example:

Input: [(0, 0), (1, 1), (1, 2)]

Output: 2

It takes 1 step to move from (0, 0) to (1, 1). It takes one more step to move from (1, 1) to (1, 2).

[Solution](https://github.com/Li-Victor/daily-coding-problem/blob/master/solutions/91-100/Problem100.js)

---

## Problem 104

This problem was asked by Google.

Determine whether a doubly linked list is a palindrome. What if it’s singly linked?

For example, 1 -> 4 -> 3 -> 4 -> 1 returns true while 1 -> 4 returns false.

[Solution](https://github.com/Li-Victor/daily-coding-problem/blob/master/solutions/101-110/Problem104.js)

---

## Problem 108

This problem was asked by Google.

Given two strings A and B, return whether or not A can be shifted some number of times to get B.

For example, if A is abcde and B is cdeab, return true. If A is abc and B is acb, return false.

[Solution](https://github.com/Li-Victor/daily-coding-problem/blob/master/solutions/101-110/Problem108.js)

---

## Problem 111

This problem was asked by Google.

Given a word W and a string S, find all starting indices in S which are anagrams of W.

For example, given that W is "ab", and S is "abxaba", return 0, 3, and 4.

[Solution](https://github.com/Li-Victor/daily-coding-problem/blob/master/solutions/101-110/Problem111.js)

---