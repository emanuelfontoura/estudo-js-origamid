// FUNCTION EXPRESSION

const somar = function(a, b){
  return a + b
}
console.log(somar(4, 4))

// FUNCTION EXPRESSION + ARROW FUNCTION

const quadrado = a => a*a
console.log(quadrado(4))

const somar2 = (a, b) => a+b
console.log(somar2(4, 5))

const active = callback => callback();

active(() => {
  console.log('active')
})

// IIFE's

// (function () {

// })()