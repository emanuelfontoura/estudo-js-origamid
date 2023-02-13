const animaisImagens = Array.from(window.document.querySelectorAll('div.animais-imagens-container > img'))

const animaisConteudo = Array.from(window.document.querySelectorAll('div.animais-texto-container > div'))

for (let i = 0; i < animaisImagens.length; i++){
    animaisImagens[i].addEventListener('click', () => {
        animaisConteudo[i].classList.toggle('ativar')
    })
}

//EXERCÍCIO 1 (DISTÂNCIA DA PRIMEIRA IMAGEM PARA O TOPO)
console.log(animaisImagens[0].getAttribute('src'))
console.log(animaisImagens[0].offsetTop)

// EXERCÍCIO 2 (SOMAR O WIDTH DE CADA FOTO)
var somaWidth = 0

animaisImagens.forEach((item) => {
    somaWidth += item.clientWidth
})

console.log(somaWidth)

// EXERCÍCIO 3