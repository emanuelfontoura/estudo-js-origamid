class Veiculo{
    constructor(rodas, combustivel){
        this.rodas = rodas
        this.combustivel = combustivel
    }

    acelerar(){
        console.log('ACELEROU')
    }
}

class Moto extends Veiculo{
    constructor(capacete, rodas, combustivel){
        super(rodas, combustivel) // PUXAR AS PROPRIEDADES DA CLASSE-PAI
        this.capacete = capacete
    }

    empinar(){
        console.log('EMPINOU')
    }

    acelerar(){
        super.acelerar()
        console.log('ACELEROU RÁPIDO')
    }
}

const moto = new Moto(true, 2, 'Gasolina comum') // POSSUI TODAS AS PROPRIEDADES E MÉTODOS DA CLASSE VEÍCULO TAMBÉM
