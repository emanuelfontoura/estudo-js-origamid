// EXERCÍCIO 1

function verificacao(dado){
    return Object.prototype.toString.call(dado).slice(8, -1)
}

const carro = {
    marca: 'Honda',
    ano: 2018,
}

const frutas = ['Banana', 'Uva']

console.log(verificacao(carro))
console.log(verificacao(frutas))

// EXERCÍCIO 2
const quadrado = {}
Object.defineProperties(quadrado, {
    lados:{
        value: 4,
        writable: false,
    }
})

// EXERCÍCIO 3
const configuracao = {
    width: 800,
    height: 600,
    background: '#333'
}

Object.freeze(configuracao)

// EXERCÍCIO 4
console.log(Object.getOwnPropertyNames(String.prototype))
console.log(Object.getOwnPropertyNames(Array.prototype))