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

  for (let i = 0; i <= s.length - p.length; i++) {
    let sSubStr = s.slice(i, i + p.length);
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

var findAnagramsMap = function(s, p) {
  let map = new Map();
  let outArr = [];

  for (let i = 0; i < p.length; i++) {
    let pLetter = p[i];
    if (map.has(pLetter)) {
      map.set(pLetter, map.get(pLetter) + 1);
    } else {
      map.set(pLetter, 1);
    }
  }

  for (let i = 0; i <= s.length - p.length; i++) {
    let mapCopy = new Map(map);
    let sSubStr = s.slice(i, i + p.length);
    for (let j = 0; j < sSubStr.length; j++) {
      let subLetter = sSubStr[j];
      if (mapCopy.has(subLetter)) {
        mapCopy.set(subLetter, mapCopy.get(subLetter) - 1);
        if (mapCopy.get(subLetter) === 0) {
          mapCopy.delete(subLetter);
        }
      } else {
        break;
      }
    }

    if (!mapCopy.size) {
      outArr.push(i);
    }
  }

  return outArr;
};

console.log('regular obj - expect 012: ', findAnagrams('abab', 'ab'));
console.log(' regular obj - expect 06: ', findAnagrams('cbaebabacd', 'abc'));
console.log(' regular obj - expect 1: ', findAnagrams('baa', 'aa'));

console.log(' Map - expect 012: ', findAnagramsMap('abab', 'ab'));
console.log(' Map - expect 06: ', findAnagramsMap('cbafffacb', 'abc'));
console.log(' Map - expect 06: ', findAnagramsMap('cbaebabacd', 'abc'));
console.log(' Map - expect 1: ', findAnagramsMap('baa', 'aa'));
