const animais = document.getElementById('animais');

const gridSection = document.getElementsByClassName('grid-section');

const primeiraLi = document.querySelector('li');

const primeiraUl = document.querySelector('ul');

const linkInterno = document.querySelector('[href^="#"]');
console.log(linkInterno);

const animaisImg = document.querySelectorAll('.animais img');
console.log(animaisImg);

const gridSectionHtml = document.getElementsByClassName('grid-section');
const gridSectionNode = document.querySelectorAll('.grid-section');

/* primeiraUl.classList.add('grid-section'); */

/* console.log(gridSectionHtml);
console.log(gridSectionNode); */

gridSectionNode.forEach((item, index) => console.log(index, item)); 

const arrayGrid = Array.from(gridSectionHtml);

arrayGrid.forEach((item, index) => console.log(index, item));



// Exercícios


// Retorne no console todas as imagens do site

const todasAsImagens = document.querySelectorAll('img');
console.log(todasAsImagens);


// Retorne no console apenas as imagens que começaram com a palav

const imagensAnimais = document.querySelectorAll('img[src^="img/imagem"]');
console.log(imagensAnimais);

// Selecione todos os links internos (onde o href começa com #)

const linksInternos = document.querySelectorAll('[href^="#"]');
console.log(linksInternos);

// Selecione o primeiro h2 dentro de .animais-descricao

const h2AnimaisDescricao = document.querySelector('.animais-descricao h2');
console.log(h2AnimaisDescricao);

// Selecione o último p do site

const paragrafos = document.querySelectorAll('p');
const ultimoParagrafo = paragrafos[paragrafos.length - 1]
console.log(ultimoParagrafo);

