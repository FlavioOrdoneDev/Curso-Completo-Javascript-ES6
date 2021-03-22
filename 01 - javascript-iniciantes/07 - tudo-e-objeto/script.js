var nome = "André";
console.log(nome.length);
console.log(nome.replace('ré', 'rei'));
var nomeMinusculo = nome.toLowerCase();
console.log(nomeMinusculo);

var altura = 1.5
console.log(altura.toFixed()); 




var btn = document.querySelector(".btn");
var valor = "teste";

btn.addEventListener('click', () => console.log("clicou"));