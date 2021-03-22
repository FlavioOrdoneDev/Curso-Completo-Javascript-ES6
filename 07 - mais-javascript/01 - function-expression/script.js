
let somar = function(a, b) {
  return a + b;
}
console.log(somar(2, 3));

const somarArrow = (a, b) => a + b;
console.log(somarArrow(3, 8));

const quadrado = a => a * a;
console.log(quadrado(4));

const instrumento = 'Violão';

(function(){
  const instrumento = 'Guitarra';
  console.log(instrumento);
})();

(() => {
  const instrumento = 'Bateria';
  console.log(instrumento);
})();

console.log(instrumento);



// Exercícios

// Remova o erro

const priceNumber = n => +n.replace('R$', '').replace(',', '.');
console.log(priceNumber('R$ 99,99'));


// Crie uma IIFE e isole o escopo

(() => {
  var nome = 'Flávio';
  console.log(nome);
})();


// Como podemos utilizar a funão abaixo

const active = callback => callback();

active(() => {
  console.log('Teste de active.');
})

