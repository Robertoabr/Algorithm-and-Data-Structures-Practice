/*
Given two strings s and t , write a function to determine if t is an anagram of s.

Example 1:

Input: s = "anagram", t = "nagaram"
Output: true
Example 2:

Input: s = "rat", t = "car"
Output: false
Note:
You may assume the string contains only lowercase alphabets.

Follow up:
What if the inputs contain unicode characters? How would you adapt your solution to such case?
*/

function isAnagram(s, t) {
  let dict = {};
  for (let i = 0; i < s.length; i++) {
    let sLetter = s[i];
    if (dict[sLetter]) {
      dict[sLetter] += 1;
    } else {
      dict[sLetter] = 1;
    }
  }
  for (let i = 0; i < t.length; i++) {
    let tLetter = t[i];
    if (dict[tLetter]) {
      dict[tLetter] -= 1;
      if (dict[tLetter] < 0) {
        return false;
      }
    } else {
      return false;
    }
  }
  return !Object.values(dict).reduce((a, b) => a + b, 0);
}

console.log('ray and way => false:', isAnagram('ray', 'way'));
console.log('ray and ayr => true:', isAnagram('ray', 'ayr'));
console.log('ray and ar => false:', isAnagram('ray', 'ar'));
