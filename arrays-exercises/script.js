// EXERCÍCIO 1
const comidas = ['Pizza', 'Frango', 'Carne', 'Macarrão']

const primeiro = comidas.shift()
const ultimo = comidas.pop()

comidas.push("Arroz")
comidas.unshift("Peixe", "Batata")

console.log(primeiro, ultimo, comidas)

// EXERCÍCIO 2
const estudantes = ['Marcio', 'Brenda', 'Joana', 'Kleber', 'Julia']

estudantes.sort()
estudantes.reverse()
console.log(estudantes)
console.log(estudantes.includes("Joana"))
console.log(estudantes.includes("Juliana"))

// EXERCÍCIO 3
let html = `<section>
              <div>Sobre</div>
              <div>Produtos</div>
              <div>Contato</div>
            </section>`

html = html.split("section").join("ul").split("div").join("li")

console.log(html)

// EXERCÍCIO 4
const carros = ['Ford', 'Fiat', 'VW', 'Honda']

const copiaCarros = carros.slice()

carros.pop()

console.log(copiaCarros)
console.log(carros)