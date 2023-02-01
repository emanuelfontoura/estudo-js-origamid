// EX 1
console.log('EXERCÍCIO 1')

const dados = {
    nome: 'Emanuel Victor',
    sobrenome: 'Fontoura Cantalejo',
    CPF: 17895419722,
    idade: 18,
    sexo: 'masculino',

    mostrarNome(){
        console.log(`${this.nome} ${this.sobrenome}`)
    }
}

dados.mostrarNome()

// EX 2
console.log('EXERCÍCIO 2')

var carro = {
    preco: 1000,
    portas: 4,
    marca: 'Audi',
}

carro.preco = 3000

console.log(carro.preco)

// EX 3
console.log('EXERCÍCIO 3')

const cachorro = {
    raca: 'Labrador',
    cor: 'Preto',
    idade: 10,

    latir(sexo){
        if (sexo === 'Homem'){
            return 'AUAUAU'
        }else{
            return '...'
        }
    },
}

console.log(cachorro.latir('Homem'))