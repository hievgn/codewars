// Century From Year
// https://www.codewars.com/kata/century-from-year

// Solution:
function century(year) {
  let century;

  if (typeof year !== "number" || year <= 0) {
    return "Invalid value";
  } else if (year % 100 === 0) {
    century = year / 100;
  } else {
    century = Math.floor(year / 100) + 1;
  }
  
  return century;
}