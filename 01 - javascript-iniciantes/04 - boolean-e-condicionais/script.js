var possuiGraduacao = false;
var possuiDoutorado = false;

if(possuiDoutorado) {
  console.log("Verdadeiro doutorado");
} else if (possuiGraduacao){
  console.log("Verdadeiro graduação")
} else {
  console.log("Não possui nada");
}


if(!possuiDoutorado) {
  console.log("Não possui doutorado");
}


var nome = "Flávio";

if (nome) {
  console.log(nome);
}


/*
// Falsy

if (false)
if (0)
if (NaN)
if (null)
if (undefined)
if ('')

// Truthy

if (true)
if (1)
if (' ')
if ('Flavio')
if (-5)
if ({})


// Truthy
if(!true) // false
if(!1) // false
if(!'') // true
if(!undefined) // true
if(!!' ') // true
if(!!'') // false


10 == '10'; // true
10 == 10; // true
10 === '10'; // false
10 === 10 // true
10 != 15 // true
10 != '10' // false
10 !== '10' // true


true && true; // true
true && false; // false
false && true; // false
'Gato' && 'Cão'; // 'Cão'
(5 - 5) && (5 + 5); // 0
'Gato' && false; // false
(5 >= 5) && (3 < 6); // true


true || true; // true
true || false; // true
false || true; // true
'Gato' || 'Cão'; // 'Gato'
(5 - 5) || (5 + 5); // 10
'Gato' || false; // Gato
(5 >= 5) || (3 < 6); // true

*/