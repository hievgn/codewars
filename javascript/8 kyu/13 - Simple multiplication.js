// Simple multiplication
// https://www.codewars.com/kata/simple-multiplication

// Solution:
function simpleMultiplication(value) {
  if (value % 2 === 0) {
    return value * 8;
  }
  if (value % 2 !== 0) {
    return value * 9;
  }
  if (typeof value !== "number") {
    return "Invalid value";
  }
}