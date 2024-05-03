const pessoas = [
  {nome: 'Caio', idade: 31},
  {nome: 'Luiz', idade: 40},
  {nome: 'Aline', idade: 28},
  {nome: 'Suely', idade: 51},
  {nome: 'Ricardo', idade: 58},
  {nome: 'Gael', idade: 8},
  {nome: 'Maria', idade: 80}
];

// retorne as pessoas que tem o nome com 5 letras ou mais
const pessoasComNomeGrande = pessoas.filter(obj => obj.nome.length >= 5);
console.log(pessoasComNomeGrande);

console.log('-------------------------------');

// retorne as pessoas com mais de 50 anos
const pessoasComIdadeMaiorQ50 = pessoas.filter(obj => obj.idade > 50);
console.log(pessoasComIdadeMaiorQ50);

console.log('-------------------------------');

// retorne as pessoas cujo nome termina com a
const nomeTerminaComA = pessoas.filter(obj => obj.nome.toLowerCase().endsWith('a'));
console.log(nomeTerminaComA);