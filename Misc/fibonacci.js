/*
The Fibonacci numbers, commonly denoted F(n) form a sequence, called the Fibonacci sequence, such that each number is the sum of the two preceding ones, starting from 0 and 1. That is,

F(0) = 0,   F(1) = 1
F(N) = F(N - 1) + F(N - 2), for N > 1.
Given N, calculate F(N).

Example 1:

Input: 2
Output: 1
Explanation: F(2) = F(1) + F(0) = 1 + 0 = 1.
Example 2:

Input: 3
Output: 2
Explanation: F(3) = F(2) + F(1) = 1 + 1 = 2.
*/

//slowest solution big O(2^N) Exponential Time
let fib = function(N) {
  if (N === 1 || N === 0) {
    return N;
  }

  N = fib(N - 1) + fib(N - 2);

  return N;
};

console.log('fib of 3 expect 2=', fib(3));
console.log('fib of 4 expect 3=', fib(4));
console.log('fib of 5 expect 5=', fib(5));
console.log('fib of 6 expect 8=', fib(6));
