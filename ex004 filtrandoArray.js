// filter -> sempre vai retornar um array, com a mesma quantidade de elementos ou menor porque no caso iremos filtrar ele


// retorne os numeros maiores que 10

//               0  1   2   3  4  5  6  7  8   9  10  11  12
const numeros = [5, 50, 80, 1, 2, 3, 5, 8, 7, 11, 15, 22, 27];
function callbackFilter(valor) {
  return valor > 10;  
}

const numerosFiltrados = numeros.filter(callbackFilter);
console.log(numerosFiltrados);


console.log('-----------------------');


// retorne os numeros maiores que 10

//               0  1   2   3  4  5  6  7  8   9  10  11  12
const numeros1 = [5, 50, 80, 1, 2, 3, 5, 8, 7, 11, 15, 22, 27];
const numerosFiltrados1 = numeros1.filter(function(valor1) {
  return valor1 > 10;
});

console.log(numerosFiltrados1);


console.log('-----------------------');

// retorne os numeros maiores que 10

//               0  1   2   3  4  5  6  7  8   9  10  11  12
const numeros2 = [5, 50, 80, 1, 2, 3, 5, 8, 7, 11, 15, 22, 27];
const numerosFiltrados2 = numeros2.filter((valor2) => {
  return valor2 > 10;
});

console.log(numerosFiltrados2);


console.log('-----------------------');


// retorne os numeros maiores que 10

//               0  1   2   3  4  5  6  7  8   9  10  11  12
const numeros3 = [5, 50, 80, 1, 2, 3, 5, 8, 7, 11, 15, 22, 27];
const numerosFiltrados3 = numeros3.filter(valor3 => valor3 > 10 );
console.log(numerosFiltrados3);


console.log('-----------------------');

//               0  1   2   3  4  5  6  7  8   9  10  11  12
const numeros4 = [5, 50, 80, 1, 2, 3, 5, 8, 7, 11, 15, 22, 27];
const numerosFiltrados4 = numeros4.filter((valor4, indice4, array4) => {
  console.log(valor4, indice4, array4);
  return valor4 > 10;
});
console.log(numerosFiltrados4);


console.log('-----------------------');

