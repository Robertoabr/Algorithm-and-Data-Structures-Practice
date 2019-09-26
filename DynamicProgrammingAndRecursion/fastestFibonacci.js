/*
Write a function fib() that takes an integer n and returns the nth Fibonacci  number. But in must be in O(n) time.

Let's say our Fibonacci series is 0-indexed and starts with 0. So:
  fib(0);  // => 0
fib(1);  // => 1
fib(2);  // => 1
fib(3);  // => 2
fib(4);  // => 3


Hint recursion is exponential time , and rec+memoization is a bit slower than what we are looking for
*/

function fastestFib(n) {
  if (n === 0 || n === 1) {
    return n;
  }
  //build up the solution from the bottom (dynamic programming)
  let prevPrev = 0;
  let prev = 1;
  let cResult;

  for (let i = 2; i <= n; i++) {
    cResult = prev + prevPrev;
    prevPrev = prev;
    prev = cResult;
  }

  return cResult;
}

console.log('fFib of 3 expect 2=', fastestFib(3));
console.log('fFib of 4 expect 3=', fastestFib(4));
console.log('fFib of 5 expect 5=', fastestFib(5));
console.log('fFib of 6 expect 8=', fastestFib(6));
console.log('fFib of 7 expect 13=', fastestFib(7));
