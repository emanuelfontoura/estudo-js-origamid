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

const small = window.matchMedia('(max-width: 600px)').matches

if (small){
    console.log('Tela menor que 600px')
}else{
    console.log('Tela maior que 600px')
}