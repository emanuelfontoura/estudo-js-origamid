const frutas = "Banana, Melancia, Mamão" // retorna uma STRING
const frutas2 = new String('Melão') // retorna um OBJETO

console.log(frutas[0]) // SELEÇÃO DE CARACTERE DE STRING ATRAVÉS DO INDEX
console.log(frutas[frutas.length - 1]) // PEGA O ÚLTIMO CARACTERE

// INCLUDE
console.log(frutas.includes("Banana")) // TRUE OU FALSE

// ENDSWITH
console.log(frutas.endsWith("ão")) // TRUE OU FALSE

// STARTSWITH
console.log(frutas.startsWith('Ba')) // TRUE OU FALSE

// SLICE
console.log(frutas.slice(0, 6))
console.log(frutas.slice(-5))
console.log(frutas.slice(18))

// SUBSTRING
console.log(frutas.substring(0, 6))

// INDEXOF
console.log(frutas.indexOf("ã"))

// LASTINDEXOF
console.log(frutas.lastIndexOf("a"))

const precos = ["R$ 90", "R$ 100", "R$ 120"]

// PADSTART E PADEND
precos.forEach((preco) => {
    console.log(preco.padStart(10, "-"))
    console.log(preco.padEnd(9, ",00"))
})

const frase = "Ta"

// REPEAT
console.log(frase.repeat(5))

let listaItens = "Camisa Boné Bermuda Calça Vestido"
const preco = "R$ 1200,50"

// REPLACE
listaItens = listaItens.replace(/[ ]+/g, ", ")

console.log(listaItens)
console.log(preco.replace(",", "."))

// SPLIT
let listaItens2 = listaItens

let arrayItens = listaItens2.split(", ")
console.log(arrayItens)

// EXEMPLO DE USO DO SPLIT
htmlText = "<div>O melhor item</div><div>A melhor lista</div>"
htmlArray = htmlText.split('div')
htmlNovo = htmlArray.join('section')

console.log(htmlNovo)

// TOUPPERCASE E TOLOWERCASE
let nome = "Emanuel"

console.log(nome.toUpperCase())
console.log(nome.toLowerCase())

// TRIM, TRIMSTART, TRIMEND

let valor = "   R$ 23.00   "

console.log(valor.trim())
console.log(valor.trimStart())
console.log(valor.trimEnd())