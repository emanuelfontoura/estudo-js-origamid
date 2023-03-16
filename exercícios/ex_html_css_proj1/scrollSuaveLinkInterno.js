function scrollSmooth(){
    const linksInternos2 = document.querySelectorAll('.js-menu a[href^="#"]')

    function scrollToSection (event) {
        event.preventDefault
        const href = event.currentTarget.getAttribute('href')

        // FORMA 1

        // const sectionTop = document.querySelector(href).offsetTop
        // window.scrollTo({
        //     top: sectionTop,
        //     behavior: 'smooth',
        // })

        // FORMA 2

        const section = document.querySelector(href)

        section.scrollIntoView({
            behavior: 'smooth',
            block: 'start',
        })
    }

    linksInternos2.forEach((link) => {
        link.addEventListener('click', scrollToSection)
    })
}

scrollSmooth()