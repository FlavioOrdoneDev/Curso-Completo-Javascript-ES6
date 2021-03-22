export default function initFetchBitcoin() {

  fetch('https://blockchain.info/ticker').then(response => response.json())
    .then(btc => {
      const btcPReco = document.querySelector('.btc-preco');
      btcPReco.innerText = (1000 / btc.BRL.sell).toFixed(4);
    }).catch(erro => {
      console.log(Error(erro));
  });
}