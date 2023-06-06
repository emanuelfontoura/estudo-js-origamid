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

