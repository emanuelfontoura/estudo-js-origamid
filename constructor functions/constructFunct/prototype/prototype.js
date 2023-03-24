function Person(name, age){
   this.name = name
   this.age = age
}

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

const pais = 'Brasil'
const numero = 100