const lista = ["JavaScript", "HTML", "CSS"]

lista.forEach(mostrar)

function mostrar (item, index){
    console.log(`Conteúdo: ${item}, Index: ${index}`)
    let body = window.document.querySelector('body')

    body.innerHTML += "<li>" + item + "<li>"
}