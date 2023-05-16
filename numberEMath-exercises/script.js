// EXERCÍCIO 1
let random = Math.floor(Math.random() * (2000 - 1050 + 1) + 1050)
console.log(random)

// EXERCÍCIO 2
const numeros = '4, 5, 20, 8, 9';

const arrayNumeros = numeros.split(", ")

const maiorNumero = Math.max(...arrayNumeros)

console.log(maiorNumero)

// EXERCÍCIO 3
const listaPrecos = ['R$ 59,99', ' R$ 100,222', 'R$ 230  ', 'r$  200'];

function limparPrecos (lista){
    let listaValores = []

    lista.forEach((preco) => {
        let precoValor = +preco.toUpperCase().replace("R$", "").trim().replace(",", ".")
        listaValores.push(Math.round(precoValor))
    })

    return listaValores
}

function somarValores(lista){
    let somaTotal = 0

    lista.forEach((valor) => {
        somaTotal += valor
    })

    return somaTotal
}

console.log(limparPrecos(listaPrecos))
console.log(somarValores(limparPrecos(listaPrecos)))