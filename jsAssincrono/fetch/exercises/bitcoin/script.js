const div = document.createElement('div')

function setBitCoinValue(){
    fetch('https://blockchain.info/ticker')
    .then(resposta => resposta.json())
    .then(resposta => {
        let valorBrl = '' + resposta.BRL.last.toLocaleString('pt-BR', {style: 'currency', currency: 'BRL'})
        div.innerText = `Valor do BITCOIN em BRL: ${valorBrl}`
        document.body.appendChild(div)
    })
}

setBitCoinValue()
setInterval((setBitCoinValue), 1000 * 30)