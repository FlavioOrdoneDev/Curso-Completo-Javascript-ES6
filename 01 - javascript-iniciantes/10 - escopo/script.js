function mostrarCarro() {
  var carro = 'Fusca';
  console.log(carro);
  }
  mostrarCarro(); // Fusca no console
  // console.log(carro); // Erro, carro is not defined

if(true) {
  var carro = 'Fusca';
  console.log(carro);
  }
  console.log(carro); // Carro

for(var i = 0; i < 10; i++) {
  console.log(`Número ${i}`);
  }
  console.log(i); // 10


const mes = 'Dezembro';
// mes = 'Janeiro'; // erro, tentou modificar o valor
// const semana; // erro, declarou sem valor
const data = {
dia: 28,
mes: 'Dezembro',
ano: 2018,
}
data.dia = 29; // Funciona
// data = 'Janeiro'; // erro





// Por qual motivo o código abaixo retorna com erros?
{
  var cor = 'preto';
  const marca = 'Fiat';
  let portas = 4;

  console.log(cor, marca, portas);
}
  // Como corrigir o erro abaixo?
  const dois = 2;
  function somarDois(x) {
    return x + dois;
  }
  
  function dividirDois(x) {
    return x + dois;
  }
  somarDois(4);
  dividirDois(6);

var numero = 50;
for(let numero = 0; numero < 10; numero++) {
console.log(numero);
}
const total = 10 * numero;
console.log(total);