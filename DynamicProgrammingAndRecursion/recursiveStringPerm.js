/*
Write a recursive function for generating all permutations of an input string. Return them as a set.Don't worry about time or space complexity—if we wanted efficiency we'd write an iterative version. All valid Permutations include all letters.

To start, assume every character in the input string is unique.

Your function can have loops—it just needs to also be recursive.
*/

function recStringPerm(string) {
  // Base case
  if (string.length <= 1) {
    return new Set([string]);
  }

  const allCharsExceptLast = string.slice(0, -1);
  const lastChar = string[string.length - 1];

  // Recursive call: get all possible permutations for all chars except last
  const permutationsOfAllCharExceptLast = recStringPerm(allCharsExceptLast);

  const outputPermutations = new Set();

  // Put the last char in all possible positions for each of the above permutations
  permutationsOfAllCharExceptLast.forEach(word => {
    for (let i = 0; i <= word.length; i++) {
      let cVarientwNewLetter = word.slice(0, i) + lastChar + word.slice(i);
      outputPermutations.add(cVarientwNewLetter);
    }
  });
  return outputPermutations;
}

function getPermutations(string) {
  // Base case
  if (string.length <= 1) {
    return new Set([string]);
  }

  const allCharsExceptLast = string.slice(0, -1);
  const lastChar = string[string.length - 1];

  // Recursive call: get all possible permutations for all chars except last
  const permutationsOfAllCharsExceptLast = getPermutations(allCharsExceptLast);

  // Put the last char in all possible positions for each of the above permutations
  const permutations = new Set();
  permutationsOfAllCharsExceptLast.forEach(permutationOfAllCharsExceptLast => {
    for (let position = 0; position <= allCharsExceptLast.length; position++) {
      const permutation =
        permutationOfAllCharsExceptLast.slice(0, position) +
        lastChar +
        permutationOfAllCharsExceptLast.slice(position);
      permutations.add(permutation);
    }
  });

  return permutations;
}

console.log("recStringPerm('cat')", recStringPerm('cat'));
