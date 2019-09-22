/*
Write a function that takes an array of characters and reverses the letters in place
*/

function reverse(arr) {
  let leftIndex = 0;
  let rightIndex = arr.length - 1;

  while (leftIndex < rightIndex) {
    let temp = arr[leftIndex];
    arr[leftIndex] = arr[rightIndex];
    arr[rightIndex] = temp;
    leftIndex++;
    rightIndex--;
  }

  return arr;
}

console.log(reverse(['y', 'o', 'b']), ':  Expect boy');
console.log(reverse(['s', 'y', 'o', 'b']), ':  Expect boys');
