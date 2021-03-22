
var quadrado = {
  lados: 4,
  area(lado) {
    return lado * lado;
  },
  perimetro(lado) {
    return this.lados * lado;
  }
}

var forma = quadrado;

console.log(forma.lados);
console.log(quadrado.area(4));
console.log(quadrado.perimetro(4));

console.log(Math.PI);
console.log(Math.random());

console.table(quadrado);





// Exercícios


var pessoa = {
  nome: "Flávio",
  sobrenome: "Ordone",
  idade: 42,
  nomeCompleto() {
    console.log(`${this.nome} ${this.sobrenome}`);
  }
}

pessoa.nomeCompleto();


var carro = {
  preco: 1000,
  portas: 4,
  marca: 'Audi'
}

carro.preco = 3000;
console.log(carro.preco);

var cachorro = {
  raca: "Labrador",
  cor: "preto",
  idade: 10,
  latir(pessoa){
    if (pessoa === "homem")
      return 'late ao ver um homem';
    else
      return 'Nada';
  }
}

console.log(`Cachorro ${cachorro.raca}, ${cachorro.cor} com ${cachorro.idade} e ${cachorro.latir('homem')} `)


/*-------------------------------------------------*/




