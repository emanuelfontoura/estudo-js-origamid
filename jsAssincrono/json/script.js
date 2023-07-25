fetch('./dados2.json')
.then(r => r.json())
.then(rJson => {
    rJson.forEach(item => {
        console.log(item)
    })
})

// JSON.parse(stringJSON) => converte uma string JSON em um objeto JavaScript

const textoJSON = '[{"id":1, "nome":"Emanuel"}, {"id":2, "nome": "João"}]'
const textoOBJ = JSON.parse(textoJSON)
console.log(textoOBJ)

// JSON.stringify(objJSON) => transforma um objeto JavaScript em uma string JSON

const objJS = {
    id: 1,
    nome: "Emanuel",
    cidade: "Cachoeiro",
    idade: 19
}

const stringJSON = JSON.stringify(objJS)

console.log(stringJSON)

// EXEMPLO REAL
const configuracoes = {
    player: "Google",
    tempo: 25.5,
    aula: "2.1 JavaScript"
}

localStorage.config = JSON.stringify(configuracoes)

const objConfig = JSON.parse(localStorage.config)
console.log(objConfig)

// LOCALSTORAGE
localStorage.nome = "Emanuel"
console.log(localStorage.nome)