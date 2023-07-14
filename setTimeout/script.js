// SETTIMEOUT PASSANDO FUNCTION
function espera(texto){
    console.log(texto)
}

setTimeout(espera, 1000, 'Depois de 1s')

// SETTIMEOUT PASSANDO ARROW FUNCTION
setTimeout(()=> {
    console.log('OLÁ')
}, 2000)

// SETTIMEOUT NÃO ESPERA OUTROS SETTIMEOUT
for(let i = 1; i < 10; i++){
    setTimeout(() => {
        console.log('NÃO ESPERA')
    }, 1000)
}

// LOOPING FUNCIONAL COM SETTIMEOUT
for(let i = 1; i < 10; i++){
    setTimeout(() => {
        console.log(i)
    }, 1000 * i)
}

// THIS NO SETTIMEOUT
const btn = document.querySelector('button')
btn.addEventListener('click', handleClick)

function handleClick(){
    handleClick2()
    setTimeout(() => {
        this.classList.add('active')
        console.log(this)
    }, 1000)
}

function handleClick2(){
    setTimeout(function (){ // SÓ FUNCIONA COM ARROW FUNCTION
        this.classList.add('active')
        console.log(this)
    }, 1000)
}