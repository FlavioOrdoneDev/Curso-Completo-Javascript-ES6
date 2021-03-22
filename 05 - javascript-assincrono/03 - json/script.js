fetch('./dados.json')
  .then(r => r.json())
  .then(item => {
    item.forEach(element => {
      console.log(element.aula)
    });
  })

  const configuracoes = {
    player: "Google",
    tempo: 25,
    aula: "2.1 javascript"
  }

  localStorage.config = JSON.stringify(configuracoes);
  console.log(JSON.parse(localStorage.config));