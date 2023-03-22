const Dom = {
    seletor: 'li',

    element(){
        return document.querySelector(this.seletor)
    },

    ativo(){
        this.element().classList.add('ativo')
    },

    remover(){
        this.element().classList.remove('ativo')
    },
}
