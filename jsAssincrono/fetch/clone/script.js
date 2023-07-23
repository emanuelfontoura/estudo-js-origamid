fetch('https://viacep.com.br/ws/01001000/json/')
.then(resposta => {
    const cloneResposta = resposta.clone()
    resposta.json().then(resposta => {
        console.log(resposta)
    })
    cloneResposta.text().then(resposta => {
        console.log(resposta)
    })
})