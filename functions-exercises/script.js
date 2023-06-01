// EXERCÍCIO 1
const p = document.querySelectorAll('p')

const totalCaracter = Array.prototype.reduce.bind(p, (acc, item) => {
  acc += item.innerText.length
  return acc
}, 0)

console.log(totalCaracter())