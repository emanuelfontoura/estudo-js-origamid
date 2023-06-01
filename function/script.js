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

// EXEMPLO REAL
function Dom(seletor){
  this.element = document.querySelector(seletor)
}

Dom.prototype.ativo = function(classe){
  this.element.classList.add(classe)
}

const ul = new Dom('ul')

const li = {
  element: document.querySelector('li')
}

// ul.ativo.call(li, 'ativar') // o THIS se torna "li"
Dom.prototype.ativo.call(li, 'ativar')

// USANDO EM ARRAYS
const frutas = ['Uva', 'Maça', 'Banana']

Array.prototype.mostrarThis = function(){
  console.log(this)
}

const li2 = document.querySelectorAll('li')

const filtro = Array.prototype.filter.call(li2, item => {
  return item.classList.contains('ativo')
})

console.log(filtro)

// APPLY(this, [arg1, arg2, ...])
const numeros = [3, 4, 6, 1, 34, 44, 32]
console.log(Math.max.apply(null, numeros))
console.log(Math.max.call(null, ...numeros))

// BIND(this, arg1, arg2, ...)
const li3 = document.querySelectorAll('li')

const filtrarLi = Array.prototype.filter.bind(li3, item => {
  return item.classList.contains('ativo')
})

const liFiltrada = filtrarLi()
console.log(liFiltrada)

// EXEMPLO DE USO DO BIND
const $ = document.querySelectorAll.bind(document)

console.log($('li'))
console.log($('ul'))

// OUTRO EXEMPLO DE USO
const carro2 = {
  marca: 'Ford',
  ano: 2018,
  
  acelerar: function(a, t){
    return `${this.marca} acelerou ${a}km/h em ${t}s`
  }
}

console.log(carro2.acelerar(200, 20))

const carro3 = {
  marca: 'Chevrolet'
}

const acelerarCarro3 = carro2.acelerar.bind(carro3)
console.log(acelerarCarro3(100, 10))

// BIND() COM ARGUMENTO PADRÃO
function imc (altura, peso){
  return peso / (altura**2)
}

const imc180 = imc.bind(null, 1.80)

console.log(imc(1.6, 70))
console.log(imc180(70))