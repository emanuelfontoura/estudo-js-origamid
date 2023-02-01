//EX 1
console.log('EXERCÍCIO 1')

const anosCopa = [1958, 1962, 1970, 1994, 2002]

anosCopa.forEach((ano) => {
    console.log(`O Brasil ganhou a copa de ${ano}`)
})

for (let c = 0; c < anosCopa.length; c++){
    console.log(`O Brasil ganhou a copa de ${anosCopa[c]}`)
}

//EX 2
console.log('EXERCÍCIO 2')

var ultimoAno = anosCopa[anosCopa.length - 1]

console.log(ultimoAno)