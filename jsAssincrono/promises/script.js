// PROMISE

const promessa1 = new Promise((resolve, reject) => {
    let condicao = true
    if(condicao){
        resolve('Argumento1')
    }else{
        reject('Argumento2')
    }
})

console.log(promessa1)

// PROMISE + THEN

const promessa2 = new Promise((resolve, reject) => {
    let condicao = true
    if(condicao){
        resolve('Argumento3')
    }else{
        reject('Argumento4')
    }
})

promessa2.then(argResolve => console.log('PEGA O ARGUMENTO DO RESOLVE DA PROMESSA 2: ' + argResolve))

// PROMISE + ASSÍNCRONO

const promessa3 = new Promise((resolve, reject) => {
    setTimeout(() => {
        resolve('Resolvida!')
    }, 1000)
})

promessa3.then(resolucao => console.log(resolucao + ' OLÁ'))

// ENCADEAMENTO DE PROMISES

const promessa4 = new Promise((resolve, reject) => {
    resolve('Etapa 1')
})

promessa4.then(arg => {
    console.log(arg)
    return 'Etapa 2'
}).then(arg2 => {
    console.log(arg2)
    return 'Etapa 3'
}).then(arg3 => {
    return arg3 + 4
}).then(arg4 => console.log(arg4))