//Type of Functions


//1.Named Functions
function addNumber(num1,num2){
    return num1 + num2

}

console.log(addNumber(10,20))

console.log('==============')


//2.Anonymous Functions

let multiplyNumbers = function(num1,num2){
    return num1 * num2
}

console.log(multiplyNumbers(10,20))
console.log('==============')


//3.Arrow functions
let subNumbers = function (num1,num2){
    console.log('Inside arrow ')
    return num1 - num2
}
console.log(subNumbers(10,20))
console.log("==============");


//If there is one line in brackets we write it like this 
let subNumbers1 = (num1, num2) => num1-num2
console.log(subNumbers(10, 20));
console.log("==============");


//4.Constructor Functions
 
//* multiple constructors na java script wala
//* constructors kihipyk hdl thiye nm anthima eka gnnawa 

function Student(name,age,email){
    this.name = name
    this.age = age
    this.email = email
}
let Student1 = new Student("Kamal" ,38)
console.log(Student1)

//5.Callback Functions
function myFunction(number) {
    console.log (number)
}

let person = {
     name: 'Kamal',
     age: 40

}
let numbersArray = [1, 2, 3, 4, 5]
myfunction(numbersArray)


function myFunction(Callback) {
  //console.log(number);
  Callback()
}

let person1 = {
  name: "Kamal",
  age: 40,
};
function secondFunction(number){
    console.log('Second Function')
}
myfunction(secondFunction);


//6.Recursive Functions

function factorial(n){
    if (n == 0){
        return 1
    }

    return n * (factorial(n - 1))
}

console.log(factorial(5))

//mainly use wena tika thmi me




