const botão = window.document.querySelector('button.ativar')
const local = window.document.querySelector('div.mostrar')

/** @param {MouseEvent} evento */
function mostrarAoClick(evento){ // O POINT EVENT É RECEBIDO E GUARDADO DENTRO DA VARIÁVEL "evento" E PODE SER MANIPULADO, PODENDO ACESSAR SUAS PROPRIEDADES E METÓDOS //
    console.log(evento.x)
    console.log(evento.y)
    console.log(evento.timeStamp)
    console.log(evento.currentTarget)
    console.log(evento.offsetX)

    if (local.innerHTML == ""){
        local.innerHTML = "FUNÇÃO ATIVADA COM SUCESSO!"
    }else{
        local.innerHTML = ""
    }
}

botão.addEventListener('click', mostrarAoClick) // É PASSADO UM PARÂMETRO NÃO VISÍVEL, UM POINT EVENT RELACIONADO A AÇÃO FEITA //