// DESTRUCTURING
const carro = {
    marca:'Fiat',
    ano:2018,
    portas:4,
}

const {marca, ano} = carro

console.log(marca)
console.log(ano)

// EXEMPLO
const cliente = {
    nome:'Emanuel',
    compras:{
        digitais:{
            livros:['Livro 1', 'Livro 2'],
            videos:['Video 1', 'Video 2']
        },
        fisicas:{
            cadernos:['Caderno 1', 'Caderno 2']
        }
    }
}

const {digitais, fisicas, digitais:{livros, videos}} = cliente.compras // CRIADAS QUATRO VARIÁVEIS: digitais, fisicas, livros e videos

console.log(digitais, fisicas, livros, videos)