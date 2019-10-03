/*
819. Most Common Word

Given a paragraph and a list of banned words, return the most frequent word that is not in the list of banned words.  It is guaranteed there is at least one word that isn't banned, and that the answer is unique.

Words in the list of banned words are given in lowercase, and free of punctuation.  Words in the paragraph are not case sensitive.  The answer is in lowercase.
*/

var mostCommonWord = function(paragraph, banned) {
  // split the paragraph into a words array
  // roll through that array , make everything lowercase, store freq in an obj for    non banned words
  // go through the object to find the highest freq word
  //return the word
  let dict = {};
  let wordArr = paragraph.toLowerCase().split(/\W/);
  let wordFreq = 0;
  let outWord = '';

  for (let i = 0; i < wordArr.length; i++) {
    let curWord = wordArr[i];
    if (banned.includes(curWord)) {
      continue;
    } else if (dict[curWord]) {
      dict[curWord] += 1;
    } else if (dict[curWord] === undefined) {
      dict[curWord] = 1;
    }
  }

  for (let word in dict) {
    if (word === '') {
      continue;
    }
    if (dict[word] > wordFreq) {
      wordFreq = dict[word];
      outWord = word;
    }
  }
  return outWord;
};

let testP = 'Bob hit a ball, the hit BALL flew far after it was hit.';
let testPBan = ['hit'];

console.log(mostCommonWord(testP, testPBan), ' :expect ball');
console.log(mostCommonWord('Bob. hIt, caR?', ['bob', 'hit']), ' :expect car');
