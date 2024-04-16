// basic function declaration (without parameters)
function sayHello() {
  console.log("Hellow World!!!");
}
sayHello();

console.log("");

// basic function declaration (with parameters)
function greeting(name) {
  console.log("Good morning " + name);
}

greeting("Nisal"); // Nisal
greeting(); // undefined
greeting("Sithum", "Wimal"); // Sithum
greeting(1); // 1
greeting(4, 2); // 4

/* In JavaScript, when you declare multiple functions with the same name, only the last one declared will be used. 
This behavior is known as "function hoisting" or "function overwriting". */

console.log("");

function greeting(firstName, lastName) {
  console.log("Good morning", firstName, lastName);
}

greeting("Sithum", "Dias");

console.log("");

function greeting(firstName, lastName) {
  console.log("Good morning", firstName, lastName);
  return firstName + " " + lastName;
}

let returnedGreetingValue = greeting("Nisal", "Perera");
console.log("returnedGreetingValue :", returnedGreetingValue);

console.log("");

function greeting(firstName, lastName) {
  console.log("Good morning", firstName, lastName);
  // return firstName + " " + lastName
}

let greetingValueReturned = greeting("Nisal", "Perera");
console.log("returnedGreetingValue :", greetingValueReturned); //undefined
