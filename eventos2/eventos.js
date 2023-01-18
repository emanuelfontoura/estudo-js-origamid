const button = window.document.querySelector('button.clickButton')

function ativarAoClick(){
    const texto = window.document.querySelector('div.texto')
    
    texto.classList.toggle('ativar')
}

button.addEventListener("click", ativarAoClick)