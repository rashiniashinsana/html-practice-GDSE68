console.log('Hey There')

//ID selector 
let CalculateButton = document.getElementById('btnCalculate')
console.log(CalculateButton)
CalculateButton.style.backgroundColor='blue'
CalculateButton.style.color= 'white'


//button click event listner 
CalculateButton.addEventListener('click',()=>
{
    alert('Hellow World')
})


//Class Selector
document.getElementsByClassName('box')
console.log(boxes)

//tag selector
let headingOnes = document.getElementsByTagName('h2')
console.log(headingOnes)

//Query Selector
let button = document.querySelector('#btnCalculate')
console.log(button)

let testDiv = document.querySelector(".testDiv");
console.log(testDiv);

let box = document.querySelector('.box')
console.log(box)

let box1 = document.querySelector("#container.box");
console.log(box1);



//QuerySelectorAll
let box2 = document.querySelectorAll("#container.box");
console.log(box2);



// querySelector = class ekaka thiyn mulma element ek gnna meka use krnawa

// queryselectorAll = class ekt adala okkom elements allagnn