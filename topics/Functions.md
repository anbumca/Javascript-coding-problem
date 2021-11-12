# Functions

## Problem 5

This problem was asked by Jane Street.

cons(a, b) constructs a pair, and car(pair) and cdr(pair) returns the first and last element of that pair.
For example, car(cons(3, 4)) returns 3, and cdr(cons(3, 4)) returns 4.

Given this implementation of cons:

```javascript
function cons(a, b) {
  function pair(cb) {
    return cb(a, b);
  }
  return pair;
}
```

Implement car and cdr.

[Solution](https://github.com/anbumca/Javascript-coding-problem/blob/master/solutions/1-10/Problem5.js)

---

## Problem 10

This problem was asked by Apple.

Implement a job scheduler which takes in a function f and an integer n, and calls f after n milliseconds.

[Solution](https://github.com/anbumca/Javascript-coding-problem/blob/master/solutions/1-10/Problem10.js)

---

## Problem 105

This problem was asked by Facebook.

Given a function f, and N return a debounced f of N milliseconds.

That is, as long as the debounced f continues to be invoked, f itself will not be called for N milliseconds.

[Solution](https://github.com/anbumca/Javascript-coding-problem/blob/master/solutions/101-110/Problem105.js)

---