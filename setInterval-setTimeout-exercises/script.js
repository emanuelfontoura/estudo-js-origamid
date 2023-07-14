// EXERCÍCIO 1
function mudarClasse(){
    document.body.classList.toggle('active')
}

setInterval(mudarClasse, 2000)

// EXERCÍCIO 2
const btnCronometro = document.querySelectorAll('[data-cronometro]')
const contador = document.querySelector('[data-cronometro =contador]')
let i = 0
let c

btnCronometro.forEach((btn) => {
    btn.addEventListener('click', crono)
})

function crono(event){
    let btn = event.target.dataset.cronometro
    switch (btn){
        case 'start':
            c = setInterval(() => {
                i++
                contador.innerText = i
            }, 1000)
            break
        case 'pause':
            clearInterval(c)
            break
        case 'reset':
            i = 0
            contador.innerText = i
            clearInterval(c)
            break
    }
}