const animaisImagens = Array.from(window.document.querySelectorAll('div.animais-imagens-container > img'))

const animaisConteudo = Array.from(window.document.querySelectorAll('div.animais-texto-container > div'))

for (let i = 0; i < animaisImagens.length; i++){
    animaisImagens[i].addEventListener('click', () => {
        animaisConteudo[i].classList.toggle('ativar')
    })
}