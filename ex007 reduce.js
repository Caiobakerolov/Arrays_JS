//               0  1   2   3  4  5  6  7  8   9  10  11  12
const numeros = [5, 50, 80, 1, 2, 3, 5, 8, 7, 11, 15, 22, 27];

// Some todos os numeros (reduce)
const total = numeros.reduce(function(acumulador, valor) {
  acumulador += valor;  
  return acumulador;
}, 0);
console.log(total);

console.log('------------------------');

// retorne um array com os pares (filter)
const numerosPares = numeros.reduce(function(acumulador, valor) {
  if(valor % 2 === 0) acumulador.push(valor);
  return acumulador;
}, []);
console.log(numerosPares);

console.log('------------------------');

// retorne um array com os pares (filter)
const numerosImpares = numeros.reduce(function(acumulador, valor) {
  if(valor % 2 !== 0) acumulador.push(valor);
  return acumulador;
}, []);
console.log(numerosImpares);

console.log('------------------------');

// retorne um array com o dobro dos valores(map)
const dobroValores = numeros.reduce(function(acumulador, valor) {
  acumulador.push(valor * 2);
  return acumulador;
}, []);
console.log(dobroValores);

console.log('------------------------');

// retorne a pessoa mais velha
const pessoas = [
  {nome: 'Caio', idade: 31},
  {nome: 'Luiz', idade: 40},
  {nome: 'Aline', idade: 28},
  {nome: 'Suely', idade: 51},
  {nome: 'Ricardo', idade: 58},
  {nome: 'Gael', idade: 8},
  {nome: 'Maria', idade: 80}
];

const maisVelha = pessoas.reduce(function(acumulador, valor) {
  if(acumulador.idade > valor.idade) return acumulador;
  return valor;
});

console.log(maisVelha);