function $$(selectedElements){
    const elements = document.querySelectorAll(selectedElements)
    function hide(){
        elements.forEach(element => {
            element.style.display = 'none'
        })
        return this // COLOCA-SE ESSES RETURNS PARA PODER REALIZAR ENCADEAMENTOS
    }    
    function show(){
        elements.forEach(element => {
            element.style.display = 'initial'
        })
        return this
    }  
    function on(onEvent, callback){
        elements.forEach(element => {
            element.addEventListener(onEvent, callback)
        })
        return this 
    }
    function addClass(className){
        elements.forEach(element => {
            element.classList.add(className)
        })
        return this
    }
    function removeClass(className){
        elements.forEach(element => {
            element.classList.remove(className)
        })
        return this
    }
    return {
        elements,
        hide,
        show,
        on,
        addClass,
        removeClass
    }
}

function handleClick(){
    console.log('OI')
}

const li = $$('li')
li.on('click', handleClick)
li.addClass('active')
li.removeClass('active')