

const titulo = document.querySelector("h1");

console.log(titulo);

let mudarCor = () => titulo.classList.add("verde");

titulo.addEventListener('click', mudarCor);




// Exercícios

const href = window.location.href;
console.log(href);


const elementoAtivo = document.querySelector(".ativo");
console.log(elementoAtivo);


const largura = window.innerWidth;
console.log(largura);


const linguagem = window.navigator.language;
console.log(linguagem);
