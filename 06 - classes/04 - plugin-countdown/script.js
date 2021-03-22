
import Countdown from './countdown.js';

const tempoParaONatal = new Countdown('24 December 2021 23:59:59 GMT-0300');
const tempoParaOAnoNovo = new Countdown('31 December 2021 23:59:59 GMT-0300');

const natal = tempoParaONatal._total;
const anoNovo = tempoParaOAnoNovo._total;

setInterval( () => {
  console.log(`Dias para o natal   : ${natal.days}, Horas: ${natal.hours} , Minutos: ${natal.minutes}, Segundos: ${natal.seconds}`);
  console.log(`Dias para o ano novo: ${anoNovo.days}, Horas: ${anoNovo.hours} , Minutos: ${anoNovo.minutes}, Segundos: ${anoNovo.seconds}`);
}, 5000)

