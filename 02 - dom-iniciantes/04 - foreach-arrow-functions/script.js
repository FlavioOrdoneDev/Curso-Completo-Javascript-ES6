
//nodeList
const imgs = document.querySelectorAll('img');

imgs.forEach((item, index, array) => 
  console.log(index, item, array)
)


// transformando um htmlCollection em um array
const titulos = document.getElementsByClassName('titulo');
const titulosArray = Array.from(titulos);

titulosArray.forEach(item => console.log(item));


// Exercícios

// Mostre no console cada parágrado do site

const paragrafos = document.querySelectorAll('p');
paragrafos.forEach(item => console.log(item));


// Mostre o texto dos parágrafos no console
paragrafos.forEach(element => {
  console.log(element.innerText);
});


// Como corrigir os erros abaixo:
const imgs2 = document.querySelectorAll('img');
imgs2.forEach((item, index) => console.log(index,item));

let i = 0;
imgs2.forEach(() => console.log(i++));