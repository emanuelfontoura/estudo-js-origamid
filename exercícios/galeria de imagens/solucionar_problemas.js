const imagens = Array.from(window.document.querySelectorAll('.img-container ul li img'))

var visualizacao = window.document.querySelector('.img-container > img')

imagens.forEach(galeriaClick)

function galeriaClick(img){
    img.addEventListener('click', galeriaTrocar)
}

function galeriaTrocar(event){
    visualizacao.src = event.currentTarget.src
    visualizacao.alt = event.currentTarget.alt
}