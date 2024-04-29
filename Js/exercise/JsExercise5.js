
let interval = setInterval(() => {
    console.log('ABCD')
}, 500);

let timeout = setTimeout(function () {
//   console.log("End");
clearInterval(interval)
}, 5000);

    



// let i = 0;
// let interval = setInterval(() => {
//   i++;
//   console.log(i);
//   if (i === 10) {
//     clearInterval(interval);
//   }
// }, 2000);