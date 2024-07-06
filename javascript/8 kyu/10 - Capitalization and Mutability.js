// Capitalization and Mutability
// https://www.codewars.com/kata/capitalization-and-mutability

// Solution:
function capitalizeWord(word) {
  const newWord = word.charAt(0).toUpperCase() + word.slice(1);
  return newWord;
}
