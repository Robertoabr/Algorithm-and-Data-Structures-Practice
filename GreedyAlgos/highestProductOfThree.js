// Given an array of integers, find the highest product you can get from three of the integers.
//The input arrayOfInts will always have at least three integers.

//hint numbers can be negative
const testArray0 = [-2, -4, 3, 5, 6, -100];

function highestProductOfThreeInts(arrayOfInts) {
  let highest = Math.max(arrayOfInts[0], arrayOfInts[1]);
  let lowest = Math.min(arrayOfInts[0], arrayOfInts[1]);

  let highestProductOf2 = arrayOfInts[0] * arrayOfInts[1];
  let lowestProductOf2 = arrayOfInts[0] * arrayOfInts[1];

  let highestProductOf3 = arrayOfInts[0] * arrayOfInts[1] * arrayOfInts[2];

  for (let i = 2; i < arrayOfInts.length; i++) {
    let cv = arrayOfInts[i];

    highestProductOf3 = Math.max(
      highestProductOf3,
      cv * highestProductOf2,
      cv * lowestProductOf2
    );

    highestProductOf2 = Math.max(highestProductOf2, cv * highest, cv * lowest);
    lowestProductOf2 = Math.min(lowestProductOf2, cv * highest, cv * lowest);

    highest = Math.max(highest, cv);
    lowest = Math.min(lowest, cv);
  }
  return highestProductOf3;
}

console.log(
  'first method - [-2, -4, 3, 5, 6, -100] - expect 2400:',
  highestProductOfThreeInts(testArray0)
);

/*


Alternative way to do it tracking highest, second highest , lowest and second lowest and comparing the curNum to all combinations of those vs using the highestProductOf2 and lowestProductOf2  that I did above. This is pretty much just as fast O(n) time and constant space
*/

const testArray = [-2, -4, 3, 5, 6, -100];
const testArray2 = [-2, -4, -100];
const testArray3 = [2, 4, 3, 5, 6, 100];
const testArray4 = [-2, -4, -3, -5, -6, -100];

// eslint-disable-next-line complexity
function highestProductof3(arr) {
  //check to see if there are 3 items in the array
  if (arr.length === 3) {
    return arr.reduce((cv, ag) => {
      return cv * ag;
    }, 1);
  }
  // populate the things I need to track as I go through the array
  let first4 = arr.slice(0, 4).sort((a, b) => a - b);
  let lowest = first4[0];
  let secondLowest = first4[1];
  let secondHighest = first4[2];
  let highest = first4[3];
  let curHighestProductOfThree = Math.max(
    highest * lowest * secondLowest,
    highest * secondHighest * secondLowest
  );

  //go through the array
  for (let i = 4; i < arr.length; i++) {
    let curNum = arr[i];
    let possible = [lowest, secondLowest, secondHighest, highest];

    // compare the curNum + any combination of tracked vars to the currHighestProduct
    for (let j = 0; j < possible.length; j++) {
      let first = possible[j];
      for (let k = j + 1; k < possible.length; k++) {
        let second = possible[k];
        let curProduct = first * second * curNum;
        if (curProduct > curHighestProductOfThree) {
          curHighestProductOfThree = curProduct;
        }
      }
    }
    // update the list of tracked variables
    if (curNum <= lowest) {
      secondLowest = lowest;
      lowest = curNum;
    } else if (curNum <= secondLowest) {
      secondLowest = curNum;
    } else if (curNum >= highest) {
      secondHighest = highest;
      highest = curNum;
    } else if (curNum >= secondHighest) {
      secondHighest = curNum;
    }
  }
  return curHighestProductOfThree;
}

console.log(
  'test 1 - [-2, -4, 3, 5, 6, -100]  - expect 2400:',
  highestProductof3(testArray)
);
console.log(
  'test 2 - [-2, -4, -100] - expect -800:',
  highestProductof3(testArray2)
);
console.log(
  'test 3  [2, 4, 3, 5, 6, 100] - expect 3000:',
  highestProductof3(testArray3)
);
console.log(
  'test 4 - [-2, -4, -3, -5, -6, -100] - expect -24:',
  highestProductof3(testArray4)
);
