let studentNames = ["Kamal", "Nimal", "Vimal"];
console.log("Student Names Array :", studentNames, "\n");

/* Array Built-In Functions */

/* 1.push() - adds one or more elements to the (end of) array */
studentNames.push("John");
console.log("Student Names Array :", studentNames);

studentNames.push("Nisal", "Richard");
console.log("Student Names Array :", studentNames);

console.log("\n===============================\n");

/* 2.pop() - removes the last element from an array and returns that element 
(so that we are able to assign that returned value to a variable)
(Ex:- in an instance we want to delete last element from an array and need to print it) */
let poppedName = studentNames.pop();
console.log("Popped name :", poppedName);
console.log("Student Names Array :", studentNames);

console.log("\n===============================\n");

/* 3.shift() - removes the first element from an array and returns that element 
(so that we are able to assign that returned value to a variable)
(Ex:- in an instance we want to delete first element from an array and need to print it) */
let shiftedName = studentNames.shift();
console.log("Shifted name :", shiftedName);
console.log("Student Names Array :", studentNames);
console.log("0 index after shifted : ", studentNames[0]);

console.log("\n===============================\n");

/* 4.unshift() - adds one or more elements to the begining of the array */
studentNames.unshift("John");
console.log("Student Names Array (after unshifted) :", studentNames);

studentNames.unshift("Cool", "Sadun");
console.log("Student Names Array (after unshifted) :", studentNames);

console.log("\n===============================\n");

/* 5.concat() - combines two or more arrays and returns a new array
(without modifying the existing arrays) */
let maleNames = ["Dimuth", "Kusal", "Pathum"];
let femaleNames = ["Vimala", "Kamala", "Nisali"];

let teamNames = maleNames.concat(femaleNames);
console.log("TeamNames Array :", teamNames);

console.log("\n===============================\n");

/* 6.slice() - returns copy of a portion of an array into a new array 
(creates an another array by gaining values from the index we given) */
let fruits = ["apple", "mango", "orange", "avacado"];
console.log("Array after sliced from 0 index :", fruits.slice(0));
console.log("Array after sliced from 1 index :", fruits.slice(1));
console.log("Array after sliced from 2 index :", fruits.slice(2));
console.log("Array after sliced from 3 index :", fruits.slice(3));

console.log("\n===============================\n");

/* 7.splice() - changes the contents of an array by removing or replacing 
existing elements and / or adding new elements */
let fruitsArray = ["apple", "mango", "orange", "avacado"];
fruitsArray.splice(2, 1, "banana");
console.log("Fruits Array after spliced :", fruitsArray);
// The first argument 2 represents the index at which the modification will start. In this case, it starts at index 2, which corresponds to the third element in the array ('orange').
// The second argument 1 specifies the number of elements to remove from the array starting from the index specified. In this case, it removes 1 element from index 2, which is 'orange'.
// The third and any subsequent arguments represent the elements to be added to the array starting from the index specified. In this case, 'banana' is added at index 2.

console.log("\n===============================\n");

/* 8.reverse() - order the array in reverse order */
let letters = ["a", "b", "c", "d"];
console.log("Lettres Array :", letters);
console.log("Lettres Array :", letters.reverse());

console.log("\n===============================\n");

/* 9.sort() - sorting the array in ascending (or descending) order 
(here it is sorted according to the unicode value of the relevant character or character set) */
let numbers = [10, 40, 30, 90, 20];
console.log("Numbers Array :", numbers);

/* sort in ascending order (sort() -> default = ascending order) */
console.log("Numbers Array after sorted :", numbers.sort());

/* sort in decending order */
console.log("Numbers Array after sorted :", numbers.sort().reverse());

console.log("\n===============================\n");

/* As JavaScript is not a type safe language, 
it is possible to assign values with different data types to an array */
let testingArray = ["Amal", "Nisal", "Wimal", 100];
console.log("testingArray : " + testingArray);
console.log("testingArray 0 index data type :", typeof testingArray[0]);
console.log("testingArray 3 index data type :", typeof testingArray[3]);
