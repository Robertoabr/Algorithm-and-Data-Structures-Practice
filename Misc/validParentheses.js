/*
Given a string containing just the characters '(', ')', '{', '}', '[' and ']', determine if the input string is valid.

An input string is valid if:

Open brackets must be closed by the same type of brackets.
Open brackets must be closed in the correct order.
Note that an empty string is also considered valid.

Example 1:

Input: "()"
Output: true
Example 2:

Input: "()[]{}"
Output: true
Example 3:

Input: "(]"
Output: false
Example 4:

Input: "([)]"
Output: false
Example 5:

Input: "{[]}"
Output: true
*/

var isValid = function(s) {
  let stack = [];
  let close = '])}';

  for (let i = 0; i < s.length; i++) {
    let cChar = s[i];

    if (cChar === '{') {
      stack.push('}');
    } else if (cChar === '[') {
      stack.push(']');
    } else if (cChar === '(') {
      stack.push(')');
    } else if (close.includes(cChar)) {
      let pair = stack.pop();
      if (cChar !== pair) {
        return false;
      }
    }
  }
  if (stack.length > 0) {
    return false;
  }
  return true;
};

console.log('{} expect true:', isValid('{}'));
console.log('{[]} expect true:', isValid('{[]}'));
console.log('[{]} expect false:', isValid('[{]}'));
console.log('[{} expect false:', isValid('[{}'));

/*
O(n) time (one iteration through the string), and O(n)O(n) space (in the worst case, all of our characters are openers, so we push them all onto the stack).

The trick was to use a stack.
It might have been difficult to have that insight, because you might not use stacks that much.

Two common uses for stacks are:
-parsing (like in this problem)
-tree or graph depth first traversal (eg like how you use the call stack/recursion for traversal)
*/
