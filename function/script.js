// FORMAS DE CRIAR FUNÇÃO
function areaQuadrado(lado){
  return lado * lado
}

const perimetroQuadrado = new Function('lado', 'return lado * 4')

// PROPRIEDADES
console.log(areaQuadrado.length)
console.log(areaQuadrado.name)

// CALL(this, arg1, arg2, ...)
const carro = {
  marca: "Ford",
  ano: 2018
}

function descricaoCarro(nome){
  console.log(this.marca + ' ' + this.ano + ' | ' + 'Seu nome: ' + nome)
}

descricaoCarro.call(carro, 'Emanuel')

// CALL + FOREACH
const carros2 = ['Ford', 'Fiat', 'VW']

carros2.forEach.call(carros2, item => {
  console.log(item)
})