// map

//               0  1   2   3  4  5  6  7  8   9  10  11  12
const numeros = [5, 50, 80, 1, 2, 3, 5, 8, 7, 11, 15, 22, 27];
const numerosEmDobro = numeros.map(valor => valor * 2);
// Dobre os numeros
console.log(numerosEmDobro);


console.log('--------------------');

// para cada elemento:
const pessoas = [
  {nome: 'Caio', idade: 31},
  {nome: 'Luiz', idade: 40},
  {nome: 'Aline', idade: 28},
  {nome: 'Suely', idade: 51},
  {nome: 'Ricardo', idade: 58},
  {nome: 'Gael', idade: 8},
  {nome: 'Maria', idade: 80}
];

// retorne apenas uma string com o nome da pessoa
const nomes = pessoas.map(obj => obj.nome);
console.log(nomes);

console.log('--------------------');

// remova apenas a chave "nome" do objeto
const idades = pessoas.map(obj => ({idade: obj.idade}) );
// const idades = pessoas.map(obj => {idade: obj.idade}); // desta forma nao funciona
console.log(idades);

console.log('--------------------');

// adicione uma chave ID em cada Objeto
const comIds = pessoas.map(function(obj, indice) {
  // obj.id = indice + 1; // desta forma ele altera o objeto original ... foi somado mais 1 aqui para o primeiro ID para nao comecar em zero
  const newObj = {...obj}; // desta forma ele cria uma variavel newObj e  o Obj pessoas original fica intacto
  newObj.id = indice + 1;
  return newObj;
});

console.log(comIds);

console.log('--------------------');

