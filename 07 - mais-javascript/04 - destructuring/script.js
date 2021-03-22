
const cliente = {
  nome: 'Flávio',
  compras: {
    digitais: {
      livros: ['Livro 1','Livro 2'],
      videos: ['Video JS', 'Video HTML']
    },
    fisicas: {
      cadernos: ['Caderno 1', 'Caderno 2']
    }
  }
}

/* console.log(cliente.compras.digitais.livros);
console.log(cliente.compras.digitais.videos); */

// const {livros, videos} = cliente.compras.digitais;

const {nome: nomeFlavio} = cliente;

console.log(nomeFlavio);


const {digitais, fisicas, digitais: {livros, videos}} = cliente.compras;

console.log(livros);
console.log(videos);