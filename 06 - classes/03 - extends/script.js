
class Veiculo {
  constructor(rodas, combustivel) {
    this.rodas = rodas;
    this.combustivel = combustivel;
  }
  acelerar() {
    console.log('Acelerou');
  }
}

class Moto extends Veiculo {
  constructor(rodas,combustivel, capacete) {
    super(rodas, combustivel);
    this.capacete = capacete;
  }

  acelerar() {
    super.acelerar();
    console.log('muito');
  }
  empinar() {
    console.log('Moto empinou com ' + this.rodas + ' rodas');
  }
}

const honda = new Moto(2, 'Gasolina', true);
console.log(honda);
honda.acelerar();
honda.empinar();

const civic = new Veiculo(4);
honda.acelerar();