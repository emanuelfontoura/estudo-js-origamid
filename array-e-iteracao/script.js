// FOREACH(callback(item, index, array)) // retorna undefined
const carros = ["Fiat", "Ford", "Honda"]
carros.forEach((item, index, array) => {
    console.log(item, index, array)
})

const li = document.querySelectorAll("li")
li.forEach(item => item.classList.add('ativa'))

// MAP(callback(item, index, array)) // retorna nova array com os items alterados de acordo com a iteração
const valores = [2, 3, 5]

const novosValores = valores.map((valor, index, array) =>{
    return valor*2
})

console.log(novosValores)

const novosValoresx2 = novosValores.map(n => n * 2)

console.log(novosValoresx2)

// MAP EM ARRAYS DE OBJETOS
const aulas = [
    {
      nome: 'HTML 1',
      min: 15
    },
    {
      nome: 'HTML 2',
      min: 10
    },
    {
      nome: 'CSS 1',
      min: 20
    },
    {
      nome: 'JS 1',
      min: 25
    },
  ]

  const tempoAulas = aulas.map(item => item.min)
  console.log(tempoAulas)

  function nomeAulas(aula){
    return aula.nome
  }

  const arrayNomeAulas = aulas.map(nomeAulas) // mesma coisa que fazer: aulas.map(item => nomeAulas(item)), que é o mesmo que fazer: aulas.map(item => item.nome)
  console.log(arrayNomeAulas)

  // REDUCE(callback(acumulador, item, index,array), valorInicial)
  const aulasTempo = [10, 25, 30]
  const total1 = aulasTempo.reduce((acumulador, itemAtual) => {
    return acumulador + itemAtual
  })

  console.log(total1)

  const total2 = aulasTempo.reduce((acc, cur) => acc + cur, 100)

  console.log(total2)