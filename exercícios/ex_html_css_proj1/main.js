const animaisImagens = Array.from(window.document.querySelectorAll('div.animais-imagens-container > img'))
const animaisConteudo = Array.from(window.document.querySelectorAll('div.animais-texto-container > div'))
  
// FUNÇÃO DE MOSTRAR O CONTEÚDO DE ACORDO COM A IMAGEM CLICADA

// for (let i = 0; i < animaisImagens.length; i++) {
//     animaisImagens[i].addEventListener('click', () => {
//         for (let j = 0; j < animaisConteudo.length; j++) {
//             if (j === i) {
//                 animaisConteudo[j].classList.add('ativar');
//             } else {
//                 animaisConteudo[j].classList.remove('ativar');
//             }
//         }
//     });
// }

// A MESMA FUNCIONALIDADE DE CIMA, PORÉM USANDO O .FOREACH AO INVÉS DO FOR
// ESSA FORMA AQUI É MAIS OTIMIZADA, JÁ QUE NÃO PRECISA DA CRIAÇÃO DE VARIÁVEIS PARA CONTROLE DE ÍNDICE

// animaisImagens.forEach((imagem, index) => {
//     imagem.addEventListener('click', () => {
//         animaisConteudo.forEach((conteudo, conteudoIndex) => {
//             if (conteudoIndex === index) {
//                 conteudo.classList.add('ativar');
//             } else {
//                 conteudo.classList.remove('ativar');
//             }
//         });
//     });
// });

// ANIMAÇÃO DE SELECIONADO NO MENU

const linksInternos = document.querySelectorAll('a[href^="#"], a[href^="http"]')

function handleLink(event){
    event.preventDefault()
    linksInternos.forEach((link) => {
        link.classList.remove('on')
        link.classList.add('off')
    })
    event.currentTarget.classList.add('on')
    event.currentTarget.classList.remove('off')
}

linksInternos.forEach((item) => {
    item.addEventListener('click', handleLink)
})

// EXERCICIO

const allElements = document.querySelectorAll('body *')

function elementClick(event){
    // event.currentTarget.remove()
}

allElements.forEach((element) => {
    element.addEventListener('click', elementClick)
})

// EXERCICIO

function aumentarFonte(event){
    if (event.key === "t"){
        document.documentElement.classList.toggle('textomaior')
    }
}

window.addEventListener('keydown', aumentarFonte)

const menu = document.querySelector('.menu-container')
const footer = document.querySelector('footer')

const cloneMenu = menu.cloneNode(true)

footer.appendChild(cloneMenu)