const larguraTela = window.innerWidth
const alturaTela = window.innerHeight

window.addEventListener('mousemove', coordenadasMouse)

/** @param {MouseEvent} event */
function coordenadasMouse(event){
    const coordenadas = {
        x: event.x,
        y: event.y,
    }

    // console.log(coordenadas)
}

window.addEventListener('scroll', scroll)

function scroll(event){
    console.log(window.scrollY)
}

window.addEventListener('scroll', animar_scroll)
var elementos = window.document.querySelectorAll('[data-anime]')

function animar_scroll(event){
    for (var c=0; c < elementos.length; c++){
        if (window.scrollY > elementos[c].offsetTop * 0.2){
            elementos[c].classList.add('animate')
            elementos[c].innerText = "APARECEU"
        }else{
            elementos[c].classList.remove('animate')
        }
    }
}