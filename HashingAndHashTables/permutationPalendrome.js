/*
Write an efficient function that checks whether any permutation of an input string is a palindrome. ↴

You can assume the input string only contains lowercase letters.

Examples:

"civic" should return true
"ivicc" should return true
"civil" should return false
"livci" should return false
*/

function palindrome(string) {
  // look for letter pairs
  // make sure that the string has no more than one letter without a corresponding pair (one middle letter is ok)

  let dict = {};
  let count = 0;

  if (string.length < 2) {
    return true;
  }

  //populate the dict
  for (let i = 0; i < string.length; i++) {
    let cLetter = string[i];
    if (dict[cLetter] === undefined) {
      dict[cLetter] = false;
    } else {
      dict[cLetter] = !dict[cLetter];
    }
  }
  //roll through the dict to count the number of odd or false values
  for (let j = 0; j < Object.values(dict).length; j++) {
    let cVal = Object.values(dict)[j];
    if (cVal === false) {
      count++;
    }
  }
  // if there is more than one odd return false
  if (count > 1) {
    return false;
  }

  return true;
}

console.log(palindrome('deed'), 'expect true, deed');
console.log(palindrome('deep'), 'expect false, deep');
console.log(palindrome('civic'), 'expect true, civic');
console.log(palindrome('ivicc'), 'expect true, ivicc');
console.log(palindrome('civil'), 'expect false, civil');
console.log(palindrome('livci'), 'expect false, livci');
