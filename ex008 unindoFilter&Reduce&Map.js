//               0  1   2   3  4  5  6  7  8   9  10  11  12
const numeros = [5, 50, 80, 1, 2, 3, 5, 8, 7, 11, 15, 22, 27];


// aqui foi feito da forma simples
// const numerosPares = numeros.filter(function(valor) {
//   return valor % 2 === 0;
// }).map(function(valor) {
//   return valor * 2;
// }).reduce(function(ac, valor) {
//   return ac + valor;
// });



// aqui foi feito uma aerofunction para reduzir o codigo
const numerosPares = numeros
 .filter(valor => valor % 2 === 0) // -> filtrar pares
 .map(valor => valor * 2) // -> Dobrar os valores
 .reduce((ac, valor) => ac + valor); // -> Reduzir (somar tudo)

// pares [50, 80, 2, 8, 22]
// dobro [ 100, 160, 4, 16, 44]
// tudo somado 324

console.log(numerosPares);

