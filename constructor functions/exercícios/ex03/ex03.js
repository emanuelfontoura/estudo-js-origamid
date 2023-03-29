// EXERCÍCIO 01

function Pessoas(nome, sobrenome, idade){
    this.nome = nome
    this.sobrenome = sobrenome
    this.idade = idade
}

Pessoas.prototype.mostrarNome = function(){
    return `${this.nome} ${this.sobrenome} possui ${this.idade} anos.`
}

const emanuel = new Pessoas('Emanuel', 'Fontoura', 19)

// EXERCÍCIO 02

console.log(NodeList.prototype)
console.log(HTMLCollection.prototype)
console.log(Document.prototype)

// EXERCÍCIO 03

// Liste os construtores dos dados abaixo
const li = document.querySelector('li');

li; // HTMLLIElement
li.click; // Function
li.innerText; // String
li.value; // Number
li.hidden; // Boolean
li.offsetLeft; // Number
li.click(); // Error

// Qual o construtor do dado abaixo:
li.hidden.constructor.name; // String