const h1 = document.querySelector('h1.titulo')

console.log(Object.prototype.toString.call(h1))

const h1SelecaoDataset = document.querySelector("[data-color]")
const h1SelecaoDataset2 = document.querySelector("[data-color='azul']")
h1.dataset.animate = "left"
delete h1.dataset.color
console.log(h1.dataset)
console.log(Object.is(h1SelecaoDataset, h1SelecaoDataset2)) // verificando se são os mesmos objetos e se estão referenciados

// DATASET + FOREACH
const divs = document.querySelectorAll('[data-anima]')
divs.forEach(div => {
    div.classList.add(div.dataset.anima)
})

// EXERCÍCIO 
function activeTab(index){
    let direction = allTabs[index].dataset.anime
    allTabs.forEach(item =>{
        item.classList.remove('ativo')
    })
    allTabs[index].classList.add('ativo', direction)
}

const allTabs = document.querySelectorAll("[data-anime^=show]")
const imagesAnimals = document.querySelectorAll('[alt^=Imagem')
allTabs[0].classList.add('ativo')

imagesAnimals.forEach((item, index) => {
    item.addEventListener('click', ()=>{
        activeTab(index)
    })
})