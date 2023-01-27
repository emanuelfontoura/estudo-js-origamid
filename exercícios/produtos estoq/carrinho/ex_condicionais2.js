const buttonAdd = window.document.querySelector('button.buttonAdd')
const contador = window.document.querySelector('div.contador')

if (buttonAdd){
    buttonAdd.addEventListener('click', somar)
}

function somar(){
    if(Number(contador.innerText) < 10){
        const somado = Number(contador.innerText) + 1
        contador.innerText = somado
    }else{
        console.log("Limite máximo atingido!")
        window.alert("Limite máximo atingido!")
    }
}