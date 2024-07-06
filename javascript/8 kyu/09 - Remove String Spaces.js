// Remove String Spaces
// https://www.codewars.com/kata/remove-string-spaces

// Solution:
function noSpace(x) {
  const newStr = x.split(" ").join("");
  return newStr;
}