// JEITO ERRADO

// const carro = {
//     marca: 'Marca',
//     preco: 0,
// }

// const honda = carro
// honda.marca = 'Fiat'
// honda.preco = 35000

// console.log(honda.marca)

// JEITO CERTO

function Carro(){
    this.marca = 'Marca'
    this.preco = 0
}

const honda = new Carro()
honda.marca = 'Honda'
honda.preco = 35000
