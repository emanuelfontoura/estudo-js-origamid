const botão = window.document.querySelector('button.ativar')
const local = window.document.querySelector('div.mostrar')

function mostrarAoClick(){
    if (local.innerHTML == ""){
        local.innerHTML = "FUNÇÃO ATIVADA COM SUCESSO!"
    }else{
        local.innerHTML = ""
    }
}

botão.addEventListener('click', mostrarAoClick)