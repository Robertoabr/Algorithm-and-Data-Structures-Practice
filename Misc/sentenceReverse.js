/*
Sentence Reverse
You are given an array of characters arr that consists of sequences of characters separated by space characters. Each space-delimited sequence of characters defines a word.

Implement a function reverseWords that reverses the order of the words in the array in the most efficient manner.

Explain your solution and analyze its time and space complexities.

Example:

input:  arr = [ 'p', 'e', 'r', 'f', 'e', 'c', 't', '  ',
                'm', 'a', 'k', 'e', 's', '  ',
                'p', 'r', 'a', 'c', 't', 'i', 'c', 'e' ]

output: [ 'p', 'r', 'a', 'c', 't', 'i', 'c', 'e', '  ',
          'm', 'a', 'k', 'e', 's', '  ',
          'p', 'e', 'r', 'f', 'e', 'c', 't' ]
Constraints:

[time limit] 5000ms

[input] array.character arr

0 ≤ arr.length ≤ 100
[output] array.character
*/

function reverseWords(arr) {
  // your code goes here
  let sentence = arr.join('');
  let wordsArr = sentence.split(' ');
  wordsArr = wordsArr.reverse();
  wordsArr = wordsArr.join(' ');
  return wordsArr.split('');
}

function reverseWordsOpt(arr) {
  // your code goes here
  let outArr = [];
  let arrCopy = [...arr];

  for (let i = arr.length - 1; i >= 0; i--) {
    let cChar = arr[i];
    if (cChar === ' ') {
      outArr.push(...arrCopy.splice(i));
    }
    if (i === 0) {
      outArr.push(' ', ...arrCopy);
    }
  }
  outArr = outArr.slice(1);
  return outArr;
}

console.log(
  'test 1',
  reverseWords(['r', 'o', 'o', 'm', ' ', 't', 'o', ' ', 'g', 'o'])
);
console.log('test 2:', reverseWords([' ', ' ']));

console.log(
  'test 1opt',
  reverseWordsOpt([
    'g',
    'o',
    'o',
    'd',
    ' ',
    'b',
    'e',
    ' ',
    't',
    'o',
    ' ',
    'g',
    'o',
    't'
  ])
);
