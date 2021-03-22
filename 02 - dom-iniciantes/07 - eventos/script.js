
const img = document.querySelector('img');

function callBack(event) {
  console.log(event);
}

//img.addEventListener('click', callBack);



const animaisLista = document.querySelector('.animais-lista');

function callBackLista(event) {
  console.log(event.currentTarget); // this
  console.log(event.target); // onde o clique ocorreu
  console.log(event.type);
  console.log(event.path);
}

//animaisLista.addEventListener('click', callBackLista);



const linkExterno = document.querySelector('a[href^="http"]');

function handleLinkExterno(event) {
  event.preventDefault();
  console.log(event.currentTarget);
  console.log(this);
  console.log(this.getAttribute('href'));
}

//linkExterno.addEventListener('click', handleLinkExterno);


const h1 = document.querySelector('h1');

function callback(event) {
  console.log(event.type, event);
}

/* h1.addEventListener('click', callback);
h1.addEventListener('mouseenter', callback);
window.addEventListener('scroll', callback);
window.addEventListener('resize', callback);
window.addEventListener('keydown', callback); */

function handleKeyBoard(event) {
  if (event.key === 'a') {
    document.body.classList.toggle('azul')
  }
  else if (event.key === 'v') {
    document.body.classList.toggle('verde')
  }
}

// window.addEventListener('keydown', handleKeyBoard);


const imgs = document.querySelectorAll('img');

function handleImg(event) {
  console.log(event.target);
}

imgs.forEach((img) => img.addEventListener('click', handleImg));


const menu3 = document.querySelector('.menu');

menu3.outerHTML; // todo o hatml do elemento
menu3.innerHTML; // hyml interno
menu3.innerText; //  texto sem tags

menu3.innerText = '<p>Texto</p>'; // a tag vai como texto
menu3.innerHTML = '<p>Texto</p>'; // a tag é renderizada





// Exercícios


// Quando o usuário clicar nos links internos do site, adicione a classe ativo ao item clicado e remova dos
// demais itens caso eles possuam a mesma. Previna o comportamento padrão desses links

const linksInternos = document.querySelectorAll('a[href^="#"]');

function handleLink(event) {
  event.preventDefault();
  linksInternos.forEach((link) => {
    link.classList.remove('ativo');
  })
  event.currentTarget.classList.add('ativo');

}

linksInternos.forEach((link) => {
  link.addEventListener('click', handleLink)
})


// Selecione todos os elementos do site começando a partir do body,
// ao clique mostre exatamente quais elementos estão sendo clicados

const todosElementos  = document.querySelectorAll('body *');

function handleElemento(event) {
  event.currentTarget.remove();
}

todosElementos.forEach((item) => {
  //item.addEventListener('click', handleElemento);
})


// Utilizando o código anterior, ao invés de mostrar no console,
// remova o elemento que está sendo clicado, o método remove() remove um elemento


// Se o usuário clicar na tecla (t), aumente todo o texto do site.

function handleClickT(event) {
  if (event.key === 't') {
    document.documentElement.classList.toggle('textomaior')
  }
}

window.addEventListener('keydown', handleClickT);