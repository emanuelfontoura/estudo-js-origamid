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
function somarImagens(){
    let somaWidth = 0
    animaisImagens.forEach((item) => {
        somaWidth += item.offsetWidth
    })

    console.log(somaWidth)
}

window.onload = function(){
    somarImagens()
}

// EXERCÍCIO 3
const links = Array.from(window.document.querySelectorAll('.menu-lista > li > a'))

const listaLinksCorretos = []
const listaLinksIncorretos = []

links.forEach((link) => {
    if (link.offsetWidth >= 48 && link.offsetHeight >= 48){
        listaLinksCorretos.push(link.getAttribute('href'))
    }else{
        listaLinksIncorretos.push(link.getAttribute('href'))        
    }
})

console.log(listaLinksCorretos)
console.log(listaLinksIncorretos)

// EXERCÍCIO 4

const menu = window.document.querySelector('.menu-lista')

window.addEventListener('resize', () => {
    let mobile = window.matchMedia('(max-width: 720px)').matches
    if (mobile){
        menu.classList.add('menu-mobile')
    }else{
        menu.classList.remove('menu-mobile')
    }
})
    