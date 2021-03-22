
async function puxarDados() {
  try {
    const responseDados =  await fetch('./dados.json');
    const jsonDados = await responseDados.json();
    console.log(jsonDados);
  } catch (erro) {
    console.log(erro);
  }
  
}

puxarDados();




async function puxarDados2Fetchs() {
  try {
    const promiseDados = fetch('./dados.json');
    const promiseClientes = fetch('./clientes.json');

    const jsonDados = await (await promiseDados).json();
    const clienteDados = await (await promiseClientes).json();
    
    console.log(jsonDados);
    console.log(clienteDados);

  } catch (erro) {
    console.log(erro);
  }  
}

puxarDados2Fetchs();





async function iniciarFetch() {
  fetch('./dados.json')
  .then(responseDados => responseDados.json())
  .then(jsonDados => {
    jsonDados.forEach(element => {
      console.log(element.nome + " " + element.aula)
    });;
  })
}

iniciarFetch();



async function iniciarAsync() {
  const responseDados =  await fetch('./dados.json');
  const jsonDados = await responseDados.json();
  console.log(jsonDados[0].nome, jsonDados[0].aula);
}

iniciarAsync();