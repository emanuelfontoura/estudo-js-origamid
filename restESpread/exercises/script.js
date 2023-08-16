// EXERCÍCIO 1
function createButton(background = 'blue', color = 'red', width = '300px', height = '150px', text = 'TEXT') {
    const buttonElement = document.createElement('button');
    buttonElement.style.background = background;
    buttonElement.style.color = color
    buttonElement.style.width = width
    buttonElement.style.height = height
    buttonElement.innerText = text
    return buttonElement;
} 
  
const redButton = createButton();
document.body.appendChild(redButton)

// EXERCÍCIO 2
const frutas = ['Banana', 'Uva', 'Morango'];
const comidas = ['Pizza', 'Batata'];

comidas.push(...frutas)
console.log(comidas)