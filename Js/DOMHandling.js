let box = document.getElementById('box')
// console.log(box)


// 1. Inner HTML - sets or returns returns the HTML content (including HTML tags) of an elements

console.log(box.innerHTML)

box.innerHTML =  '<span> Hello World!!! </span>'

console.log(box.innerHTML)

// 2. Text Content - sets or returns the text content of an elements, EXCLUDING HTML tags
console.log(box.textContent)
box.textContent = 'Kamal Perera'
console.log(box.textContent)

// 3. Inner Text - same as textContent. But, InnerText shows as DOM renders 
// while textContent shows only the textual 
console.log(box.innerText)
box.textContent = 'Nimal Perera'
console.log(box.innerText);

// 4. Applying Style 
let image1 = document.getElementById('image1')
console.log(image1)
image1.style.width = '100px'
image1.style.height = "100px";

// 5. Set Attributes
image1.setAttribute('src', '/assets/drops.png')

// 6. Class List = Allows you to manupulate  classes on an element
console.log(box.classList)
box.classList.add('aaa')
box.classList.add("bbb")
box.classList.add("ccc")

box.classList.remove("ccc")
console.log(box.classList)

box.classList.replace('aaa', 'nnn')

// 7. append & appendChild
let parentDiv = document.createElement('div')
box.append(parentDiv)


let childDiv = document.createElement('div')
childDiv.setAttribute('attr' , 'new')
parentDiv.appendChild(childDiv)


// 8. Remove & RemoveChild

parentDiv.removeChild(childDiv)
parentDiv.remove


