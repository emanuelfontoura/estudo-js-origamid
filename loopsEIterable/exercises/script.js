// EXERCÍCIO 1
const li = document.querySelectorAll('li')
for(var item of li){
    item.classList.add('ativo')
    console.log(item)
}

// EXERCÍCIO 2
for(var key in window){
    console.log(`Key: ${key}  //  Value: ${window[key]}`)
}