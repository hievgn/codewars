// Thinkful - Logic Drills: Traffic light
// https://www.codewars.com/kata/thinkful-logic-drills-traffic-light

// Solution:
function updateLight(current) {
  if (current === "green") {
    return "yellow";
  }
  if (current === "yellow") {
    return "red";
  }
  return "green";
}
