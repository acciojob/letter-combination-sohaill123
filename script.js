function letterCombinations(digits) {
  //Complete the function
	const digitToLetters = {
    '2': 'abc',
    '3': 'def',
    '4': 'ghi',
    '5': 'jkl',
    '6': 'mno',
    '7': 'pqrs',
    '8': 'tuv',
    '9': 'wxyz'
  };

  // Array to store the resulting combinations
  const combinations = [];

  // Recursive helper function to generate combinations
  function backtrack(combination, nextDigits) {
    // Base case: no more digits to process
    if (nextDigits.length === 0) {
      combinations.push(combination);
      return;
    }

    // Get the letters corresponding to the current digit
    const currentDigit = nextDigits[0];
    const letters = digitToLetters[currentDigit];

    // Recursive call for each letter
    for (let i = 0; i < letters.length; i++) {
      const letter = letters[i];
      backtrack(combination + letter, nextDigits.slice(1));
    }
  }

  // Call the helper function to generate combinations
  if (digits.length !== 0) {
    backtrack('', digits);
  }

  // Sort the resulting combinations lexicographically
  combinations.sort();

  return combinations;
}

module.exports = letterCombinations;
