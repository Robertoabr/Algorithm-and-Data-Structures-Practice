/*
Create a function to compute the nth Fibonacci number.Do fibonacci recursively with memoization for efficiency:

Example FibSeq = [0, 1, 1, 2, 3, 5, 8, 13...];

Memoization ensures that a function doesn't run for the same inputs more than once by keeping a record of the results for the given inputs (usually in an object).
*/

//I used a global object as the memo, but I could have made a class here with a memo property and an nthFib method (there is a second example with this)
let memo = {};

function nthFib(n) {
  if (n === 0 || n === 1) {
    return n;
  }

  // check if answer is in Memo if so return it
  if (memo[n]) {
    return memo[n];
  } else {
    //if not , enter the answer it into memo before returning it
    const result = nthFib(n - 1) + nthFib(n - 2);
    memo[n] = result;

    return result;
  }
}

console.log('expect 8:', nthFib(6));
console.log('expect 5:', nthFib(5));

//here is the class approach, linking a single memo to all the function calls via a class:
class Fibber {
  constructor() {
    this.memo = {};
  }

  fib(n) {
    if (n < 0) {
      throw new Error(
        'Index was negative. No such thing as a negative index in a series.'
      );

      // Base cases
    } else if (n === 0 || n === 1) {
      return n;
    }

    // See if we've already calculated this
    if (this.memo.hasOwnProperty(n)) {
      console.log(`grabbing memo[${n}]`);
      return this.memo[n];
    }

    console.log(`computing fib(${n})`);
    const result = this.fib(n - 1) + this.fib(n - 2);

    // Memoize
    this.memo[n] = result;

    return result;
  }
}

console.log('C expect 8:', new Fibber().fib(6));
console.log('C expect 5:', new Fibber().fib(5));
