// TIPOS DE DADOS DE UMA ARRAY E COMO ACESSÁ-LOS
const dados = [new String('Tipo 1'), ['Carro', 'Portas', {cor: 'Azul', preco: 2000}], function andar(nome) { console.log(nome) }];

console.log(dados[1][2].cor)

dados[2]("Emanuel")

// FORMAS DE CRIA UMA ARRAY
const dados2 = [] // vazia
const dados3 = new Array(1, "Nome")
const dados3_1 = new Array(5) // Array com 5 posições
const dados4 = Array() // vazia
const dados4_1 = Array(5) // Array com 5 posições
const dados5 = Array.of(1, 2, 3)

// ARRAY.FROM()
const nodeLista = document.querySelectorAll("ul li") // Array like
const arrayLista = Array.from(nodeLista) // Array

const obj = {
    0: "Emanuel",
    1: "Teste1",
    2: "Teste2",
    length: 3,
}
const objArray = Array.from(obj)

console.log(nodeLista)
console.log(arrayLista)
console.log(obj)
console.log(objArray)

// ARRAY.ISARRAY()
console.log(Array.isArray(obj))
console.log(Array.isArray(objArray))

// ------------------------------------------------ 
// MÉTODOS MODIFICADORES (MUTATOR METHODS)

// SORT()
const frutas = ['Banana', 'Pêra', ['Uva Roxa', 'Uva Verde']]
frutas.sort()

console.log(frutas)

// UNSHIFT()
const carros = ['Ford', 'Fiat', 'VW']

carros.unshift("Kia", "Honda") // retorna 5
console.log(carros)

// PUSH() 
carros.push("Toyota", "Nissan") // retorna 7
console.log(carros)

// SHIFT()
const primeiroCarro = carros.shift()

console.log(primeiroCarro)
console.log(carros)

// POP()
const ultimoCarro = carros.pop()

console.log(ultimoCarro)
console.log(carros)

// REVERSE()
carros.reverse()

console.log(carros)

// SPLICE(index, remover, item1, item2, ...)
const itensRemovidos = carros.splice(1, 2, "ITEM1", "ITEM2")
carros.splice(1, 0, "ITEM1", "ITEM2")

console.log(itensRemovidos)
console.log(carros)

// COPYWITHIN(alvo, inicio, final)
console.log(["x0", "x1", "x2", "y0", "y1"].copyWithin(3, 0, 2))
console.log(["x0", "x1", "x2", "y0", "y1"].copyWithin(-2))

// FILL(valor, inicio, final)
console.log(["x0", "x1", "x2", "y0", "y1"].fill("x", 3))

// --------------------------------------
// MÉTODOS DE ACESSO

// CONCAT()
const motos = ["Moto 1", "Moto 2", "Moto 3"]
const carros2 = ["Carro 1", "Carro 2", "Carro 3"]

console.log(motos.concat(carros2))
console.log([].concat(motos, carros2, "Caminhão 1"))

// INCLUDES()
const linguagens = ['html', 'css', 'js', 'php', 'python', 'js']

console.log(linguagens.includes("js"))

// INDEXOF()
console.log(linguagens.indexOf("js"))

// LASTINDEXOF()
console.log(linguagens.lastIndexOf("js"))

// JOIN()
console.log(linguagens.join(" - "))

// SLICE()
const copiaArray = linguagens.slice(0)

console.log(copiaArray)