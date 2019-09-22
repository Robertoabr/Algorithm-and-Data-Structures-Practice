/*
Given an array A of integers, return true if and only if we can partition the array into three non-empty parts with equal sums.

Formally, we can partition the array if we can find indexes i+1 < j with (A[0] + A[1] + ... + A[i] == A[i+1] + A[i+2] + ... + A[j-1] == A[j] + A[j-1] + ... + A[A.length - 1])

Example 1:

Input: [0,2,1,-6,6,-7,9,1,2,0,1]
Output: true
Explanation: 0 + 2 + 1 = -6 + 6 - 7 + 9 + 1 = 2 + 0 + 1
Example 2:

Input: [0,2,1,-6,6,7,9,-1,2,0,1]
Output: false
Example 3:

Input: [3,3,6,5,-2,2,5,1,-9,4]
Output: true
Explanation: 3 + 3 = 6 = 5 - 2 + 2 + 5 + 1 - 9 + 4

*/

var canThreePartsEqualSum = function(A) {
  let oneThird = A.reduce((a, b) => a + b, 0) / 3;
  let total = 0;
  let indexArr = [];
  for (let i = 0; i < A.length; i++) {
    let cNum = A[i];
    total += cNum;
    if (total === oneThird) {
      indexArr.push(i);
      total = 0;
    }
  }
  return indexArr.length === 3;
};

console.log(
  '[0,2,1,-6,6,-7,9,1,2,0,1] true:',
  canThreePartsEqualSum([0, 2, 1, -6, 6, -7, 9, 1, 2, 0, 1])
);

console.log('[3,3,3,9,9] true:', canThreePartsEqualSum([3, 3, 3, 9, 9]));
console.log('[3,2,2,9,9] false:', canThreePartsEqualSum([3, 2, 2, 9, 9]));
