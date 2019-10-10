/*
Write a function for doing an in-place shuffle of an array.

The shuffle must be "uniform," meaning each item in the original array must have the same probability of ending up in each spot in the final array.

Assume that you have a function getRandom(floor, ceiling) for getting a random integer that is >= floor and <= ceiling.
*/

let testArr = ['a', 'b', 'c', 'd'];

function inPlaceShuffleRB(arr) {
  // grap an random element , push it to the front
  // grab a random elemnt from the rest , push to the front
  // do that arr.length times and we are good

  let len = arr.length;

  for (let i = 0; i < len; i++) {
    console.log(i, 'i');
    console.log(arr, 'arr before');
    arr.unshift(...arr.splice(getRandom(i, len - 1), 1));
    console.log(arr, 'arr after step');
  }
  return arr;
}

function getRandom(floor, ceiling) {
  let num = Math.random() * (ceiling - floor + 1) + floor;
  num = Math.floor(num);
  return num;
}

console.log(getRandom(0, 3), 'getRandom(0,3)');
console.log(inPlaceShuffleRB(testArr), ': inPlaceShuffleRB([a, b, c, d])');

/*
their solution below is O(n) time and O(1) space. mine I think is not constant space it O(n) space because I am using splice NOT SURE

This is a semi-famous algorithm known as the Fisher-Yates shuffle (sometimes called the Knuth shuffle).

Don't worry, most interviewers won't expect a candidate to know the Fisher-Yates shuffle algorithm. Instead, they'll be looking for the problem-solving skills to derive the algorithm, perhaps with a couple hints along the way.

They may also be looking for an understanding of why the naive solution is non-uniform (some outcomes are more likely than others). If you had trouble with that part, try walking through it again.
*/

function shuffleOfficial(array) {
  // If it's 1 or 0 items, just return
  if (array.length <= 1) return;

  // Walk through from beginning to end
  for (
    let indexWeAreChoosingFor = 0;
    indexWeAreChoosingFor < array.length - 1;
    indexWeAreChoosingFor++
  ) {
    // Choose a random not-yet-placed item to place there
    // (could also be the item currently in that spot)
    // must be an item AFTER the current item, because the stuff
    // before has all already been placed
    const randomChoiceIndex = getRandom(
      indexWeAreChoosingFor,
      array.length - 1
    );

    // Place our random choice in the spot by swapping
    if (randomChoiceIndex !== indexWeAreChoosingFor) {
      const valueAtIndexWeChoseFor = array[indexWeAreChoosingFor];
      array[indexWeAreChoosingFor] = array[randomChoiceIndex];
      array[randomChoiceIndex] = valueAtIndexWeChoseFor;
    }
  }
}
