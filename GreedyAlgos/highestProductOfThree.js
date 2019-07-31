// Given an array of integers, find the highest product you can get from three of the integers.
//The input arrayOfInts will always have at least three integers.

//hint numbers can be negative

const testArray = [-2, -4, 3, 5, 6, -100];

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

console.log('highestProductOfThreeInts', highestProductOfThreeInts(testArray));
