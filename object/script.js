// MODOS DE CRIAR UM OBJETO
const carro = {
    marca: 'Ford',
    ano: 2018,
}

const pessoa = new Object({
    nome: 'Emanuel',
    idade: 19,
})

// OBJECT.CREATE(obj, defineProperties)
console.log('CREATE')

const carro2 = {
    marca: 'Honda',
    ano: 2000,
    velocidadeMax: 200,

    init(marca){
        this.marca = marca
        return marca
    },

    acelerar(){
        return `O carro de marca ${this.marca} e ano ${this.ano} acelerou até os ${this.velocidadeMax} km/h`
    },

    buzinar(){
        return this.marca + 'buzinou'
    }
}

const newCar = Object.create(carro2)
newCar.marca = 'Fiat'
newCar.init('BMW')
console.log(newCar)

function CriarCarros(marca, ano){
    this.marca = marca
    this.ano = ano

    this.buzinar = function(){
        return this.marca + 'buzinou!'
    }
}

CriarCarros.prototype.acelerar = function(){
    return this.marca + ' acelerou!'
}

const carroNovo = new CriarCarros('Chevrolet', 2020)
console.log(carroNovo)

// OBJETC.ASSIGN(objAlvo, obj1, obj2)
console.log('ASSIGN')

const funcaoAutomovel = {
    acelerar(){
        return 'acelerou'
    },

    buzinar(){
        return 'buzinou'
    },
}

const moto = {
    rodas: 2,
    capacete: true,
}

const caminhao = {
    rodas: 4,
    carga: true,
}

Object.assign(moto, funcaoAutomovel)
Object.assign(caminhao, funcaoAutomovel)

console.log(moto)
console.log(caminhao)

// OBJECT.DEFINEPROPERTIES(alvo, properties{})
console.log('DEFINE PROPERTIES')

Object.defineProperties(moto, {
    rodas:{
        value: 2,
        configurable: false,
        enumerable: true,
        writable: false,
    },
    
    capacete:{
        value: true,
        configurable: true,
        writable: false,
    },
})

moto.rodas = 3
console.log(moto)

delete moto.rodas
console.log(moto)

delete moto.capacete
console.log(moto)

// GET E SET
console.log('GET E SET')

const motoNovo = {}
Object.defineProperties(motoNovo, {
    velocidade: {
        get(){
            return this._velocidade
        },

        set(valor){
            return this._velocidade = 'Velocidade ' + valor
        }
    },

    rodas: {
        get(){
            return this._rodas
        },

        set(valor){
            return this._rodas = 'Total de rodas: ' + valor 
        },
    },
})

console.log(motoNovo)

// OBJECT.GETOWNPROPETYDESCRIPTORS(obj)
console.log('GETOWNPROPETYDESCRIPTORS')

console.log(Object.getOwnPropertyDescriptors(Array))
console.log(Object.getOwnPropertyDescriptors(Array.prototype))

// OBJECT.GETOWNPROPETYDESCRIPTOR(obj, 'nomePropriedade')
console.log('GETOWNPROPETYDESCRIPTOR')

console.log(Object.getOwnPropertyDescriptor(Array, 'length'))
console.log(Object.getOwnPropertyDescriptor(window, 'innerHeight'))

// OBJECT.keys(obj), OBJECT.values(obj) e OBJECT.entries(obj)
console.log('KEYS')

const pessoas = {
    nome: 'Emanuel',
    idade: 19,
}

console.log(Object.keys(pessoas))
console.log(Object.values(pessoas))
console.log(Object.entries(pessoas))

// OBJECT.GETOWNPROPETYNAMES(obj)
console.log('GETOWNPROPETYNAMES')

console.log(Object.getOwnPropertyNames(motoNovo))

// OBJECT.GETPROTOTYPEOF(obj)
console.log('GETPROTOTYPEOF')

console.log(Object.getPrototypeOf(motoNovo))

// OBJECT.IS(obj1, obj2)
console.log('OBJECT.IS')

const frutas1 = ['Banana', 'Pêra']
const frutas2 = ['Banana', 'Pêra']
const novaFruta = frutas1

console.log(Object.is(frutas1, frutas2)) // ARRAY TAMBÉM É UM OBJ, NA VERDADE, TUDO EM JS É UM OBJETO
console.log(Object.is(novaFruta, frutas1))

// OBJECT.FREEZE()
console.log('OBJECT FREEZE')

const objetoTeste1 = {
    marca: 'Honda',
    ano: 2019,
}

Object.freeze(objetoTeste1)
objetoTeste1.ano = 2020 // não muda propriedades
console.log(objetoTeste1)

// OBJECT.SEAL()
console.log('OBJECT SEAL')

Object.seal(objetoTeste1)
delete objetoTeste1.marca // não deleta propriedades
objetoTeste1.rodas = 4 // não adiciona novas propriedades

console.log(objetoTeste1)

// OBJECT.PREVENTEXTENSIONS()
console.log('OBJECT PREVENTEXTENSIONS')

const objetoTeste2 = {
    marca: 'BMW',
    ano: 2020,
}

Object.preventExtensions(objetoTeste2)
objetoTeste2.rodas = 4 // não adiciona novas propriedades
delete objetoTeste2.marca // deleta propriedades

console.log(objetoTeste2)

// {}.CONSTRUCTOR
console.log('CONSTRUCTOR')

console.log(objetoTeste2.constructor)

// {}.hasOwnProperty('prop')
console.log('hasOwnProperty')

console.log(objetoTeste2.hasOwnProperty('velocidade'))
console.log(objetoTeste2.hasOwnProperty('ano'))

// {}.propertyIsEnumerable('prop')
console.log('propertyIsEnumerable')

console.log(Array.prototype.propertyIsEnumerable('map'))
console.log(window.propertyIsEnumerable('innerHeight'))

// {}.isPrototypeOf(obj)
console.log('isPrototypeOf')

const frutas = ['Banana', 'Uva']

console.log(Array.prototype.isPrototypeOf(frutas))

// {}.toString().
console.log('toString')

const nome = 'Emanuel'

console.log(Object.prototype.toString.call(frutas))
console.log(Object.prototype.toString.call(objetoTeste2))
console.log(Object.prototype.toString.call(nome))