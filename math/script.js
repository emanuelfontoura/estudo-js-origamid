// PROPRIEDADE "PI" DE MATH, EXISTEM OUTRAS PROPRIEDADES
console.log(Math.PI)

// ABS
console.log(Math.abs(-5))

// CEIL
console.log(Math.ceil(5.5))

// FLOOR
console.log(Math.floor(5.5))

// ROUND
console.log(Math.round(5.7))

// MAX
console.log(Math.max(1, 10, 15, 52, 34))
console.log(Math.min(1, 10, 15, 52, 34))

// RANDOM
console.log(Math.random()) // entre 0 e 1

let random1 = Math.floor(Math.random() * 100) // entre 0 e 100
console.log(random1)

let random2 = Math.floor(Math.random() * 500) // entre 0 e 500
console.log(random2)

let random3 = Math.floor(Math.random() * (64 - 20 + 1) + 20) // entre um intervalo numérico (min-max) em que sempre fazemos (max - min + 1) + min