function scrollAnimate(){
    const elements = document.querySelectorAll('[data-animate]')

    function animate(){
        elements.forEach((element) =>{
            if (window.pageYOffset + (window.innerHeight * 3 / 4) >= element.offsetTop){
                element.classList.add('animate')
            }else{
                element.classList.remove('animate')
            }
        })
    }

    window.addEventListener('scroll', animate)
}

scrollAnimate()