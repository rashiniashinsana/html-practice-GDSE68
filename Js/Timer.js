//1. setTimeout - executes a functions once after a specific delay
//setTimeout(callbach,1000)

let timeout =setTimeout(function(){
    console.log ('Hellooooo..')
},5000)

clearTimeout(timeout)

// cancel the Timeout

//2. setInterval

// setInterval(callback, interval)

let greet = () => {
    console.log('Hello World!')
}

let interval = setInterval(greet,1000)

// let interval = setInterval(() => {
//     console.log('Hey...')
// }, 1000);

// clearInterval(interval)