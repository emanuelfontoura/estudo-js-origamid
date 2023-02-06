const elemento = window.document.querySelector('.elemento')

const conteudo = window.document.querySelector('.elemento > div')

console.log(elemento.clientHeight) // height + padding
console.log(elemento.offsetHeight) // height + padding + border
console.log(elemento.scrollHeight)

var rect = elemento.getBoundingClientRect()

for (const index in rect){
    if (typeof rect[index] !== 'function'){
        const paragrafo = document.createElement('p')

        paragrafo.textContent = `${index} : ${rect[index]}`

        elemento.appendChild(paragrafo)
    }
}