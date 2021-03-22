
const doc = fetch('./doc.txt');

doc.then(resolucao => {
   return resolucao.text();
}).then((data) => {
  const conteudo = document.querySelector('.conteudo');
  conteudo.innerText = data;
});




const cep = fetch('http://viacep.com.br/ws/33206082/json/');

cep.then(resolucao => {
   return resolucao.json();
}).then((data) => {
  const conteudo = document.querySelector('.conteudo');
  conteudo.innerText = data.bairro;
});


const cepClone = fetch('http://viacep.com.br/ws/33206082/json/');

cepClone.then(r => {
  const r2 = r.clone();
  r.text().then(text => {console.log(text)}) 
  r2.json().then(json => {console.log(json)}) 
  //r.json();
})



// Exercícios

// Buscar cep ao clicar em um botão

const cepE = document.getElementById('cep');
const buscar = document.querySelector('#btnCep');
const resultado = document.querySelector('.resultado');

buscar.addEventListener('click', handleClick);

function handleClick(event) {
  event.preventDefault();
  buscaCep(cepE.value);
}


function buscaCep(cep) {
  fetch(`http://viacep.com.br/ws/${cep}/json/`)
  .then(response => response.text())
  .then(dado => {
    resultado.innerText = dado;
  })
}


// Retorne o valor de compra do bitcoin

const resultadoBit = document.querySelector('.resultadoBit');

let tes;

function buscaBitCoin() {
  fetch(`https://blockchain.info/ticker`)
  .then(response => response.json())
  .then(dado => {
    resultadoBit.innerText =  ('R$ ' + dado.BRL.buy).replace('.', ',');
  })
}

buscaBitCoin();





