const li = document.querySelectorAll('li')

li.forEach(li => li.addEventListener('click', handleClick))

function handleClick(event){
    event.preventDefault()
    const urlPage = event.target.href
    fetchPage(urlPage)
    window.history.pushState(null, null, urlPage)
}

function replaceContent(newText){
    const newHtml = document.createElement('div')
    newHtml.innerHTML = newText
    const oldContent = document.querySelector('[data-page=content]')
    oldContent
    const newContent = newHtml.querySelector('[data-page=content]')

    oldContent.innerHTML = newContent.innerHTML
    document.title = newHtml.querySelector('title').innerText
}

async function fetchPage(url){
    const pageResponse = await fetch(url)
    const pageText = await pageResponse.text()
    replaceContent(pageText)
}

window.addEventListener('popstate', () => {
    fetchPage(window.location.href)
})