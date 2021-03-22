function Pessoa(nome, sobrenome, idade) {
  this.nome = nome;
  this.sobrenome = sobrenome;
  this.idade = idade;
}

const andre = new Pessoa('André', 28);
console.log(Pessoa.prototype); // retorna o objeto
console.log(andre.prototype); // undefined

Pessoa.prototype.andar = function () {
  return this.nome + ' andou';
}
Pessoa.prototype.nadar = function () {
  return this.nome + ' nadou';
}
console.log(Pessoa.prototype); // retorna o objeto


andre.nome;
andre.idade;
andre.andar();
andre.nadar();

const pais = 'Brasil';
const cidade = new String('Rio');
pais.charAt(0); // B
cidade.charAt(0); // R
String.prototype;


const lista = document.querySelectorAll('li');
// Transforma em uma array
const listaArray = Array.prototype.slice.call(lista);

Array.prototype.slice.call(lista);
Array.from(lista);
// Retorna uma lista com os métodos / propriedades
Object.getOwnPropertyNames(Array);
Object.getOwnPropertyNames(Array.prototype);


const Carro = {
  marca: 'Ford',
  preco: 2000,
  acelerar() {
    return true;
  }
}

Carro // Object
Carro.marca // String
Carro.preco // Number
Carro.acelerar // Function
Carro.acelerar() // Boolean
Carro.marca.charAt // Function
Carro.marca.charAt(0) // String

console.log(Carro.acelerar.constructor.name);
console.log(Carro.marca.constructor.name);
console.log(Carro.preco.constructor.name);



// Exercícios

// Crie uma função construtora de Pessoas
// Deve conter nome, sobrenome e idade
// Crie um método no protótipo que retorne
// o nome completo da pessoa

Pessoa.prototype.nomeCompleto = function() {
  return `${this.nome} ${this.sobrenome}`;
}

const fernanda = new Pessoa('Fernanda', 'Ordone', 40);
console.log(fernanda.nomeCompleto());

// Liste os métodos acessados por
// dados criados com NodeList,
// HTMLCollection, Document

console.log(Object.getOwnPropertyNames(NodeList.prototype));
console.log(Object.getOwnPropertyNames(HTMLCollection.prototype));
console.log(Object.getOwnPropertyNames(Document.prototype));


// Liste os construtores dos dados abaixo
const li = document.querySelector('li');

// li.constructor.name
li;            // HTMLLiElement
li.click;      // Function
li.innerText;  // String
li.value;      // Number 
li.hidden;     // Boolean
li.offsetLeft; // Number