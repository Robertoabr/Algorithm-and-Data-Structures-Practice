/*
Find a duplicate, Space Edition™.

We have an array of integers, where:

The integers are in the range 1..n1..n
The array has a length of n+1n+1
It follows that our array has at least one integer which appears at least twice. But it may have several duplicates, and each duplicate may appear more than twice.

Write a function which finds an integer that appears more than once in our array. (If there are multiple duplicates, you only need to find one of them.)

We're going to run this function on our new, super-hip MacBook Pro With Retina Display™. Thing is, the damn thing came with the RAM soldered right to the motherboard, so we can't upgrade our RAM. So we need to optimize for space!
*/

//key here is that these arrays contain all numbers in the given range 1 to N

let test1 = [1, 2, 3, 3];
let test2 = [1, 2, 2, 3];

function findDups(arr) {
  //return a duplicate
  let memo = {};

  for (let i = 0; i < arr.length; i++) {
    if (memo[arr[i]] === true) {
      return arr[i];
    } else {
      memo[arr[i]] = true;
    }
  }
  return false;
  // optimize for space-  this is O(n) space 0(n) time
}

console.log('1233', findDups(test1));
console.log('1223', findDups(test2));

function findDupsLessSpace(numbers) {
  let floor = 1;
  let ceiling = numbers.length - 1;

  while (floor < ceiling) {
    // Divide our range 1..n into an upper range and lower range
    // (such that they don't overlap)
    // lower range is floor..midpoint
    // upper range is midpoint+1..ceiling
    const midpoint = Math.floor(floor + (ceiling - floor) / 2);
    const lowerRangeFloor = floor;
    const lowerRangeCeiling = midpoint;
    const upperRangeFloor = midpoint + 1;
    const upperRangeCeiling = ceiling;

    const distinctPossibleIntegersInLowerRange =
      lowerRangeCeiling - lowerRangeFloor + 1;

    // Count number of items in lower range
    let itemsInLowerRange = 0;
    numbers.forEach(item => {
      // Is it in the lower range?
      if (item >= lowerRangeFloor && item <= lowerRangeCeiling) {
        itemsInLowerRange += 1;
      }
    });

    if (itemsInLowerRange > distinctPossibleIntegersInLowerRange) {
      // There must be a duplicate in the lower range
      // so use the same approach iteratively on that range
      floor = lowerRangeFloor;
      ceiling = lowerRangeCeiling;
    } else {
      // There must be a duplicate in the upper range
      // so use the same approach iteratively on that range
      floor = upperRangeFloor;
      ceiling = upperRangeCeiling;
    }
  }

  // Floor and ceiling have converged
  // We found a number that repeats!
  return floor;

  // optimize for space-  this uses binary search is O(1) space 0(nlogn) time
}

console.log('1233 less space', findDupsLessSpace(test1));
console.log('1223 less space', findDupsLessSpace(test2));
