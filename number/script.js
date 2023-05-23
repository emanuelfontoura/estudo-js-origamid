const number1 = 99 // RETORNA UM NUMBER
const number2 = new Number(99) // RETORNA UM OBJETO

// ISNAN
console.log(Number.isNaN(NaN))
console.log(Number.isNaN(4+5))

// ISINTEGER
console.log(Number.isInteger(20))
console.log(Number.isInteger(20.5))

// PARSEFLOAT
console.log(Number.parseFloat("99"))
console.log(Number.parseFloat("a99"))
console.log(Number.parseFloat("R$ 99"))

// PARSEINT
console.log(Number.parseInt("AF10", 16))
console.log(Number.parseInt("0101", 2))

// TOFIXED
const preco = 2.99

console.log(preco.toFixed(1))
console.log((99.20).toFixed(1))

// TOSTRING
const preco2 = 2.99
const hex = 10

console.log(preco2.toString(10))
console.log(hex.toString(16))

// TOLOCALESTRING
let preco3 = 20.99

preco3 = preco3.toLocaleString("pt-BR", {style: "currency", currency: "BRL"})

console.log(preco3)

// MESMA COISA QUE O TOLOCALESTRING, PORÉM SEM USAR O MÉTODO

let preco4 = 21.5
preco4 = preco4.toString(10)
preco4 = "R$ " + preco4.replace(/[.]/g, ",")

console.log(preco4)