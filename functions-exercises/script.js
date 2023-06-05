// EXERCÍCIO 1
const p = document.querySelectorAll('p')

const totalCaracter = Array.prototype.reduce.call(p, (acc, item) => {
  acc += item.innerText.length
  return acc
}, 0)

console.log(totalCaracter)

// EXERCÍCIO 2
function newHtmlElement(tag, classe, conteudo){
  const element = document.createElement(tag)
  conteudo && typeof conteudo == 'string' ? element.innerText = conteudo : ''
  classe && typeof classe == 'string' ? element.classList.add(classe) : '' // verifica se é uma string e se existe
  return element
}

console.log(newHtmlElement('p', 'paragrafo', 2).outerHTML)

// EXERCÍCIO 3
const h1Element = newHtmlElement.bind(null, 'h1', 'titulo')

console.log(h1Element('MEU TÍTULO').outerHTML)