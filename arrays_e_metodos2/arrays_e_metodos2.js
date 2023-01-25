const links = Array.from(window.document.querySelectorAll('nav ul li a'))

const ultimo_link = links.pop()

links.forEach(logLinks)

function logLinks(item){
    console.log(item.href)
}