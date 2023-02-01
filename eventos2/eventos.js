const button = window.document.querySelector('button.clickButton')

button.addEventListener("click", function (event){
    const texto = window.document.querySelector('div.texto')

    console.log(event.x)
    
    texto.classList.toggle('ativar')
})