// FETCH + OBJECT RESPONSE + USO DO THEN
const doc = fetch('./arquivo.txt')

doc.then(resolucao => resolucao.text())
.then(corpoTexto => {
    let conteudoCorpo = document.querySelector('[data-content=corpo]')
    conteudoCorpo.innerText = corpoTexto
})

// FETCH PARA OBTER DADOS DE UM CEP
const valorCep = '29304630'
const docCep = fetch('https://viacep.com.br/ws/' + valorCep + '/json')

docCep.then(resCep => {
    return resCep.json()
})
.then(resCepJson => {
    console.log(resCepJson)
})