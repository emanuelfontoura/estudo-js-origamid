function Person(name, age){
   this.name = name
   this.age = age
}

// CRIAR MÉTODOS DIRETAMENTE NO PROTOTYPE
// ISSO EVITA COM QUE SEJA CRIADO TUDO DE NOVO AO INSTANCIAR UM NOVO OBJETO

Person.prototype.andar = function (){
    return this.name + ' andou!'
}

Person.prototype.nadar = function(){
    return this.name + ' nadou!'
}

Person.prototype.abracar = function(){
    return this.name + ' abraçou!'
}

const emanuel = new Person('Emanuel', 19)

// ------------------------------

// AMBOS TEM O MESMO RESULTADO
const lista = document.querySelectorAll('li')

    // ACESSA UM MÉTODO DECLARADO NO PROTOTYPE DA CONSTRUCTOR FUNCTION
const newListaPrototype = Array.prototype.slice.call(lista)

    // ACESSA UM MÉTODO DECLARADO DIRETAMENTE NA CONSTRUCTOR FUNCTION
const newListaObject = Array.from(lista)

// ------------------------------

// ACESSAR O NOME DAS PROPRIEDADES E MÉTODOS DOS ELEMENTOS OBJETOS
console.log(Object.getOwnPropertyNames(Person))
console.log(Object.getOwnPropertyNames(emanuel.__proto__))

// RETORNAR O NOME DO CONSTRUTOR DE UM ELEMENTO
console.log(emanuel.constructor)

const lista2 = [1, 2, 3]