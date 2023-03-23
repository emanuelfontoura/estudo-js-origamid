// const Dom = {
//     seletor: 'li',

//     element(){
//         return document.querySelector(this.seletor)
//     },

//     ativo(){
//         this.element().classList.add('ativo')
//     },

//     remover(){
//         this.element().classList.remove('ativo')
//     },
// }


// OBJETO DE CIMA ESCRITO EM CONSTRUCTOR FUNCTION (JEITO CERTO):

function Dom(seletorAtribuido){
    this.seletor = seletorAtribuido

    this.element = function(){
        return document.querySelector(seletorAtribuido)
    }

    this.ativo = function(classe){
        this.element().classList.add(classe)
    }

    this.remover = function(classe){
        this.element().classList.remove(classe)
    }
}

const li = new Dom('li')
const ul = new Dom('ul')
const lastLi = new Dom('li:last-child')