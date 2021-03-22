
function areaQuadrado(lado) {
  return lado * lado;
}

console.log(areaQuadrado(4));

/* ---------------------------------- */

function pi() {
  return 3.14;
} 

var total = 5 * pi();
console.log(total);


/* ---------------------------------- */

function imc(peso, altura) {
  return peso / (altura ** 2);
}

console.log(imc(87, 1.86))
console.log(imc(82, 1.86))

/* ---------------------------------- */

function mostraConsole() { 
  console.log('oi')
}

addEventListener('click', mostraConsole);

/* ---------------------------------- */

function terceiraIdade(idade) {
  if (typeof(idade) !== 'number')
    return console.log('Digite sua idade')
  else if (idade >= 60)
    return 'Idoso'
  else
    return 'Jovem'
}

console.log(terceiraIdade(42));


/* ---------------------------------- */

var profissao = 'Designer';
function dados() {
  var nome = 'André';
  var idade = 28;
  function outrosDados() {
    var endereco = 'Rio de Janeiro';
    var idade = 29;
    return `${nome}, ${idade}, ${endereco}, ${profissao}`;
  }
  return outrosDados();
}
console.log(dados()); // Retorna 'André, 29, Rio de Janeiro, Designer'
// outrosDados(); // retorna um erro












// Exercícios

// Crie uma função para verificar se um valor é Truthy

function verificaTruthy(valor) {
  return !!valor;
}

console.log(verificaTruthy(0));



// Crie uma função matemática que retorne o perímetro de um quadrado
// lembrando: perímetro é a soma dos quatro lados do quadrado

function areaQuadrado(lado) {
  return lado * 4;
}

console.log(areaQuadrado(4));

// Crie uma função que retorne o seu nome completo
// ela deve possuir os parâmetros: nome e sobrenome

function nomeCompleto(nome, sobrenome) {
  return console.log(`${nome} ${sobrenome}`);
}

nomeCompleto("Flávio","Ordone")


// Crie uma função que verifica se um número é par

function verificaPar(numero) {
  if(numero % 2 == 0)
    return console.log("Número par");
  else
    return console.log("Número impar")
}

verificaPar(3);

// Crie uma função que retorne o tipo de dado do argumento passado nela (typeof)

function verifiaTipo(valor) {
  return console.log(typeof valor)
}

verifiaTipo('Nome');
verifiaTipo(10);
verifiaTipo(true);


// addEventListener é uma função nativa do JavaScript
// o primeiro parâmetro é o evento que ocorre e o segundo o Callb
// utilize essa função para mostrar no console o seu nome complet
// quando o evento 'scroll'

function nome(valor) {
  console.log("Flávio Ordone")
}

addEventListener('scroll', nome);