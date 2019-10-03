/*
You created a game that is more popular than Angry Birds.

Each round, players receive a score between 0 and 100, which you use to rank them from highest to lowest. So far you're using an algorithm that sorts in O(nlgn) time, but players are complaining that their rankings aren't updated fast enough. You need a faster sorting algorithm.

Write a function that takes: an array of unsortedScores + the highestPossibleScore in the game,
and returns a sorted array of scores in less than O(nlgn) time.
*/

const unsortedScores = [37, 89, 41, 65, 91, 53];
const HIGHEST_POSSIBLE_SCORE = 100;


function sortScores(scoresArr, highestScore) {
  let dictArray = [] //size of highest score

  //read into dict arr
  for(let i = 0; i < scoresArr.length ; i++){
    let
  }
}















function gsortScores(scoresArr, highestScore) {
  let outArr = [];
  let countingArr = [];

  //THIS IS SLIGHTLY INEFFICENT BELOW HERE - REAL solution uses an array prefilled with 0s so it doesn't have to check if something is inside, it can just add +1 for every repeat letter

  //pass through once adding elements to my counting array
  // indices represent score counts here (similar but diff than memoization)
  scoresArr.forEach(element => {
    if (countingArr.includes(element)) {
      countingArr[element] = countingArr[element] + 1;
    } else {
      countingArr[element] = 1;
    }
  });

  //pass through my counting array once adding elements to final output
  for (let i = 0; i < countingArr.length; i++) {
    if (typeof countingArr[i] !== 'undefined') {
      for (let j = 0; j < countingArr[i]; j++) {
        outArr.push(i);
      }
    }
  }
  return outArr;
}



// O(n) time O(n) space - really its O(n+k) time and space where k is the highest possible score or range of possible scores
console.log(sortScores(unsortedScores, HIGHEST_POSSIBLE_SCORE));
