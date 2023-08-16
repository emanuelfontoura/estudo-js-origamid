// TRATAR PARÂMETROS
function areaQuadrado(lado){
    lado = lado || 0
    return lado*lado
}

function areaQuadrado2(lado = 0){
    return lado*lado
}

console.log(areaQuadrado(2)) // 4
console.log(areaQuadrado2()) // 4

// PALAVRA-CHAVE "ARGUMENT"
function areaRetangulo(base = 0, altura = 0){
    const argumentosArray = Array.from(arguments) // Virou array. Podemos usar os métodos de array agora
    console.log(arguments)
    console.log(argumentosArray)
    return base*altura
}

console.log(areaRetangulo(2, 2, 'OI')) // O arguments armazena até mesmo argumentos passados de parâmetros não definidos na função, nesse caso, o argumento é 'OI'.

// PARÂMETRO REST
function anunciarGanhadores(...listaGanhadores){
    listaGanhadores.forEach(ganhador => console.log(`${ganhador} ganhou.`))
    return listaGanhadores
}

const listaGanhadores = anunciarGanhadores('João', 'Mário', 'Gilberto', 'Tiquinho')
console.log(listaGanhadores)

// SPREAD
const listaPessoas = ['João', 'Mário', 'Gilberto', 'Tiquinho']

const listaGanhadores2 = anunciarGanhadores(...listaPessoas) // SPREAD separa cada item, passando cada um como um argumento separado

console.log(listaGanhadores2) // a função recebe cada argumento e armazena no REST, funcionando como uma lista

// TRANSFORMAR ARRAY-LIKE EM ARRAY REAL USANDO SPREAD (FUNCIONANDO COMO SE FOSSE UM ARRAY.FROM())
const li = document.querySelectorAll('li') // ARRAY-LIKE CUJO "li" SÃO ITERÁVEIS
const listaLi = [...li] // SEPARADA CADA "li" DA ARRAY-LIKE "li" E OS COLOCA EM UMA ARRAY REAL

console.log(li, listaLi)