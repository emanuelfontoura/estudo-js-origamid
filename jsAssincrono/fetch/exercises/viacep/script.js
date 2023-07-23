const btnCep = document.querySelector('[data-cep=btn]')

btnCep.addEventListener('click', handleClick)

function handleClick(){
    const labelCep = document.querySelector('[data-cep=cep]')
    const valorCep = document.querySelector('[data-cep=valor]').value
    fetch('https://viacep.com.br/ws/' + valorCep + '/json')
    .then(resp => resp.json())
    .then(respJson => {
        console.log(respJson)
        labelCep.innerText = `Rua: ${respJson.logradouro} \n Bairro: ${respJson.bairro} \n Cidade: ${respJson.localidade} \n Estado: ${respJson.uf}`
    })
}

const promessa = new Promise((resolve, reject) => {
    let dados = true
    if(dados){
        resolve('ARGUMENTO X')
    }else{
        reject(Error('Ocorreu um erro.'))
    }
})