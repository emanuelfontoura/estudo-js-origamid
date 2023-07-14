// SETINTERVAL
function loop(texto){
    console.log('ATIVOU')
}

setInterval(loop, 1000)

// SETINTERVAL COM LOOP
let i = 0
const contagem = setInterval(() => {
    console.log(i++)
    if(i > 10){
        clearInterval(contagem)
    }
}, 1000)