// API

fetch('https://pokeapi.co/api/v2/pokemon/') // API acessada através de um comando que é a requisição HTTP (URL) -> foi enviada à API uma requisição HTTP de um dado dela e ela retornou uma resposta também em requisição HTTP com esse dado pedido por mim
.then(response => response.json())
.then(respostaJson => console.log(respostaJson))

// HTTP

const url = 'https://jsonplaceholder.typicode.com/posts/'
const options = {
    method:'POST',
    body:'{"title":"JavaScript"}',
    headers:{
        "Content-Type":"application/json;charset=utf-8"
    }
}

fetch(url, options)
.then(response => response.json())
.then(respostaJson => console.log(respostaJson))

const url2 = 'https://jsonplaceholder.typicode.com/posts/'
const options2 = {
    method:'HEAD',
}

fetch(url, options)
.then(response => console.log(response.headers.forEach(header => console.log(header))))

fetch(url, options)
.then(response => console.log(response))

// CORS

fetch('https://www.google.com')
.then(response => response.text())
.then(respostaText => console.log(respostaText))