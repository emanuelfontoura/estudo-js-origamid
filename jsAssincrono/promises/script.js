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

const retorno = promessa3.then(resolucao => resolucao)
console.log(retorno)

// ENCADEAMENTO DE PROMISES E USO DO CATCH

const promessa4 = new Promise((resolve, reject) => {
    let condicao = false
    if(condicao){
        resolve({nome: 'Emanuel', idade: 18})
    }else{
        reject(Error('Ocorreu um erro na promise.'))
    }
})

const retorno2 = promessa4.then(arg => {
    arg.profissao = 'Desenvolvedor'
    return arg
})
.then(arg2 => {
    arg2.sexo = 'M'
    console.log(arg2)
    return arg2
})
.catch(rejeitada => {
    console.log(rejeitada)
})

// USO DO THEN(RESOLVE, REJECT) E DO FINALLY
const promessa5 = new Promise((resolve, reject) => {
    let condicao = false
    if(condicao){
        resolve('ACERTO!')
    }else{
        reject(Error('ERRO'))
    }
})

promessa5.then(resolucao => {
    console.log('Tudo certo!')
}, reject => {
    console.log('Um erro ocorreu.')
})
.finally(() => {
    console.log('A promise foi terminada.')
})

// PROMISE.ALL()
const login = new Promise((resolve, reject) => {
    setTimeout(() => {
        resolve('Usuário logado.')
    }, 1000)
})

const dados = new Promise((resolve, reject) => {
    setTimeout(() => {
        resolve('Dados carregados.')
    }, 1500)
})

const tudoCarregado = Promise.all([login, dados])

tudoCarregado.then(resolucao => console.log(resolucao))

// PROMISE.RACE()
const primeiroCarregado = Promise.race([login, dados])

primeiroCarregado.then(resolucao => console.log(resolucao))