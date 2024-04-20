//There are 6 types of data types 

// 1. String
let firstName = "Kamal"
console.log('Types of firstName : ', typeof firstName)


// 2. Number 
let age = 30;
console.log('Type of age : ', typeof age)

let distancekm = 3.25 
console.log('Type of distancekm' , typeof distancekm)

// 3. Boolean
let isAdded = true
console.log('Type of isAdded : ', typeof isAdded)

let isDeleted = false
console.log('Type of isDeleted : ', typeof isDeleted)

// 4. Undifined 
let address;
console.log('Type of address :' , typeof address )

let email = undefined
console.log('Type of email : ' , typeof email)


//5.Null
let phoneNumber = null
console.log('Type of phoneNumber : ', typeof phoneNumber)

// 6. Symbol - Introduced in ECMAScript 6 (ES6), symbols are unique and immutuable primitive value
let symbol = Symbol('First Name')
console.log('Type of Symbol : ' , typeof Symbol) 

//7.BigInt
const number1 = 1003456765432n
const number2 = 100;

const result = number1 + BigInt(number2);
console.log('Result :', result
)
