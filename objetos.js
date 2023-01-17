// OBJETO //
const livro = {
    // PROPRIEDADES //
    nome: "O senhor dos anéis",
    ano: 1954,
    autor: "J. R. R. Tolkien",

    // METÓDOS //
    mostrar: function(){
        console.log("Ativou o metódo!")
    },
} 

// ATIVANDO O METÓDO //
livro.mostrar()

// ACESSANDO UMA PROPRIEDADE DO OBJETO //
console.log(2023 - livro.ano)

// TUDO EM JS É UM OBJETO, UMA SIMPLES VARIÁVEL CRIADA, TORNA-SE UM OBJETO DENTRO DO JS COM VÁRIAS PROPRIEDADES E METÓDOS //

const teste = livro.autor.toUpperCase() // ACESSANDO UMA PROPRIEDADE DO OBJETO LIVRO (autor) E APLICANDO UM METÓDO STRING DESSA PROPRIEDADE (toUpperCase()) //

console.log(teste)