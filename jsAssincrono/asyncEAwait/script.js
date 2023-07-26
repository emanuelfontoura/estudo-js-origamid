// ASYNC / AWAIT

async function puxarDados(){
    const dadosResponse = await fetch('https://viacep.com.br/ws/29304630/json/')
    const dadosJson = await dadosResponse.text()

    document.body.innerText += '\n\nDADOS DO ASYNC/AWAIT \n' + dadosJson
}

puxarDados()

// TRY / CATCH

async function puxarDados2(){
    try{
        const response = await fetch('https://viacep.com.br/ws/29304630/json/')
        const dados = await response.text()
        document.body.innerText += '\n\nDADOS DO TRY/CATCH \n' + dados
    }catch(erro){
        console.log(erro)
    }finally{
        console.log('Terminou!')
    }
}

puxarDados2()

// INICIAR FETCH AO MESMO TEMPO

async function puxarDados3(){
    try{
        const promise = fetch('https://viacep.com.br/ws/29304630/json/')
        const promise2 = fetch('https://viacep.com.br/ws/29304630/json/')

        const dados = await (await promise).text()
        const dados2 = await (await promise2).text()

        document.body.innerText += '\n\nDADOS DO FETCH AO MESMO TEMPO \nDADOS: ' + dados + '\n OUTROS DADOS: ' + dados2
    }catch(erro){
        console.log(erro)
    }finally{
        console.log('Terminou!')
    }
}

puxarDados3()