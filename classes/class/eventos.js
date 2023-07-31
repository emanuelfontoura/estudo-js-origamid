// CONSTRUCTOR FUNCTION

function Button(text, bg){
    this.text = text
    this.bg = bg
}

Button.prototype.element = function(){
    const createBtn = document.createElement('button')
    createBtn.innerText = this.text
    createBtn.style.backgroundColor = this.bg
    return createBtn
}

let newBtn = new Button('Comprar', 'blue')
newBtn = newBtn.element()
document.body.appendChild(newBtn)

console.log(newBtn)

// CLASS

class Button2{
    constructor(text, bg){
        this.text = text
        this.bg = bg
    }

    element(){
        const newBtn = document.createElement('button')
        newBtn.innerText = this.text
        newBtn.style.backgroundColor = this.bg
        return newBtn
    }

    appendTo(target){
        const targetElement = document.querySelector(target)
        targetElement.appendChild(this.element())
    }
}

let newBtn2 = new Button2('Comprar2', 'red')

console.log(newBtn2)

// PROPRIEDADES RECEBEM QUALQUER VALOR

class Elemento{
    constructor(options){
        this.options = options
    }
}

const obj = {
    backgroundColor: 'blue',
    color: 'white',
    text: 'Clique',
    borderRadius: '4px'
}

const novoElemento = new Elemento(obj)

console.log(novoElemento.options)
console.log(novoElemento.options.backgroundColor)
console.log(novoElemento.options.text)

// STATIC

class Carro{
    constructor(nome, ano, km){
        this.nome = nome
        this.ano = ano
        this.km = km
    }
    static quilometragem(){ // SÓ PODE ACESSAR ATRAVÉS DA CLASS CARRO  
        return `O carro modelo ${this.nome} ano ${this.ano} já andou ${this.km} km.`
    }
}

const fiat = new Carro('Fiat Argo', '2018', '50000')

console.log(Carro.quilometragem.call(fiat)) // COM O CALL CONSIGO MUDAR O THIS DO MÉTODO PARA "FIAT"

// STATIC PARA RETORNAR A PRÓPRIA CLASS

class Div{
    constructor(text, bg){
        this.text = text
        this.bg = bg
    }
    element(){
        const elementDiv = document.createElement('div')
        elementDiv.innerText = text
        elementDiv.style.backgroundColor = bg
        return elementDiv
    }
    static createDiv(text, bg){
        return new Div(text, bg)
    }
    static createBlueDiv(text){
        return new Div(text, 'blue')
    }
}

const div1 = new Div('TESTE1', 'red')

console.log(div1)

const div2 = Div.createBlueDiv('TESTE2')

console.log(div2)