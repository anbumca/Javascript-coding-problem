# Microsoft

## Problem 22

This problem was asked by Microsoft.

Given a dictionary of words and a string made up of those words (no spaces), return the original sentence in a list. If there is more than one possible reconstruction, return any of them. If there is no possible reconstruction, then return null.

For example, given the set of words 'quick', 'brown', 'the', 'fox', and the string "thequickbrownfox", you should return ['the', 'quick', 'brown', 'fox'].

Given the set of words 'bed', 'bath', 'bedbath', 'and', 'beyond', and the string "bedbathandbeyond", return either ['bed', 'bath', 'and', 'beyond] or ['bedbath', 'and', 'beyond'].

[Solution](https://github.com/Li-Victor/daily-coding-problem/blob/master/solutions/21-30/Problem22.js)

---

## Problem 33

This problem was asked by Microsoft.

Compute the running median of a sequence of numbers. That is, given a stream of numbers, print out the median of the list so far on each new element.

Recall that the median of an even-numbered list is the average of the two middle numbers.

For example, given the sequence [2, 1, 5, 7, 2, 0, 5], your algorithm should print out:

- 2
- 1.5
- 2
- 3.5
- 2
- 2
- 2

[Solution](https://github.com/Li-Victor/daily-coding-problem/blob/master/solutions/31-40/Problem33.js)

---

## Problem 38

This problem was asked by Microsoft.

You have an N by N board. Write a function that, given N, returns the number of possible arrangements of the board where N queens can be placed on the board without threatening each other, i.e. no two queens share the same row, column, or diagonal.

[Solution](https://github.com/Li-Victor/daily-coding-problem/blob/master/solutions/31-40/Problem38.js)

---

## Problem 50

This problem was asked by Microsoft.

Suppose an arithmetic expression is given as a binary tree. Each leaf is an integer and each internal node is one of '+', '−', '∗', or '/'.

Given the root to such a tree, write a function to evaluate it.

For example, given the following tree:

```
    *
   / \
  +   +
 / \ / \
3  2 4  5
```

You should return 45, as it is (3 + 2) * (4 + 5).

[Solution](https://github.com/Li-Victor/daily-coding-problem/blob/master/solutions/41-50/Problem50.js)

---

## Problem 55

This problem was asked by Microsoft.

Implement a URL shortener with the following methods:

- shorten(url), which shortens the url into a six-character alphanumeric string, such as zLg6wl.
- restore(short), which expands the shortened string into the original url. If no such shortened string exists, return null.

Hint: What if we enter the same URL twice?

[Solution](https://github.com/Li-Victor/daily-coding-problem/blob/master/solutions/51-60/Problem55.js)

---

## Problem 63

This problem was asked by Microsoft.

Given a 2D matrix of characters and a target word, write a function that returns whether the word can be found in the matrix by going left-to-right, or up-to-down.

For example, given the following matrix:

```
[['F', 'A', 'C', 'I'],
 ['O', 'B', 'Q', 'P'],
 ['A', 'N', 'O', 'B'],
 ['M', 'A', 'S', 'S']]
```

and the target word 'FOAM', you should return true, since it's the leftmost column. Similarly, given the target word 'MASS', you should return true, since it's the last row.

[Solution](https://github.com/Li-Victor/daily-coding-problem/blob/master/solutions/61-70/Problem63.js)

---

## Problem 70

This problem was asked by Microsoft.

A number is considered perfect if its digits sum up to exactly 10.

Given a positive integer n, return the n-th perfect number.

For example, given 1, you should return 19. Given 2, you should return 28.

[Solution](https://github.com/Li-Victor/daily-coding-problem/blob/master/solutions/61-70/Problem70.js)

---

## Problem 75

This problem was asked by Microsoft.

Given an array of numbers, find the length of the longest increasing subsequence in the array. The subsequence does not necessarily have to be contiguous.

For example, given the array [0, 8, 4, 12, 2, 10, 6, 14, 1, 9, 5, 13, 3, 11, 7, 15], the longest increasing subsequence has length 6: it is 0, 2, 6, 9, 11, 15.

[Solution](https://github.com/Li-Victor/daily-coding-problem/blob/master/solutions/71-80/Problem75.js)

---

## Problem 82

This problem was asked Microsoft.

Using a read7() method that returns 7 characters from a file, implement readN(n) which reads n characters.

For example, given a file with the content “Hello world”, three read7() returns “Hello w”, “orld” and then “”.

[Solution](https://github.com/Li-Victor/daily-coding-problem/blob/master/solutions/81-90/Problem82.js)

---

## Problem 96

This problem was asked by Microsoft.

Given a number in the form of a list of digits, return all possible permutations.

For example, given [1,2,3], return [[1,2,3],[1,3,2],[2,1,3],[2,3,1],[3,1,2],[3,2,1]].

[Solution](https://github.com/Li-Victor/daily-coding-problem/blob/master/solutions/81-90/Problem96.js)

---

## Problem 99

This problem was asked by Microsoft.

Given an unsorted array of integers, find the length of the longest consecutive elements sequence.

For example, given [100, 4, 200, 1, 3, 2], the longest consecutive element sequence is [1, 2, 3, 4]. Return its length: 4.

Your algorithm should run in O(n) complexity.

[Solution](https://github.com/Li-Victor/daily-coding-problem/blob/master/solutions/91-100/Problem99.js)

---

## Problem 107

This problem was asked by Microsoft.

Print the nodes in a binary tree level-wise. For example, the following should print 1, 2, 3, 4, 5.

```
  1
 / \
2   3
   / \
  4   5
```

[Solution](https://github.com/Li-Victor/daily-coding-problem/blob/master/solutions/101-110/Problem107.js)

---