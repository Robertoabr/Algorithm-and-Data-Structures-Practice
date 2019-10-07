/*
You are given an unordered array consisting of consecutive integers  [1, 2, 3, ..., n] without any duplicates. You are allowed to swap any two elements. You need to find the minimum number of swaps required to sort the array in ascending order.

For example, given the array [7,1,3,2,4,5,6] we perform the following steps:

i   arr                     swap (indices)
0   [7, 1, 3, 2, 4, 5, 6]   swap (0,3)
1   [2, 1, 3, 7, 4, 5, 6]   swap (0,1)
2   [1, 2, 3, 7, 4, 5, 6]   swap (3,4)
3   [1, 2, 3, 4, 7, 5, 6]   swap (4,5)
4   [1, 2, 3, 4, 5, 7, 6]   swap (5,6)
5   [1, 2, 3, 4, 5, 6, 7]
It took 5 swaps to sort the array.

Function Description

Complete the function minimumSwaps in the editor below. It must return an integer representing the minimum number of swaps to sort the array.

*/

let input0 = [4, 3, 1, 2]; // expect 3
let input1 = [2, 3, 4, 1, 5]; // expect 3
let input2 = [1, 3, 5, 2, 4, 6, 7]; // expect 3
let input3 = [3, 4, 1, 2, 6, 5]; //expect 3

//UN-OPTIMIZED SOLUTION
function inPlaceSortMinOperationCount(arr) {
  let len = arr.length;
  let min = Math.min(...arr);
  let count = 0;
  // determine which indexes a number should be at
  //check all numbers to see if there is a useful super swap (both go to home)
  // if not swap the first item to its place
  for (let i = 0; i < len - 1; i++) {
    let curEl = arr[i];
    let correctIndex = arr.indexOf(min + i);
    if (i + min === curEl) {
      continue;
    } else {
      arr[i] = i + min;
      arr[correctIndex] = curEl;
      count++;
    }
  }
  return count;
}

console.log(inPlaceSortMinOperationCount(input0), ':expect 3 - [4,3,1,2]');
console.log(
  inPlaceSortMinOperationCount(input1),
  ':expect 3 - [2, 3, 4, 1, 5]'
);
console.log(
  inPlaceSortMinOperationCount(input2),
  ':expect 3 - [1, 3, 5, 2, 4, 6, 7]'
);

console.log(
  inPlaceSortMinOperationCount(input3),
  ':expect 3 - [3, 4, 1, 2, 6, 5]'
);
