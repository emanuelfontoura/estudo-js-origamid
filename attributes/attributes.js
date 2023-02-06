const elemento = window.document.querySelector('.div')
const imagem = window.document.querySelector('.div > img')

console.log(elemento.getAttribute('style'))

imagem.setAttribute('src', '../imagem.jpg')

console.log(imagem.hasAttribute('src'))

elemento.removeAttribute('')

console.log(elemento.hasAttributes())