// const instrumentos = ['Guitarra', 'Baixo', 'Violão'];
// const precos = [49, 99, 69, 89];

// const dados = [new String('Tipo 1'), ['Carro', 'Portas', {cor: 'Azul', preco: 2000}], function andar(nome) { console.log(nome) }];

// const carros = new Array('Ford', 'Fiat', 'Honda');

// carros[2] = 'Ferrari';
// carros[3] = 'Kia';
// carros[20] = 'Kia';

// console.log(carros.length)

// const li = document.querySelectorAll('li');

// const arrayLi = Array.from(li)

// const obj = {
//   0: 'Andre',
//   1: 'Rafael',
//   2: 'Teste',
//   length: 4,
// }

// const objArray = Array.from(obj);

// console.log(li)
// console.log(arrayLi)

// const frutas = ['Banana', 'Pêra', ['Uva Roxa', 'Uva Verde']];

// console.log(frutas[2][0].length)

// const instrumentos = ['Guitarra', 'Baixo', 'Violão'];
// instrumentos.sort();

// const idades = [32,21,33,43,1,12,8];
// idades.sort();

// console.log(instrumentos)
// console.log(idades)

const carros = ['Ford', 'Fiat', 'VW'];
carros.unshift('Kia', 'Ferrari');
const novaArray = carros.push('Parati', 'Gol');

// console.log(novaArray)

// console.log(carros);

// console.log(carros.shift())

// console.log(carros);
// console.log(carros.splice(2,4,'Fusca'))

// console.log(carros);

// console.log(['Item1', 'Item2', 'Item3', 'Item4', 'item5'].copyWithin(2, 0, 2));

// console.log(['Item1', 'Item2', 'Item3', 'Item4'].fill('Banana', 0, 3));

// const transporte1 = ['Barco', 'Aviao'];
// const transporte2 = ['Carro', 'Moto'];


// let htmlString = '<h2>Título Principal</h2>';
// htmlString = htmlString.split('h2');
// htmlString = htmlString.join('h1')

// console.log(htmlString)

const linguagens = ['html', 'css', 'js', 'php', 'python'];

const cloneLinguagens = linguagens.slice();

console.log(linguagens.pop())
console.log(linguagens)
console.log(cloneLinguagens)







// Exercícios

// Remova o primeiro valor de comidas e coloque em uma variável
// Remova o último valor de comidas e coloque em uma variável
// Adicione 'Arroz' ao final do Array
// Adicione 'Peixe' e 'Batata' ao início do Array

const comidas = ['Pizza', 'Frango', 'Carne', 'Macarrão'];

const primeiroItem = comidas.shift();
console.log(primeiroItem);

const ultimoItem = comidas.pop();
console.log(ultimoItem);

comidas.push('Arroz');
comidas.unshift('Peixe');
comidas.unshift('Batata');

console.log(comidas);



// Coloque os estudantes em ordem alfabética
// Inverta a ordem dos estudantes
// Verifique se Joana faz parte dos estudantes
// Verifique se Juliana faz parte dos estudantes

const estudantes = ['Marcio', 'Brenda', 'Joana', 'Kleber', 'Julia'];

console.log(estudantes.sort());
console.log(estudantes.reverse());
console.log(estudantes.includes('Joana'));
console.log(estudantes.includes('Juliana'));




// Substitua section por ul e div por li,
// utilizando split e join

let html = `<section>
              <div>Sobre</div>
              <div>Produtos</div>
              <div>Contato</div>
            </section>`

let novoHtml = html.split('section').join('ul').split('div').join('li');

console.log(novoHtml.split('<li>'));




// Remova o último carro, mas antes de remover
// salve a array original em outra variável

const carros2 = ['Ford', 'Fiat', 'VW', 'Honda'];

const carrosCopia = carros2.slice();

carros2.pop();

console.log(carros2);
console.log(carrosCopia);