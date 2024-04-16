/* JavaScript Control Flows */

/* ====== 1. if / else / else if ====== */

let number = -10;

if (number > 0) {
  console.log("Number is Positive...");
} else if (number < 0) {
  console.log("Number is Negative...");
} else {
  console.log("Number is Zero...");
}

console.log("\n=========================\n");

/* ====== 2. switch statement ====== */

let dayOfWeek = 4;
let dayName;

switch (dayOfWeek) {
  case 1:
    dayName = "Sunday";
    break;
  case 2:
    dayName = "Monday";
    break;
  case 3:
    dayName = "Tuesday";
    break;
  case 4:
    dayName = "Wednesday";
    break;
  case 5:
    dayName = "Thursday";
    break;
  case 6:
    dayName = "Friday";
    break;
  case 7:
    dayName = "Saturday";
    break;
  default:
    dayName = "Invalid Day!";
    break;
}

console.log("Day Name ::", dayName);

console.log("\n=========================\n");

/* ====== 3. Loops ====== */

// i. for loop

for (let i = 0; i <= 5; i++) {
  console.log(i);
}

console.log("");

// ii. while loop

let i = 0;
while (i <= 5) {
  console.log(i);
  i++;
}

console.log("");

// iii. do while loop

let j = 0;
do {
  console.log(j);
  j++;
} while (j <= 5);

console.log("\n=========================\n");

/* ====== 4. break ====== */

for (let n = 0; n < 5; n++) {
  if (n === 4) {
    break;
  }
  console.log(n);
}

console.log("\n=========================\n");

/* ====== 5. continue ====== */

for (let n = 0; n < 5; n++) {
  if (n === 3) {
    continue;
  }
  console.log(n);
}

console.log("\n=========================\n");

/* '==' Vs '===' */

// '==' -> checks only the values
// '===' -> checks both values and the datatypes

let num = "5";
if (num == 5) {
  console.log("hey"); // prints 'hey'
}

if (num === 5) {
  console.log("Hey"); // prints nothing (bcz the data types are different so unable to compare)
}
