const animaisImagens = Array.from(window.document.querySelectorAll('div.animais-imagens-container > img'))
const animaisConteudo = Array.from(window.document.querySelectorAll('div.animais-texto-container > div'))
  
// FUNÇÃO DE MOSTRAR O CONTEÚDO DE ACORDO COM A IMAGEM CLICADA

for (let i = 0; i < animaisImagens.length; i++){
    animaisImagens[i].addEventListener('click', () => { // se eu clicar na imagem 3, o "i" assume o valor 3, isso ocorre pois como já foi percorrida a array, o manipulador de eventos associa o número da imagem a variavel "i" quando clicada.
        for (let j = 0; j < animaisConteudo.length; j++){
            if (i == j){
                animaisConteudo[j].classList.add('ativar')
            }else{
                animaisConteudo[j].classList.remove('ativar')
            }
        }
    })
}

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