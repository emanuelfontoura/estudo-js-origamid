const labelJoke = document.querySelector('[data-joke=label]')
const btnJoke = document.querySelector('[data-joke=btn]')

function randomJoke(){
    fetch('https://api.chucknorris.io/jokes/random')
    .then(resposta => resposta.json())
    .then(resposta => {
        labelJoke.innerText = `Piada do Chuck Norris: ${resposta.value}`
    })
}

randomJoke()
btnJoke.addEventListener('click', randomJoke)