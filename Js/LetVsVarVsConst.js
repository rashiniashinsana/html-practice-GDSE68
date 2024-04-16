/*
    * var -> function-scoped (able to be access away from the relevant block)
    * let -> block-scoped (only able to acess within the relevant block)
    * const -> block-scoped
    * let and const arrived to JavaScript since EcmaScript 6 (ES6)
    * defining varibles using let and const is a best practice
    
    (if a var variable delcared and assigned globally, 
        using window object through console object we're able to access that var variable)
 */

// iterating and trying to access let variable away from block scope (Reference error)
function iterateLetNumber() {
  for (let i = 0; i <= 5; i++) {
    console.log(i);
  }
  console.log(i); // ReferenceError: i is not defined
}
iterateLetNumber();

console.log("\n===============================\n");

// iterating and trying to access var variable away from block scope (No any errors)
function iterateVarNumber() {
  for (var i = 0; i <= 5; i++) {
    console.log(i);
  }
  console.log(i); // 6
}
iterateVarNumber();

console.log("\n===============================\n");

// iterating and trying to access const variable away from block scope (TypeError)
function iterateConstNumber() {
  for (const i = 0; i <= 5; i++) {
    // TypeError: Assignment to constant variable. (i++)
    console.log(i); // 0
  }
  console.log(i);
}
iterateConstNumber();
