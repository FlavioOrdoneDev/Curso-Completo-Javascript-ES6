

function Carro(marca, preco) {
  this.marca = marca;
  this.preco = preco;
}

const honda = new Carro('Honda', 2000);
honda.andar = function() {
  console.log("Honda andou")
}

console.log(honda.marca);
console.log(honda.andar());




const fiat = new Carro('Fiat', 3000);
fiat.andar = function() {
  console.log("Fiat andou")
}

console.log(fiat.marca);
console.log(fiat.andar());




function Carro2(marca, precoInicial) {
  const taxa = 1.2;
  const precoFinal = precoInicial * taxa;
  this.marca = marca;
  this.preco = precoFinal;
}

const mazda = new Carro2('Mazda', 5000);
console.log(mazda.preco);



/* ----------------------------------------------------- */


/* const Dom = {
  seletor: 'li',
  element() {
    return document.querySelector(this.seletor);
  },
  ativar() {
    this.element().classList.add('ativo');
  }
} */


function Dom(seletor){
  this.element = function() {
    return document.querySelector(seletor);
  },
  this.ativar = function(classe) {
    this.element().classList.add(classe);
  }
}

const li = new Dom('li');
const ul = new Dom('ul');
const lastLi = new Dom('li:last-child');

li.ativar('ativar');
ul.ativar('ativar');
lastLi.ativar('ativo');




// Exercícios

// Transforme o objeto abaixo em uma Constructor Function
function Pessoa (nome, idade) {
  this.nome = nome;
  this.idade = idade,
  this.andar = function() {
    console.log(this.nome + ' andou');
  }
}

// Crie 3 pessoas, João - 20 anos,
  // Maria - 25 anos, Bruno - 15 anos

const flavio = new Pessoa('Flávio', 42);
console.log(flavio.nome);
console.log(flavio.idade);
console.log(flavio.andar());

const joao = new Pessoa('João', 20)
console.log(joao.nome);
console.log(joao.idade);
console.log(joao.andar());

const maria = new Pessoa('Maria', 25)
console.log(maria.nome);
console.log(maria.idade);
console.log(maria.andar());


  
  // Crie uma Constructor Function (Dom) para manipulação
  // de listas de elementos do dom. Deve conter as seguintes
  // propriedades e métodos:
  //
  // elements, retorna NodeList com os elementos selecionados
  // addClass(classe), adiciona a classe a todos os elementos
  // removeClass(classe), remove a classe a todos os elementos

  function Dom2(seletor) {
    this.elements = document.querySelectorAll(seletor);
    this.addClass = function(classe) {
      this.elements.forEach(element => {
        element.classList.add(classe);
      });
    };
    this.removeClass = function(classe) {
      this.elements.forEach(element => {
        element.classList.remove(classe);
      });
    }
  }

  const dom2 = new Dom2('li');
  console.log(dom2.elements);
  dom2.removeClass('ativar');
  dom2.addClass('ativo');