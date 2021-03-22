

console.log(Number.isNaN(NaN));
console.log(Number.isNaN('teste'));
console.log(Number.isNaN(4 + 5));
console.log(Number.isInteger(0));

console.log(Number.isInteger('teste'));
console.log(Number.isInteger(10.000));
console.log(Number.isInteger(10,000));

console.log(parseFloat('10,008'));
console.log(parseFloat('$10,008'));
console.log(parseFloat(' 10,008'));
console.log(parseFloat('100.27 reais'));

console.log(parseInt('100.27 reais'));
console.log(parseInt(5.33234343));


const preco = 2.99;

console.log(preco.toFixed());
console.log(preco.toFixed(2));


const preco2 = 1499.49;

console.log(preco2.toFixed());
console.log(preco2.toFixed(2));

const preco3 = 1499.5425698;

console.log(preco3.toFixed());
console.log(preco3.toFixed(2));
console.log(preco3.toFixed(3));
console.log(preco3.toFixed(6));



let valor = 48.49;

valor = valor.toLocaleString('pt-BR', {style: 'currency', currency: 'BRL'});
console.log(valor);

valor = valor.toLocaleString('en-US', {style: 'currency', currency: 'BRL'});
console.log(valor);



console.log(Math.abs(3 - 7));
console.log(Math.ceil(4.3)); // Arredonda para cima
console.log(Math.floor(4.8)); // Arredonda para baixo
console.log(Math.round(4.3)); // Arredonda para baixo
console.log(Math.round(4.8)); // Arredonda para cima

console.log(Math.max(4, 43, 65, 9, 56)); // Traz valor máximo
console.log(Math.min(4, 43, 65, 9, 56)); // Traz valor mínimo

const aleatorio10 = Math.floor(Math.random() * 10); 
console.log(aleatorio10);

const aleatorio100 = Math.floor(Math.random() * 100); 
console.log(aleatorio100);

const aleatorio500 = Math.floor(Math.random() * 500); 
console.log(aleatorio500);

const max = 40;
const min = 20;

const random = Math.floor(Math.random() * (max - min + 1)) + min; // Exemplo entre 20 e 40
console.log(random);





// Execícios

// Retorne um numero aleatório entre 1050 e 2000
console.log(Math.floor(Math.random() * (2000 - 1050 + 1)) + 1050);

// Retorne o maior número da lista abaixo
const numeros = '4, 5, 20, 8, 9';
const arrayNumeros = numeros.split(', ')
console.log(Math.max(...arrayNumeros));

// Crie uma função para limpar o preços e retornar os números com centavos arredondados, 
// depois retorne a soma total

const listaPrecos = ['R$ 59,99', 'R$ 100,222', 'R$230 ', 'r$ 200'];

function limparPreco(preco) {
  preco = +preco.toUpperCase().replace('R$', '').trim().replace(',','.');
  preco = +preco.toFixed(2);
  return preco;
}

console.log('-------------');
let soma = 0
listaPrecos.forEach((item) => soma += limparPreco(item) );

console.log(soma.toLocaleString('pt-BR', {style: 'currency', currency: 'BRL'}));

