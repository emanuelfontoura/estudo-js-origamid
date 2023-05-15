// EXERCÍCIO 1

const transacoes = [
    {
      descricao: 'Taxa do Pão',
      valor: 'R$ 39',
    },
    {
      descricao: 'Taxa do Mercado',
      valor: 'R$ 129',
    },
    {
      descricao: 'Recebimento de Cliente',
      valor: 'R$ 99',
    },
    {
      descricao: 'Taxa do Banco',
      valor: 'R$ 129',
    },
    {
      descricao: 'Recebimento de Cliente',
      valor: 'R$ 49',
    },
]

var somaTaxa = 0

transacoes.forEach((taxa) => {
    if (taxa.descricao.slice(0, 4).toUpperCase() === "TAXA"){
        const valorTaxa = +taxa.valor.slice(3)
        somaTaxa += valorTaxa
    }
})

console.log(somaTaxa)

// EXERCÍCIO 2

const transportes = 'Carro;Avião;Trem;Ônibus;Bicicleta';

console.log(transportes.split(";"))

// EXERCÍCIO 3

const html = `<ul>
                <li><span>Sobre</span></li>
                <li><span>Produtos</span></li>
                <li><span>Contato</span></li>
              </ul>`;

const newHtml = html.replace(/span/g, "a")
console.log(newHtml)

// EXERCÍCIO 4
const frase = 'Melhor do ano!';

console.log(frase[frase.length - 1])

// EXERCÍCIO 5
const transacoes2 = ['Taxa do Banco', '   TAXA DO PÃO', '  taxa do mercado', 'depósito Bancário', 'TARIFA especial']

var totalTaxas = 0
transacoes2.forEach((item) => {
    if (item.trim().slice(0, 4).toUpperCase() === "TAXA"){
        totalTaxas++
    }
})

console.log(totalTaxas)