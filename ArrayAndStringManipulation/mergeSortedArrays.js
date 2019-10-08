/*
In order to win the prize for most cookies sold, my friend Alice and I are going to merge our Girl Scout Cookies orders and enter as one unit.

Each order is represented by an "order id" (an integer).

We have our lists of orders sorted numerically already, in arrays. Write a function to merge our arrays of orders into one sorted array.

For example:
*/
const myArray = [3, 4, 6, 10, 11, 19];
const alicesArray = [1, 5, 8, 12, 14, 15];
const myArray2 = [3, 4, 6, 10, 11, 15];
const alicesArray2 = [1, 5, 8, 12, 14, 19];

console.log(
  'expect [1, 3, 4, 5, 6, 8, 10, 11, 12, 14, 15, 19]:',
  mergeArrays(myArray, alicesArray)
);

console.log(
  'swapped last items - expect [1, 3, 4, 5, 6, 8, 10, 11, 12, 14, 15, 19]:',
  mergeArrays(myArray2, alicesArray2)
);

function mergeArrays(arr1, arr2) {
  let outArr = [];

  while (arr1.length || arr2.length) {
    if (arr1.length && (arr2.length === 0 || arr1[0] < arr2[0])) {
      outArr.push(arr1.shift());
    } else {
      outArr.push(arr2.shift());
    }
  }
  return outArr;
}

/*
But careful: we need to account for the case where we exhaust one of our arrays and there are still elements in the other. To handle this, we say that the current item in arr1 is the next item to add to mergedArray only if arr1 is not exhausted AND, either:
-arr2 is exhausted, or
-the current item in arr1 is less than the current item in arr2

The if statement is carefully constructed to avoid indexing past the end of an array, because JavaScript would give us undefined and we don't want to compare undefined with an integer. We take advantage of JavaScript's short circuit evaluation, and check first if the arrays are exhausted.


O(n) time and O(n) additional space, where n is the number of items in the merged array.

We spent a lot of time figuring out how to cleanly handle edge cases.Sometimes it's easy to lose steam at the end of a coding interview when you're debugging. But keep sprinting through to the finish! Think about edge cases. Look for off-by-one errors.
*/
