// EXERCÍCIO 1
const btn = document.querySelector('button');
const btnStyles = getComputedStyle(btn);
const {backgroundColor, color, margin} = btnStyles
console.log(backgroundColor, color, margin)

// EXERCÍCIO 2
let cursoAtivo = 'JavaScript';
let cursoInativo = 'HTML';
[cursoAtivo, cursoInativo] = [cursoInativo, cursoAtivo]

console.log(cursoAtivo, cursoInativo)

// EXERCÍCIO 3
const cachorro = {
    nome: 'Bob',
    raca: 'Labrador',
    cor: 'Amarelo'
}
  
const {cor:bobCor} = cachorro;
console.log(bobCor)