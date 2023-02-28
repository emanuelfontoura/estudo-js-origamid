const div = document.querySelector('.div')
const div2 = document.querySelector('.div2')

const elemento = document.createElement('h1') // CRIA O ELEMENTO
elemento.innerText = "TÍTULO" // ADICIONA UM CONTEÚDO AO ELEMENTO

div.appendChild(elemento) // COLOCA O ELEMENTO NO HTML