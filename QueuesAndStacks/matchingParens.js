/*
"Sometimes (when I nest them (my parentheticals) too much (like this (and this))) they get confusing."

Write a function that, given a sentence like the one above, along with the position of an opening parenthesis, finds the corresponding closing parenthesis.

Example: if the example string above is input with the number 10 (position of the first parenthesis), the output should be 79 (position of the last parenthesis).
*/

// my first answer O(n) time + O(n) space
function findParensPair(str, index) {
  let stack = [];

  for (let i = index; i < str.length; i++) {
    let cChar = str[i];
    if (cChar === '(') {
      stack.push(')');
    }
    if (cChar === ')') {
      stack.pop();
    }
    if (stack.length === 0) {
      return i;
    }
  }
  return 'invalid parens';
}

console.log(
  findParensPair(
    'Sometimes (when I nest them (my parentheticals) too much (like this (and this))) they get confusing.',
    10
  ),
  ':expect 79'
);

console.log(findParensPair('Sometimes ()()', 10), ':expect 11');
console.log(findParensPair('Sometimes ()()', 12), ':expect 13');
console.log(findParensPair('Sometimes ((()', 10), ':expect invalid parens');

//the real O(n) + O(1) constant space answer:
function getClosingParen(sentence, openingParenIndex) {
  let openNestedParens = 0;

  for (
    let position = openingParenIndex + 1;
    position < sentence.length;
    position++
  ) {
    const char = sentence[position];

    if (char === '(') {
      openNestedParens += 1;
    } else if (char === ')') {
      if (openNestedParens === 0) {
        return position;
      }
      openNestedParens -= 1;
    }
  }
  throw new Error('No closing parenthesis :(');
}

console.log(
  getClosingParen(
    'Sometimes (when I nest them (my parentheticals) too much (like this (and this))) they get confusing.',
    10
  ),
  ': Constant space version - expect 79'
);

/*
The trick to many "parsing" questions like this is using a stack to track which brackets/phrases/etc are "open" as you go.Next time you get a parsing question, one of your first thoughts should be "use a stack!"

In this problem, we can realize our stack would only hold '(' characters. So instead of storing each of those characters in a stack, we can store the number of items our stack would be holding.

That gets us from O(n) space to O(1) space.
*/
