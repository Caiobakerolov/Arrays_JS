const nomes = ['Eduardo', 'Maria', 'Joana'];
// string, objetos, funcoes, numeros
// const nomes = new Array('Eduardo', 'Maria', 'Joana'); // eu posso criar o array deste forma tambem, mais e pouco usado
nomes[2] = 'Joao';
delete nomes[2];
console.log(nomes);


console.log('----------------');


const nomes1 = ['Eduardo', 'Maria', 'Joana'];
// const novo = nomes1;
const novo = [...nomes1];

novo.pop(); // aqui faz com que perca o ultimo item do array porem ele modifica a array original
console.log(nomes1);
console.log(novo);


console.log('----------------');


const nomes2 = ['Eduardo', 'Maria', 'Joana'];
console.log(nomes2.length);


console.log('----------------');


const nomes3 = ['Eduardo', 'Maria', 'Joana'];
const removido = nomes3.pop(); // aqui no caso ele remove o ultimo e tambem me retorna qual foi porem ele modifica a array originalremovido 
console.log(nomes3, removido);
console.log(removido);


console.log('----------------');


const nomes4 = ['Eduardo', 'Maria', 'Joana'];
const removido1 = nomes4.shift(); // aqui no caso ele remove o primeiro e tambem me retorna qual foi removido 
console.log(nomes4, removido1);
console.log(nomes4);


console.log('----------------');


const nomes5 = ['Eduardo', 'Maria', 'Joana'];
nomes5.push('Caio', 'luan'); // adiciona no final do array e o mais utilizado porem ele modifica a array original
console.log(nomes5);
console.log(nomes5.length);


console.log('----------------');


const nomes6 = ['Eduardo', 'Maria', 'Joana'];
nomes6.unshift('Caio', 'luan'); // adiciona no inicio do array mais nao e muito utilizado
console.log(nomes6);


console.log('----------------');


//                  0         1        2         3          4 
const nomes7 = ['Eduardo', 'Maria', 'Joana', 'wallace', 'rosana'];
const novo1 = nomes7.slice(1, 3); // eu fatio o array conforme eu necessitar . . . no caso aqui peguei do array 1 ate o 2, mais foi passado o terceiro(3) array porem ele sempre me da 1 antes, entao se eu realmente quiser pegar o terceiro tenho que passar o 4
console.log(novo1);


console.log('----------------');


//                  0         1        2         3          4 
const nomes8 = ['Eduardo', 'Maria', 'Joana', 'wallace', 'rosana'];
const novo2 = nomes8.slice(1, -1); //para remover eu passo como negativo, porem o negativo sempre vira no segundo parametro, se passar no primeiro dara erro !!!
console.log(novo2);


console.log('----------------');

// convertendo uma string em um array

// a melhor forma de eu transforma em um array e dividir pelos espacos dentro da string, supostamente, cada espaco uma palavra diferente 
const nomes9 = 'Caio Alcantara Bakerolov';
console.log(nomes9);
const nomes10 = nomes9.split(' '); // o split esta dividindo a string pelo espaco conforme passado no parametro . . . caso a string esteja dividino as palavras por virgula ou pontos enfim o caractere que estiver la, eu vou passar como parametro(',') ou ('.')
console.log(nomes10);


console.log('----------------');


// transformando um array em uma string
const nomes11 = ['Eduardo', 'Maria', 'Joana', 'wallace', 'rosana'];
const nomes12 = nomes11.join(' '); // transforma a array em uma string e no parametro eu passo o elemento que sera o separado das strings ... se eu nao passar nada por automatico ele ja vem com virgula
console.log(nomes12);


console.log('----------------');


