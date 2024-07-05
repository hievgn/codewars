// Remove First and Last Character
// https://www.codewars.com/kata/remove-first-and-last-character

// Solution:
function removeChar(str) {
  const newStr = str.slice(1, -1);
  return newStr;
}