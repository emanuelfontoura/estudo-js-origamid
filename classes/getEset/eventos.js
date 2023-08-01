class Button{
    constructor(text, bg){
        this.text = text
        this.bg = bg
    }

    get element(){
        return this.value || null
    }
    set element(value){
        return this.value = value
    }

    get mostrar(){ // MÉTODO COM VALOR FIXO
        return 'MOSTREI'
    }
}

const newBtn = new Button('CLIQUE', 'blue')

newBtn.element = 'oi'
console.log(newBtn.element)
console.log(newBtn.mostrar)

// MÉTODO APENAS COM SET

class Frutas{
    constructor(){
        this.lista = []
    }

    set novaFruta(fruta){
        this.lista.push(fruta)
    }
}

const listaFrutas = new Frutas()

listaFrutas.novaFruta = 'Banana'
listaFrutas.novaFruta = 'Morango'

console.log(listaFrutas.lista)

// OUTRO EXEMPLO

class Button2{
    constructor(text, bg){
        this.text = text
        this.bg = bg
    }

    get element(){
        const elementType = this.type || 'button'
        const btn = document.createElement(elementType)
        btn.innerText = this.text
        btn.style.backgroundColor = this.bg
        return btn
    }

    set element(type){
        return this.type = type
    }
}

const btnObj = new Button2('CLIQUE', 'blue')
btnObj.element = 'a'
btnObj.type = 'div'

console.log(btnObj.element)