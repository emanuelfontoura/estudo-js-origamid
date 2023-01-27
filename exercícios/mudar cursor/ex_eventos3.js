const circle = window.document.querySelector('div.circle')

window.addEventListener('mousemove', circlePoint)

/** @param {MouseEvent} event */
function circlePoint(event){
    circle.style.left = event.x + "px"
    circle.style.top = event.y + "px"
}