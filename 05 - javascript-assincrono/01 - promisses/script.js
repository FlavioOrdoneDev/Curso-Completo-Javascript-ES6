
const promessa1 = new Promise(function(resolve, reject) {
  resolve('Flávio');
  //reject(Error('Um erro ocorreu na promise'))
});

console.log(promessa1);



const promessa = new Promise((resolve, reject) => {
  let condicao = true;
  if (condicao) {
    resolve('Estou pronto!');
  } else {
    reject(Error('Um erro ocorreu.'));
  }
});

promessa.then(resolucao => {
  console.log(resolucao);
}, reject => {
  console.log(reject);
}).finally(() => {
  console.log('Acabou'); // 'Acabou'
});



// Promessa com setTimeout

const promesaAsync = new Promise((resolve, reject) => {
  let condicao = true;
  if (condicao) {
    setTimeout(() => {
      resolve({nome: 'Flávio', idade: 42});
    }, 1000)
  } else {
    reject(Error('Um erro ocorreu na promisse'))
  }
});

const retorno = promesaAsync.then(resolucao => {
  resolucao.profissao = 'Programador';
  return resolucao;
});
console.log(retorno);




const login = new Promise((resolve) => {
  setTimeout(() =>{
    resolve('Usuário Logado');
  }, 1000)
})

const dados = new Promise((resolve) => {
  setTimeout(() =>{
    resolve('Dados Carregados');
  }, 1000)
})

const carregouTudo = Promise.all([login, dados]);

carregouTudo.then((resolucao) => console.log(resolucao))

const carregouRace = Promise.race([login, dados]);

carregouRace.then((resolucao) => console.log(resolucao))