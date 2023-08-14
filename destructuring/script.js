// DESTRUCTURING EM OBJETOS
const carro = {
    marca:'Fiat',
    ano:2018,
    portas:4,
}

const {marca, ano} = carro // USA-SE CHAVES {}

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

// DESTRUCTURING DENTRO DE OUTRO DESTRUCTURING

const {digitais, fisicas, digitais:{livros, videos}} = cliente.compras // CRIADAS QUATRO VARIÁVEIS: digitais, fisicas, livros e videos

console.log(digitais, fisicas, livros, videos)

// DAR NOME A VARÍAVEL DENTRO DO DESTRUCTURING
const pessoa = {
    nome:'Emanuel',
    idade:18,
    sexo:'Masculino'
}

const {nome:nomePessoa, idade:idadePessoa} = pessoa

console.log(nomePessoa, idadePessoa)

// VALOR INICIAL E KEYS INEXISTENTES
const fornecedor = {
    nome:'Empresa',
    email:'empresa@gmail.com',
    uf:'ES',
    setor:'metalúrgico'
}

const {nome:nomeEmpresa, email:emailEmpresa, setor:setorEmpresa, patrimonio:patrimonioEmpresa = 'R$' + 1000} = fornecedor

console.log(patrimonioEmpresa)

// DESTRUCTURING EM ARRAYS
const frutas = ['Banana', 'Uva', 'Morango'] // USA-SE COLCHETES [] AO INVÉS DE CHAVES {}

const [primeira, segunda, terceira] = frutas
console.log(primeira, segunda, terceira)

// DESTRUCTURING PARA DECLARAÇÃO DE SEQUÊNCIA DE VARIÁVEIS
const [primeiro, segundo, terceiro] = ['Item 1', 'Item 2', 'Item 3']

// DESTRUCTURING EM ARGUMENTOS QUE RECEBEM OBJETOS OU ARRAYS
const btn = document.querySelectorAll('button')
btn.forEach(btn => {
    btn.addEventListener('click', handleClick)
})

function handleClick({target}){ // <- USA-SE ISSO AO INVÉS DE USAR function handleClick(event){event.target}
    console.log(target)
}