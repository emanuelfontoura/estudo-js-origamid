const larguraTela = window.innerWidth
const alturaTela = window.innerHeight

window.addEventListener('mousemove', coordenadasMouse)

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