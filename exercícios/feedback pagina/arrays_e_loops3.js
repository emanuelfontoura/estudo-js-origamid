const links = window.document.querySelectorAll('nav ul li a')

links.forEach(ativarLink)

function ativarLink(item){
    if (item.href == document.location.href){
        item.style.backgroundColor = 'black'
        item.style.color = 'white'
    }
}