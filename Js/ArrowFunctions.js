function addNumbersFunction(num1, num2) {
  return num1 + num2;
}

// Arrow Functions (name arrow bcz of '>')
const addNumbersArrowFunction = (num1, num2) => {
  return num1 + num2;
};

/* As a single statement can be seen in above arrow function, that arrow function can be shortned as,
 (Here it automatically sets return keyword) */
const addNumbersArrowFunc = (num1, num2) => num1 + num2;

// Arrow function without parameters
const sayHellow = () => "Hellow World";

console.log(addNumbersFunction(10, 20));
console.log(addNumbersArrowFunction(10, 20));
console.log(addNumbersArrowFunc(10, 20));
console.log(sayHellow());
