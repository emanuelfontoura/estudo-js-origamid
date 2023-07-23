const img = document.createElement('img')

fetch('./img1.jpg')
.then(resposta => {
    return resposta.blob()
})
.then(imgBlob => {
    console.log(imgBlob)
    const blobUrl = URL.createObjectURL(imgBlob)
    document.body.appendChild(img)
    img.src = blobUrl
})