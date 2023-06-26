export default function activeTab(index){
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