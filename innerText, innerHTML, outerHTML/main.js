const menu = window.document.querySelector('.menu')
const div = window.document.querySelector('.div')
const divUl = window.document.querySelector('.div > ul')

div.innerHTML += "<p>Adicionei um novo parágrafo</p>"

menu.outerHTML = "<section> Conteúdo </section>"

console.log(divUl.outerHTML)
console.log(divUl.innerHTML)
console.log(divUl.innerText)