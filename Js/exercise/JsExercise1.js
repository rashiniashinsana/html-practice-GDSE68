function add(firstValue, secondValue) {
  return firstValue + secondValue;
}

function substract(firstValue, secondValue) {
  return firstValue - secondValue;
}

function multiply(firstValue, secondValue) {
  return firstValue * secondValue;
}

function divide(firstValue, secondValue) {
  return firstValue / secondValue;
}

console.log("Added Value :", add(10, 20), ":", typeof add(10, 20)); // 30 : number
console.log("Added Value :", add(10, "Nisal"), ":", typeof add(10, "Nisal")); // 10Nisal : string

console.log(
  "Substracted Value :",
  substract(20, 10),
  ":",
  typeof substract(20, 10)
); // 10 : number

console.log(
  "Multiplied Value :",
  multiply(10, 20),
  ":",
  typeof multiply(10, 20)
); // 200 : number
console.log(
  "Multiplied Value :",
  multiply(10, "Nisal"),
  ":",
  typeof multiply(10, "Nisal")
); // NaN : number
/*
 * here the data type will print as number bcz in multipication, the output should be a number
 * 'NaN' means 'Not a Number'
 */

console.log("Divided Value :", divide(20, 10), ":", typeof divide(20, 10)); // 2 : number
console.log(
  "Divided Value :",
  divide(20, "Nisal"),
  ":",
  typeof divide(20, "Nisal")
); // NaN : number
