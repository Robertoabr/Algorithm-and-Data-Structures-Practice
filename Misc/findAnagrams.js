var findAnagrams = function(s, p) {
  let dict = {};
  let outArr = [];

  for (let i = 0; i < p.length; i++) {
    let pLetter = p[i];
    if (dict[pLetter]) {
      dict[pLetter] += 1;
    } else {
      dict[pLetter] = 1;
    }
  }

  let dictCopy = { ...dict };

  for (let i = 0; i < s.length; i++) {
    let sSubStr = s.slice(i, i + s.length);
    for (let j = 0; j < sSubStr.length; j++) {
      let subLetter = sSubStr[j];
      if (dictCopy[subLetter]) {
        dictCopy[subLetter] -= 1;
        if (dictCopy[subLetter] < 0) {
          break;
        }
      } else {
        break;
      }
    }
    if (Object.values(dictCopy).reduce((a, b) => a + b, 0) === 0) {
      outArr.push(i);
    }
    dictCopy = { ...dict };
  }

  return outArr;
};

console.log('expect 012: ', findAnagrams('abab', 'ab'));
console.log('expect 012: ', findAnagramsSort('abab', 'ab'));
