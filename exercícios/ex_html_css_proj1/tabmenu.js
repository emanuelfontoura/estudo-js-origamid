const tabImagens = document.querySelectorAll('.js-tabmenu > img')
const tabConteudo = document.querySelectorAll('.js-tabconteudo > div')

if (tabConteudo.length && tabImagens.length){
    tabConteudo[0].classList.add('ativar')

    function activeTab (index){
        tabConteudo.forEach((conteudoItem) => {
            conteudoItem.classList.remove('ativar')
        })
        tabConteudo[index].classList.add('ativar')
    }

    tabImagens.forEach((imagemItem, imagemIndex) => {
        imagemItem.addEventListener('click', () => {
            activeTab(imagemIndex)
        })
    })
}