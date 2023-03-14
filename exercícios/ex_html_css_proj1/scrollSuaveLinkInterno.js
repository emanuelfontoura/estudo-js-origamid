const linksInternos2 = document.querySelectorAll('.js-menu a[href^="#"]')

function scrollToSection (event) {
    event.preventDefault
    const href = event.currentTarget.getAttribute('href')
    const section = document.querySelector(href)
    console.log(section)
}

linksInternos2.forEach((link) => {
    link.addEventListener('click', scrollToSection)
})