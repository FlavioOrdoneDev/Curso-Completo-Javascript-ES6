

const listaAnimais = document.querySelector('.animais-lista');
console.log(listaAnimais.scrollHeight); 

const animaisTop = listaAnimais.offsetTop;
console.log(animaisTop);


const primeiroh2 = document.querySelector('h2');
const h2Left = primeiroh2.offsetLeft;
console.log(h2Left);


const h2rect = primeiroh2.getBoundingClientRect();
console.log(h2rect.top);

if (h2rect.top < 0) {
  console.log('Passou do elemento')
}


window.innerWidth; // width do janela
window.outerWidth; // soma dev tools também
window.innerHeight; // height do janela
window.outerWidth; // soma a barra de endereço
window.pageYOffset; // distância total do scroll horizontal
window.pageXOffset; // distância total do scroll vertical

if(window.innerWidth < 600) {
console.log('Tela menor que 600px');
}

const small = window.matchMedia('(max-width: 600px)').matches;

if (small) {
  console.log('Usuário Mobile')
  }
else {
  console.log('Usuário Desktop')
}


// Exercícios

// Verifique a distância da primeira imagem
// em relação ao topo da página

const img = document.querySelector('img');
console.log(img.offsetTop);


// Retorne a soma da largura de todas as imagens
function somaImagens() {
  const imgs = document.querySelectorAll('img');
  let total = 0;
  imgs.forEach((imagem) => {
    total += imagem.offsetWidth;
  });
console.log(total)
}

window.onload = function() {
  somaImagens();
}


// Verifique se os links da página possuem
// o mínimo recomendado para telas utilizadas
// com o dedo. (48px/48px de acordo com o google)

const links = document.querySelectorAll('a');

links.forEach((link) => {
  if (link.offsetWidth > 48 && link.offsetHeight > 48) {
    console.log('Passou ' + link.offsetWidth, + link.offsetHeight)
  }
  else {
    console.log("Não possui")
  }
})

// Se o browser for menor que 720px,
// adicione a classe menu-mobile ao menu

const small2 = window.matchMedia('(max-width: 720px)').matches;

if (small2) {
  const menu = document.querySelector('.menu');
  menu.classList.add('menu-mobile');
}
