// FACTORY FUNCTION

function criarPessoa(nome, sobrenome){
  const nomeCompleto = `${nome} ${sobrenome}`

  function andar(){
    return `${nomeCompleto} andou!`
  }

  function nadar(){
    return `${nomeCompleto} nadou!`
  }

  return Object.freeze({
    nome,
    sobrenome,
    andar,
    nadar
  })
}

console.log(criarPessoa('Emanuel', 'Fontoura'))

// CONSTRUCTOR FUNCTION

function Carro(nome, ano){
  this.nome = nome
  this.ano = ano
  this.andar = function(){
    return `Carro modelo ${this.nome} de ano ${this.ano} andou!`
  }
}

console.log(new Carro('Honda', 2018).andar())

// CONSTRUCTOR FUNCTION SEM USAR NEW

function Moto(modelo, ano){
  if(!(this instanceof Moto)){
    return new Moto(modelo, ano)
  }
  this.modelo = modelo
  this.ano = ano
}

const honda = Moto('Honda', 2018)

console.log(honda)

// CLASS

class Casa{
  constructor(tamanho, valor){
    this.tamanho = tamanho
    this.valor = valor
  }

  anunciar(){
    return `Casa de tamanho ${this.tamanho} m2 com valor de R$${this.valor},00`
  }
}

console.log(new Casa(72, 50000).anunciar())