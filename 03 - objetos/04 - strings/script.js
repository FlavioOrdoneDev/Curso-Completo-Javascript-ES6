// const comida = 'Pizza';
// const agua = new String('Agua  ');

// console.log(agua.length);

// const frase = 'A melhor comida';

// console.log(frase[frase.length])
// console.log(frase.charAt(frase.length))

const frase = 'A melhor linguagem é ';
const linguagem = 'JavaScript';

const fraseFinal = frase.concat(linguagem, '!!', 'Oi sdhdisuhds');

const fruta = 'Banana';
const listaFrutas = 'Melancia, Banana, Laranja';

console.log(listaFrutas.includes(fruta, 14));

console.log(fruta.endsWith('na'));
console.log(fruta)

const transacao1 = 'Depósito de cliente';
const transacao2 = 'Depósito de fornecedor';
const transacao3 = 'Taxa de camisas';

console.log(transacao1.slice(-5));

console.log(fruta.indexOf('na'));

const preco = 'R$ 99,00';

const listaPrecos = ['R$ 99', 'R$ 199', 'R$ 12000'];

listaPrecos.forEach((item) => {
  console.log(item.padStart(10, '-'));
})

const frase2 = 'Ta';

frase2.repeat(5); // TaTaTaTaTa

let listaItens = 'Camisas Bonés Calças Bermudas Vestidos Saias';

listaItens = listaItens.replace(/[ ]+/g, ', ');

console.log(listaItens);
const arrayLista = listaItens.split(', ');

console.log(arrayLista)

const htmlText = '<div>O melhor item</div><div>A melhor lista</div>';
const htmlArray = htmlText.split('div');
const novoHtml = htmlArray.join('section');

console.log(htmlText);
console.log(htmlArray);
console.log(novoHtml);

const frutasArray = ['Banana', 'Melancia', 'Laranja'];

const sexo1 = 'Feminino';
const sexo2 = 'feminino';
const sexo3 = 'FEMININO';

console.log(sexo1.toUpperCase() === 'FEMININO');

const valor = '  R$ 23.00   ' 
valor.trim(); // 'R$ 23.00'
valor.trimStart(); // 'R$ 23.00   '
valor.trimEnd(); // '  R$ 23.00'





// Exercícios

// Utilizando o foreach na array abaixo,
// some os valores de Taxa e os valores de Recebimento
const transacoes10 = [
  {
    descricao: 'Taxa do Pão',
    valor: 'R$ 39',
  },
  {
    descricao: 'Taxa do Mercado',
    valor: 'R$ 129',
  },
  {
    descricao: 'Recebimento de Cliente',
    valor: 'R$ 99',
  },
  {
    descricao: 'Taxa do Banco',
    valor: 'R$ 129',
  },
  {
    descricao: 'Recebimento de Cliente',
    valor: 'R$ 49',
  },
];

let taxaTotal = 0;
let recTotal = 0;

transacoes10.forEach((item) => {
  const valorLimpo = +item.valor.replace('R$ ', '');
  if (item.descricao.includes('Taxa')){
    taxaTotal += valorLimpo;
  } else if (item.descricao.includes('Recebimento')) {
    recTotal += valorLimpo;
  }
});

console.log(taxaTotal);
console.log(recTotal);





// Retorne uma array com a lista abaixo
const transportes = 'Carro;Avião;Trem;Ônibus;Bicicleta';

const transporteArray = transportes.split(';');
console.log(transporteArray);




// Substitua todos os span's por a's
let html = `<ul>
<li><span>Sobre</span></li>
<li><span>Produtos</span></li>
<li><span>Contato</span></li>
</ul>`;

html = html.split('span').join('a');

console.log(html);





// Retorne o último caracter da frase
const frase3 = 'Melhor do ano!';
console.log(frase3[frase3.length -1]);
console.log(frase3.slice(-1));
console.log(frase3.slice(-2));




// Retorne o total de taxas
const transacoes = ['Taxa do Banco', ' TAXA DO PÃO', ' taxa do mercado', 'depósito Bancário', 'TARIFA especial'];

let taxasTotal = 0;

transacoes.forEach((item) => {
  item = item.toLowerCase().trim().slice(0, 4);
  if(item === 'taxa')
    taxasTotal++;
})

console.log(taxasTotal);