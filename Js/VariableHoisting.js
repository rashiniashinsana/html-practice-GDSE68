//============variable hoisting with var keyword==========



console.log(number)
var number = 100;              //Functional Scope         


//within var, variable declaratons are hoisted to the top of their containing function
//or global scope ,which means you can access the variable before it's declared without 
// casuing an error,although its value will be undefined until it's assigned.



//===========variable hoisting with let keyword============
console.log(firstName)                      //Block Scope
let firstName = 'Kamal'


//===========variable hoisting with const keyword==========

console.log(lastName)                    //Block Scope
const lastName = 'Perera'