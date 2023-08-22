// ITERABLE ELEMENTS
const a = [1, 2, 3]
console.log(a.__proto__) // AQUI VC ENCONTRA O SYMBOL.ITERATOR, QUE DEFINE QUE ISSO É UM ELEMENTO ITERÁVEL

// FOR...OF -> só pode ser usado em elementos iteráveis e mostra o item em si
for(var item of a){
    console.log(item)
}

const obj = {
    nome:'Emanuel',
    idade:18,
    sexo:'Masculino'
}

// for(var key of obj){ // NÃO É ITERÁVEL, POIS OBJ NÃO POSSUI SYMBOL.ITERATOR
//     console.log(key)
// }

// FOR...OF E SPREAD
console.log(...a) // faz o mesmo que o FOR...OF

// FOR...IN -> pode ser usado em itens iteráveis e em objetos também, podendo mostrar a key e o value
for(var key in obj){
    console.log(`Key: ${key}  //  Value: ${obj[key]}`)
}

for(var index in a){
    console.log(`Index: ${index}  //  Item: ${a[index]}`)
}