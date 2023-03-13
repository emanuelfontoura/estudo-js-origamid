function initAccordion(){
    const perguntas = document.querySelectorAll('.faq-lista > dt')
    const activeClass = 'ativo'
    const activeAccordionClass = 'ativoAccordion'

    if (perguntas.length){
        perguntas[0].classList.add(activeClass)
        perguntas[0].nextElementSibling.classList.add(activeAccordionClass)

        function activeAccordion(){
            this.classList.toggle(activeClass)
            this.nextElementSibling.classList.toggle(activeAccordionClass)
        }

        perguntas.forEach((dt) => {
            dt.addEventListener('click', activeAccordion)
        })
    }
}