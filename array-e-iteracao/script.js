// FOREACH(callback(item, index, array)) // retorna undefined
const carros = ["Fiat", "Ford", "Honda"]
carros.forEach((item, index, array) => {
    console.log(item, index, array)
})

const li = document.querySelectorAll("li")
li.forEach(item => item.classList.add('ativa'))

// MAP(callback(item, index, array)) // retorna nova array com os items alterados de acordo com a iteração
const valores = [2, 3, 5]

const novosValores = valores.map((valor, index, array) =>{
    return valor*2
})

console.log(novosValores)

const novosValoresx2 = novosValores.map(n => n * 2)

console.log(novosValoresx2)

// MAP EM ARRAYS DE OBJETOS
const aulas = [
    {
      nome: 'HTML 1',
      min: 15
    },
    {
      nome: 'HTML 2',
      min: 10
    },
    {
      nome: 'CSS 1',
      min: 20
    },
    {
      nome: 'JS 1',
      min: 25
    },
]

const tempoAulas = aulas.map(item => item.min)
console.log(tempoAulas)

function nomeAulas(aula){
  return aula.nome
}

const arrayNomeAulas = aulas.map(nomeAulas) // mesma coisa que fazer: aulas.map(item => nomeAulas(item)), que é o mesmo que fazer: aulas.map(item => item.nome)
console.log(arrayNomeAulas)

// REDUCE(callback(acumulador, item, index,array), valorInicial)
const aulasTempo = [10, 25, 30]
const total1 = aulasTempo.reduce((acumulador, itemAtual) => {
  return acumulador + itemAtual
}, 0) // esse 0 é o valorInicial

console.log(total1)

const total2 = aulasTempo.reduce((acc, cur) => acc + cur, 100)

console.log(total2)

// MAIOR VALOR COM REDUCE()
const numeros = [10, 25, 60, 5, 35, 10]

const maiorValor = numeros.reduce((acc, numeroAtual) => numeroAtual > acc ? numeroAtual : acc)

console.log(maiorValor)

// RETORNANDO UM OBJETO COM REDUCE()
const aulas2 = [
  {
    nome: 'HTML 1',
    min: 15
  },
  {
    nome: 'HTML 2',
    min: 10
  },
  {
    nome: 'CSS 1',
    min: 20
  },
  {
    nome: 'JS 1',
    min: 25
  },
]

const nomesAulas2 = aulas2.reduce((acc, cur, index) =>{
  acc[index] = cur.nome
  return acc
}, {})// DEFINIR O VALORINICIAL COMO UM OBJETO VAZIO OU ARRAY VAZIA

// REDUCERIGHT()
const frutas = ['Banana', 'Pêra', 'Uva'];

const frutasRight = frutas.reduceRight((acc, fruta) => acc + ' ' + fruta);
const frutasLeft = frutas.reduce((acc, fruta) => acc + ' ' + fruta);

console.log(frutasRight)
console.log(frutasLeft)

// SOME() - para no primeiro truthy que encontrar
const frutas2 = ["Banana", "Pêra", "Uva"]

const temUva = frutas2.some((fruta) => {
  return fruta == "Uva"
})

console.log(temUva)

// EVERY() - para no primeiro falsy que encontrar
const frutas3 = ["Banana", "Pêra", "Uva", ""]

const arrayNumero = frutas3.every((item) => {
  return typeof item !== "number"
})
console.log(arrayNumero)

const arrayCheia = frutas3.every(item => item)
console.log(arrayCheia)

// FIND()
const numeros2 = [6, 22, 43, 88, 101, 29]

const buscaMaior45 = numeros2.find(num => num > 45)
console.log(buscaMaior45)

// FINDINDEX()
const frutas4 = ["Banana", "Pêra", "Uva", "Maçã"]

const buscaUva = frutas4.findIndex(item => item === "Uva")
console.log(buscaUva)

// FILTER()
const frutas5 = ['Banana', undefined, null, '', 'Uva', 0, 'Maçã']

const arrayFrutas = frutas5.filter(fruta => fruta)
console.log(arrayFrutas)

const numeros3 = [6, 43, 22, 88, 101, 29]

const filtrarMaior45 = numeros3.filter(num => num > 45)
console.log(filtrarMaior45)

// FILTER() EM ARRAY DE OBJETOS
const aulas3 = [
  {
    nome: 'HTML 1',
    min: 15
  },
  {
    nome: 'HTML 2',
    min: 10
  },
  {
    nome: 'CSS 1',
    min: 20
  },
  {
    nome: 'JS 1',
    min: 25
  },
]

const aulaMaior15 = aulas3.filter(item => item.min > 15)
console.log(aulaMaior15)