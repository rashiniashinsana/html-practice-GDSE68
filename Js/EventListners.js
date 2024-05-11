// 1. Click Event

document.getElementById('btnAdd').addEventListener('click',function(){
    console.log('Add to cart')
})


// 2. Mouse hover Event

document.getElementById('box').addEventListener('mouseover',()=>{
    console.log('Mouse Over')
})

// 3. Mouseout Event
box.addEventListener('mouseover', ()=>{
    box.style.backgroundColor = 'pink'
})

box.addEventListener("mouseout", () => {
  box.style.backgroundColor = "lightgreen";
});



//4. Key Down Event
let userNameFeild = document.getElementById('userName')
userNameFeild.addEventListener('keydown', (Event)=>{
    console.log('Key Down',+ Event.key)
    
})


//5. Key Up Event
userNameFeild.addEventListener('keyUp', (Event)=>{
    console.log('Key Up',+ Event.key)
    
})


// 6.Submit Events
document.getElementById('myForm').addEventListener('submit',(event)=>{
    event.preventDefault()
    console.log('Form Submitted!')
})



//======Numbers Only============

document.getElementById('number Input').addEventListener('keydown',function(event){
    console.log.event.keyCode
    if (event.keyCode >= 48 && event.keyCode <=57) {
        
    } else {
        event.preventDefault()

        alert('numbers only')
        
    }
})







// document.getElementById('box').addEventListener('mouseout',()=>{
//     console.log('mouse out')
// })


// document.getElementById('box').addEventListener('mouseover' , 'mouseout' , ()=>{
//  console.log("mouse over")
//  box.mouseover.style.backgroundColor = pink
// })


