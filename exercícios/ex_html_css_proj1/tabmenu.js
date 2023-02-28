const tabImagens = document.querySelectorAll('.js-tabmenu > img')
const tabConteudo = document.querySelectorAll('.js-tabconteudo > div')

tabImagens.forEach((itemImagens, indexImagens) => {
    itemImagens.addEventListener('click', () => {
        tabConteudo.forEach((itemConteudo, indexConteudo) => {
            if (indexImagens === indexConteudo){
                itemConteudo.classList.add('ativar')
            }else{
                itemConteudo.classList.remove('ativar')
            }
        })
    })
})
