function espera(texto){
    console.log(texto)
}

setTimeout(espera, 1000, 'Depois de 1s')

setTimeout(()=> {
    console.log('OLÁ')
}, 2000)