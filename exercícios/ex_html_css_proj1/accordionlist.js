const perguntas = document.querySelectorAll('.faq-lista > dt')

const respostas = document.querySelectorAll('.faq-lista > dd')

function activeAccordion(){
    this.classList.toggle('ativar')
    this.nextElementSibling.classList.toggle('ativar')
}

perguntas.forEach((perguntaItem) => {
    perguntaItem.addEventListener('click', activeAccordion)
})