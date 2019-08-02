/*
You have an array of integers, and for each index you want to find the product of every integer except the integer at that index.

Write a function getProductsOfAllIntsExceptAtIndex() that takes an array of integers and returns an array of the products.

For example, given: [1, 7, 3, 4] your function would return: [84, 12, 28, 21]

by calculating: [7 * 3 * 4,  1 * 3 * 4,  1 * 7 * 4,  1 * 7 * 3]

Here's the catch: You can't use division in your solution!
*/

let testArr = [1, 5, 3, 4];

function bruteProductOfOther(arr) {
  let result = [];
  let temp;

  for (let i = 0; i < arr.length; i++) {
    temp = arr.splice(i, 1);
    result.push(arr.reduce((a, b) => a * b));
    arr.splice(i, 0, temp);
  }
  return result;
}

console.log('bruteforce', bruteProductOfOther(testArr));

function greedyProductOfOther(arr) {
  let productSoFar = 1;
  let productsOfAllIntsBeforeIndex = [];

  //calculate the product of all ints prior to the index and store it
  for (let i = 0; i < arr.length; i++) {
    productsOfAllIntsBeforeIndex[i] = productSoFar;
    productSoFar *= arr[i];
  }
  console.log('before index for greedy', productsOfAllIntsBeforeIndex);

  //pass through a second time , calculate the product of all ints after an index and add that to the stored product of ints before to get the final result
  productSoFar = 1;
  for (let j = arr.length - 1; j >= 0; j--) {
    productsOfAllIntsBeforeIndex[j] *= productSoFar;
    productSoFar *= arr[j];
  }
  return productsOfAllIntsBeforeIndex;
}

console.log('greedy', greedyProductOfOther(testArr));
