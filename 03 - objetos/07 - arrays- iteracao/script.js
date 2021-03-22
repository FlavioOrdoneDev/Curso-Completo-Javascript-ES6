
const carros = ['Ford', 'Fiat', 'Honda'];

carros.forEach(function(item, index, array) {
  console.log(index, item, array);
});

carros.forEach((item, index, array) => console.log(index, item, array));



/* const li = document.querySelectorAll('li');

li.forEach((item) => item.classList.add('ativo')); */




// MAP

console.log('------------------------------------------');
console.log('----------------Map-------------------');

const novaArray = carros.map((item, index, array) => {
  return item.toUpperCase();
})

console.log(novaArray);

console.log('------------------------------------------');

const numeros = [2, 4, 6, 8, 56];

const numerosX2 = numeros.map(n => n * 2);
console.log(numerosX2);


console.log('------------------------------------------');


const aulas = [
  {
    nome: 'HTML 1',
    min: 15
  },
  {
    nome: 'HTML 2',
    min: 10
  },
  {
    nome: 'CSS 1',
    min: 20
  },
  {
    nome: 'JS 1',
    min: 25
  },
];

const tempoAulas = aulas.map(aula => aula.min);
console.log(tempoAulas);


const nomeAulas = aula => aula.nome;

const arrayNomeAulas = aulas.map(nomeAulas);
console.log(arrayNomeAulas);


const nomeAulas2 = function(aula) {
  return aula.nome;
}  

const arrayNomeAulas2 = aulas.map(nomeAulas2);
console.log(arrayNomeAulas2);



console.log('------------------------------------------');
console.log('----------------Reduce-----------------');

// REDUCE

const valores = [10, 25, 30];

const valoresAcumulados = valores.reduce((acumulador, item) => {
 return acumulador + item;
}, 0)

console.log(valoresAcumulados);



const valores2 = [10, 25, 30, 3, 54, 33, 22, 66, 80];

const maiorValor = valores2.reduce((anterior, atual) => {
 return anterior > atual ? anterior : atual;
}, 0)

console.log(maiorValor);



const frutas = ['Banana', 'Pêra', 'Uva'];

const frutasRight = frutas.reduceRight((acumulador, fruta) => acumulador + ' ' + fruta);
console.log(frutasRight);

const frutasLeft = frutas.reduce((acumulador, fruta) => acumulador + ' ' + fruta);
console.log(frutasLeft);



console.log('------------------------------------------');
console.log('---------------Some-------------------');

// Some


const temUva = frutas.some((fruta) => {
  return fruta === 'Uva';
})

console.log(temUva);



console.log('------------------------------------------');
console.log('----------------Every-------------------');

// Every


const somenteUvas = frutas.every((fruta) => {
  return fruta === 'Uva';
})

console.log(somenteUvas);

const maiorQue3 = valores2.every(n => n > 2);
console.log(maiorQue3);



console.log('------------------------------------------');
console.log('----------------Find/FindIndex------------');

// Find / FindIndex

const indexUvas = frutas.findIndex((fruta) => {
  return fruta === 'Uva';
})
console.log(indexUvas);


const buscaMaior45 = valores2.find(n => n > 45);
console.log(buscaMaior45);



console.log('------------------------------------------');
console.log('------------------Filter------------------');

// Filter
// retorna um array com valores que forem true


const valoresMisturados = ['Banana', undefined, null, '', 'Uva', 0, 7, NaN, 'Maçã'];

const arrayValoresMisturados = valoresMisturados.filter(item => item);
console.log(arrayValoresMisturados);


const buscaMaiores45 = valores2.filter(n => n > 45);
console.log(buscaMaiores45);

const maiores15 = aulas.filter(aula => aula.min > 15);
console.log(maiores15);





console.log('------------------------------------------');
console.log('-----------------Ecercícios---------------');

// Exercícios


// Selecione cada curso e retorne uma array
// com objetos contendo o título, descricao,
// aulas e horas de cada curso

const cursos = document.querySelectorAll('.curso');

const arrayCursos = Array.from(cursos);

const objetosCurso = arrayCursos.map((curso) => {
  const titulo = curso.querySelector('h1').innerText;
  const descricao = curso.querySelector('p').innerText;
  const aulas = curso.querySelector('.aulas').innerText;
  const horas = curso.querySelector('.horas').innerText;

  return {
    titulo,
    descricao,
    aulas,
    horas
  }
})

console.log(objetosCurso);



// Retorne uma lista com os
// números maiores que 100
const numerosExe = [3, 44, 333, 23, 122, 322, 33];

const numMaiores100 = numerosExe.filter(n => n > 100);
console.log(numMaiores100);



// Verifique se Baixo faz parte
// da lista de instrumentos e retorne true
const instrumentos = ['Guitarra', 'Baixo', 'Bateria', 'Teclado']

const temBaixo = instrumentos.some(item => item === 'Baixo');
console.log(temBaixo);



// Retorne o valor total das compras
const compras = [
  {
    item: 'Banana',
    preco: 'R$ 4,99'
  },
  {
    item: 'Ovo',
    preco: 'R$ 2,99'
  },
  {
    item: 'Carne',
    preco: 'R$ 25,49'
  },
  {
    item: 'Refrigerante',
    preco: 'R$ 5,35'
  },
  {
    item: 'Quejo',
    preco: 'R$ 10,60'
  }
]

const totalCompras = compras.reduce((acumulador, item) => {  
  return acumulador + +item.preco.replace('R$ ', '').replace(',', '.'); 
}, 0);

console.log(totalCompras);

