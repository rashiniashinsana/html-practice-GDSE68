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