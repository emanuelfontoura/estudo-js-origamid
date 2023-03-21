function scrollAnimate(){
    const elements = document.querySelectorAll('.js [data-animate]')

    if (elements.length){
        function animate(){
            elements.forEach((element) =>{
                const elementDistanceTop = element.getBoundingClientRect().top
                const windowHeight60 = window.innerHeight * 0.6
                const isElementVisible = (elementDistanceTop - windowHeight60) < 0
                
                if (isElementVisible){
                    element.classList.add('animate')
                }else{
                    element.classList.remove('animate')
                }
            })
        }
    }

    animate()

    window.addEventListener('scroll', animate)

}

scrollAnimate()