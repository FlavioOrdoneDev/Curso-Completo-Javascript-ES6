function areaQuadrado(lado) {
  return lado * lado;
}
const perimetroQuadrado = new Function('lado', 'return lado *  4');


function somar(n1, n2) {
  return n1 + n2;
}
somar.length; // 2
somar.name; // 'somar'


const carro = {
  marca: 'Ford',
  ano: 2018
}

function descricaoCarro() {
  console.log(this.marca + ' ' + this.ano);
}

descricaoCarro() // undefined undefined
descricaoCarro.call() // undefined undefined
descricaoCarro.call(carro) // Ford 2018



const carros = ['Ford', 'Fiat', 'VW'];

carros.forEach((item) => {
  console.log(item);
}); // Log de cada Carro

carros.forEach.call(carros, (item) => {
  console.log(item);
}); // Log de cada Carro

const frutas = ['Banana', 'Pêra', 'Uva'];

carros.forEach.call(frutas, (item) => {
  console.log(item);
}); // Log de cada Fruta



function Dom(seletor) {
  this.element = document.querySelector(seletor);
};

Dom.prototype.ativo = function (classe) {
  this.element.classList.add(classe);
};

const lista = new Dom('ul');
lista.ativo('ativar');
console.log(lista);

const li = {
  element: document.querySelector('li')
}

Dom.prototype.ativo.call(li, 'ativo'); // Forma correta de usar

console.log('---------------------------------');

Array.prototype.mostreThis = function () {
  console.log(this);
}

const frutas2 = ['Uva', 'Maçã', 'Banana'];
frutas.mostreThis(); // ['Uva', 'Maçã', 'Banana']

Array.prototype.pop.call(frutas2); // Remove Banana
frutas2.pop(); // Mesma coisa que a função acima


const li2 = document.querySelectorAll('li');

const filtro = Array.prototype.filter.call(li2, function(item) {
  return item.classList.contains('ativo');
});

console.log(filtro); // Retorna os itens que possuem ativo



/* -------------Apply--------------*/


const numeros = [3,4,6,1,34,44,32];
Math.max.apply(null, numeros);
Math.max.call(null, 3, 4, 5, 6, 7, 20);

// Podemos passar null para o valor
// de this, caso a função não utilize
// o objeto principal para funcionar

const li3 = document.querySelectorAll('li');

function itemPossuiAtivo(item) {
  return item.classList.contains('ativo');
}

const filtro1 = Array.prototype.filter.call(li3,
  itemPossuiAtivo);

const filtro2 = Array.prototype.filter.apply(li3,
  [itemPossuiAtivo]);


/* -------------Bind--------------*/

const $ = document.querySelectorAll.bind(document);

console.log($('ul'));
console.log($('li'));




const carro2 = {
  marca: 'Ford',
  ano: 2018,
  acelerar: function (aceleracao, tempo) {
    return `${this.marca} acelerou ${aceleracao} em ${tempo}`;
  }
}

carro2.acelerar(100, 20); // Ford acelerou 100 em 20

const honda = {
  marca: 'Honda',
};

const acelerarHonda = carro2.acelerar.bind(honda);

acelerarHonda(200, 10);  // Honda acelerou 200 em 10


function imc(altura, peso) {
  return peso / (altura * altura);
}

const imc180 = imc.bind(null, 1.80);
imc(1.80, 70); // 21.6
imc180(70); // 21.6





// Exercícios


// Retorne a soma total de caracteres dos parágrafos acima utilizando reduce

const paragrafos = document.querySelectorAll('p');

const totalDeLetras = Array.prototype.reduce.call(paragrafos, (acumulador, item) => {
  return acumulador += item.innerText.length;
}, 0);

/* let arrayParagrafo = Array.from(paragrafos);

const totalDeLetras = arrayParagrafo.reduce((acumulador, item) => {
  return acumulador += item.innerText.length;
}, 0); */

console.log(totalDeLetras);



// Crie uma função que retorne novos elementos html, com os seguintes parâmetros tag, classe e conteudo.

function criarElemento(tag, classe, conteudo) {
  const elemento = document.createElement(tag);
  classe ? elemento.classList.add(classe) : null;
  conteudo ? elemento.innerHTML = conteudo : null;
  return elemento;
}

console.log(criarElemento('ul', 'ativo', 'Carros'));

// Crie uma nova função utilizando a anterior como base essa nova função deverá sempre criar h1 com a 
// classe titulo. Porém o parâmetro conteudo continuará dinâmico

const h1Titulo = criarElemento.bind(null, 'h1', 'titulo');

console.log(h1Titulo('Cursos Javascript'));
console.log(h1Titulo('Cursos de Html'));

