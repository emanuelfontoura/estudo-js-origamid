// EXERCÍCIO 1
const sectionCursos = Array.from(document.querySelectorAll(".curso"))

function Infos(titulo, descricao, aulas, horas){
    this.titulo = titulo
    this.descricao = descricao
    this.aulas = aulas
    this.horas = horas
}

const objInfos = sectionCursos.reduce((acc, cur, index) => {

    let tit = cur.querySelector("h1").innerText
    let desc = cur.querySelector("p").innerText
    let aul = cur.querySelector(".aulas").innerText
    let hor = cur.querySelector(".horas").innerText
    
    acc[index] = new Infos(tit, desc, aul, hor)
    return acc
}, [])

// CORRIGINDO EXERCÍCIO 1
const sectionCursos2 = Array.from(document.querySelectorAll(".curso"))

const objInfos2 = sectionCursos2.map(item => {
  return {
    titulo: item.querySelector("h1").innerText,
    descricao: item.querySelector("p").innerText,
    aulas: item.querySelector(".aulas").innerText,
    horas: item.querySelector(".horas").innerText,
  }
})

// EXERCÍCIO 2
const numeros = [3, 44, 333, 23, 122, 322, 33]

const maiores100 = numeros.filter(item => item > 100)

// EXERCÍCIO 3
const instrumentos = ['Guitarra', 'Baixo', 'Bateria', 'Teclado']

const temBaixo = instrumentos.some(item => item.toUpperCase() === "BAIXO")

// EXERCÍCIO 4
const compras = [
    {
      item: 'Banana',
      preco: 'R$ 4,99'
    },
    {
      item: 'Ovo',
      preco: 'R$ 2,99'
    },
    {
      item: 'Carne',
      preco: 'R$ 25,49'
    },
    {
      item: 'Refrigerante',
      preco: 'R$ 5,35'
    },
    {
      item: 'Quejo',
      preco: 'R$ 10,60'
    }
]

const valorTotal = compras.reduce((acc, cur) => {
    acc += Number(cur.preco.replace("R$ ", "").replace(",", "."))
    return acc
}, 0)