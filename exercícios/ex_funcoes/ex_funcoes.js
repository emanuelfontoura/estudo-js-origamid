function isTruthy(element){
    if (element){
        console.log('O elemento é truthy!')
    }else{
        console.log('O elemento é falsy!')
    }
}

isTruthy(-0)

function isPar(numero){
    if (numero % 2 == 0){
        console.log('É par!')
    }else{
        console.log('É ímpar!')
    }
}

isPar(143)

function nomeCompleto(nome, sobrenome){
    console.log(`Nome: ${nome} ${sobrenome}`)
}

nomeCompleto('Emanuel', 'Fontoura')

window.addEventListener('scroll', () => {
    console.log(nomeCompleto('Emanuel', 'Fontoura'))
})