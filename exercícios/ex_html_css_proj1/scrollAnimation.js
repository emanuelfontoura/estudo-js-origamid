function scrollAnimate(){
    const elements = document.querySelectorAll('[data-animate]')

    function animate(){
        elements.forEach((element) =>{
            if (window.scrollY + window.scrollY * 1.2 >= element.offsetTop){
                element.classList.add('animate')
            }else{
                element.classList.remove('animate')
            }
        })
    }

    window.addEventListener('scroll', animate)
}

scrollAnimate()