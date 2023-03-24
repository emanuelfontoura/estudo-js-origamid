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

function Carro(marcaAtribuido, precoAtribuido, taxaAtribuido){
    const precoFinal = precoAtribuido * taxaAtribuido

    this.taxa = taxaAtribuido
    this.marca = marcaAtribuido
    this.preco = precoFinal
}

const honda = new Carro('Honda', 35000, 1.2)

const fiat = new Carro('Fiat', 40000,  1.5)