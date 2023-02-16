const caixa = window.document.querySelector('button.caixa')

caixa.addEventListener('click', (event) => {
    console.log(event.currentTarget)
    console.log(event.target)
    console.log(event.type)
    console.log(event.path)
})


const link = window.document.querySelector('body > a')

link.addEventListener('click', (event) => {
    event.preventDefault()
    console.log('EVENTO PREVENIDO, VOCÊ NÃO SERÁ REDIRECIONADO!')
})

link.addEventListener('click', handleClick)

function handleClick(event){
    console.log(this)
    console.log(event.currentTarget)
}

const body = window.document.querySelector('body')

body.addEventListener('keydown', handleKeyboard)

function handleKeyboard(event){
    if (event.key === 'a'){
        this.classList.toggle('azul')
    }
}