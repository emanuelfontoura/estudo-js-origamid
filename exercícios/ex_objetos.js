function declarando_filme(nome, ano, autor){
    const new_nome = nome.toUpperCase()
    const new_ano = 2023 - ano
    const nome_autor = nome + " por " + autor

    const filme = {
        new_nome,
        new_ano,
        nome_autor,
    }

    return filme
}

const retorno = declarando_filme("O senhor dos anéis", 1954, "J. R. R. Tolkien")

console.log(retorno.nome_autor)