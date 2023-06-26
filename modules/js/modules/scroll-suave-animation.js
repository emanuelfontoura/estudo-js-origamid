export default function scrollSmooth(){
    const linksInternos2 = document.querySelectorAll('[data-tab="menu"] a[href^="#"]')

    function scrollToSection (event) {
        event.preventDefault
        const href = event.currentTarget.getAttribute('href')

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