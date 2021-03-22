const animaisLista = document.querySelector('.animais-lista');
console.log(animaisLista);


animaisLista.parentElement; // pai
animaisLista.parentElement.parentElement; // pai do pai
animaisLista.previusElementSibling; // elemento acima
animaisLista.nextElementSibling; // elemento abaixo

animaisLista.children; // html collection com os filhos
animaisLista.children[0]; // primeiro filho
console.log(animaisLista.children[--animaisLista.children.length]); // pegar o último item dos filhos

animaisLista.querySelectorAll('li'); // todas as LI's
animaisLista.querySelector('li:last-child'); // último filho

animaisLista.previousSibling; // node acima
animaisLista.firstChild; // primeiro node child
animaisLista.childNodes; // todos os node child


const lista = document.querySelector('.animais-lista');
const contato = document.querySelector('.contato');
const titulo = document.querySelector('.titulo');
const mapa = document.querySelector('.mapa');


/* contato.appendChild(lista); // move lista para o final de contato
contato.insertBefore(lista, titulo); // insere a lista antes de titulo
contato.removeChild(titulo); // remove titulo de contato
contato.replaceChild(lista, titulo); //substitui titulo por lista */





// Criando novos elementos

const novoH1 = document.createElement('h1');
novoH1.innerText = 'Novo Título';
novoH1.classList.add('titulo');

mapa.appendChild(novoH1);

const h1 = document.querySelector('h1');
const faq = document.querySelector('.faq');

const cloneH1 = h1.cloneNode(true);
cloneH1.classList.add('azul')
faq.appendChild(cloneH1);




// Exercícios


// Duplique o menu e adicione ele em copy

const menu4 = document.querySelector('.menu');
const copy = document.querySelector('.copy');

const cloneMenu = menu4.cloneNode(true);
copy.appendChild(cloneMenu);

// Selecione o primeiro Dt da dl de faq

const primeiroDt = faq.querySelector('dt');
const proximoDD = primeiroDt.nextElementSibling;
console.log(proximoDD);