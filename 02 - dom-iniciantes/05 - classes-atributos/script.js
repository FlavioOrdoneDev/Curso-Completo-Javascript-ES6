const menu = document.querySelector('.menu');

menu.className; // string
menu.classList; // lista de classes
menu.classList.add('ativo'); // adciona classe 
menu.classList.add('ativo', 'mobile'); // adciona duas classe 
menu.classList.remove('ativo'); // remove classe 
menu.classList.toggle('ativo'); // adiciona/remove classe 
menu.classList.contains('ativo'); // true ou false 
menu.classList.replace('ativo', 'inativo'); // substitui classe 

const animais = document.querySelector('.animais');
console.log(animais.attributes.id);


const img = document.querySelector('img');

const srcImg = img.getAttribute('src');
console.log(srcImg);

img.setAttribute('alt', 'É uma raposa');

const alt = img.getAttribute('alt');
console.log(alt);

const possuiSrc = img.hasAttribute('src');
console.log(possuiSrc);

const possuiAlt = img.hasAttribute('alt');
console.log(possuiAlt);


// Exercícios

// Adicione a classe ativo a todos os itens do menu

const itensMenu = document.querySelectorAll('.menu a');
itensMenu.forEach((item) => item.classList.add('ativo'))

console.log(itensMenu);


// Remove a classe ativo de todos os itens do menu e mantenha ape
itensMenu.forEach((item) => item.classList.remove('ativo'))
itensMenu[0].classList.add('ativo');

// Verifique se as imagens possuem o atributo alt

const imgs = document.querySelectorAll('img');

imgs.forEach((img) => {
  const possuiAtributo = img.hasAttribute('alt');
  console.log(possuiAtributo);
})

// Modifique o href do link externo no menu

const link = document.querySelector('a[href^="http"]');
link.setAttribute('href', 'https://www.google.com');