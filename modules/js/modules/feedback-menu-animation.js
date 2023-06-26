export default function feedbackMenu(){
   const linksInternos = document.querySelectorAll('a[href^="#"], a[href^="http"]')

    function handleLink(event){
        event.preventDefault()
        linksInternos.forEach((link) => {
            link.classList.remove('on')
            link.classList.add('off')
        })
        event.currentTarget.classList.add('on')
        event.currentTarget.classList.remove('off')
    }

    linksInternos.forEach((item) => {
        item.addEventListener('click', handleLink)
    })
}