//                 0         1         2        3          4 
const nomes = ['Eduardo', 'Maria', 'Joana', 'wallace', 'rosana'];

// nomes.splice(indice, quantos seram deletados, adicionando elemento1, adicionando elemento2, adicionando elemento3);  o primeiro parametro sera por qual indice irei comecar, o segundo sera quantos elementos eu quero remover do array, e depois do segundo irei passar os que seram adicionados

//pop
const removidos = nomes.splice(3, 2); // no caso aqui eu quero remover do indice 4, 1 elemento no caso a rosana . . . aqui o splice faz a funcao do pop ... e no caso ele tambem retorna o item que foi removido, porem ele retorna como array, porque eu posso remover mais de um elemento ao mesmo tempo
console.log(nomes, removidos); // o primeiro array esta me dando o array com o item removido, e o segundo esta me dando o array com o item que foi removido


console.log('---------------------');

//                -5        -4        -3       -2         -1     - - - como supostamente funciona o indice negativo para remocao
//                 0         1         2        3          4 
const nomes1 = ['Eduardo', 'Maria', 'Joana', 'wallace', 'rosana'];
const removidos1 = nomes1.splice(-1, 1); // no caso ele comecou do -1 e removeu 1 elemento do indice que foi passado, no caso o -1 . . . se eu passar o -2 ele ira remover o indice -2, porem apos a virgula se eu colocar como parametro 1 ele ira so remover o -2 mais mais se eu passar 2 ele ira remover os 2 array finais e assim por diante
console.log(nomes1, removidos1);


console.log('---------------------');


//                -5        -4        -3       -2         -1     - - - como supostamente funciona o indice negativo para remocao
//                 0         1         2        3          4 
const nomes2 = ['Eduardo', 'Maria', 'Joana', 'wallace', 'rosana'];
const removidos2 = nomes2.splice(-1, 0); // se eu passar o indice do removido, porem nao passar o parametro, ele ira retornar um array vazio
console.log(nomes2, removidos2);


console.log('---------------------');


//                -5        -4        -3       -2         -1     - - - como supostamente funciona o indice negativo para remocao
//                 0         1         2        3          4 
const nomes3 = ['Eduardo', 'Maria', 'Joana', 'wallace', 'rosana'];
const removidos3 = nomes3.splice(-2); // se eu passar o indice do removido e nao passar nenhum parametro ele supostamente ira remover o indice passado e tudo que tiver para tras entao tome cuidado se quiser so remover o indice passado
console.log(nomes3, removidos3);


console.log('---------------------');

//                -5        -4        -3       -2         -1     - - - como supostamente funciona o indice negativo para remocao
//                 0         1         2        3          4 
const nomes4 = ['Eduardo', 'Maria', 'Joana', 'wallace', 'rosana'];
const adicionado = nomes4.splice(3, 0, 'Caio'); // no caso ele comeca antes do indice 3, nao remove nenhum elemento e adiciona o 'Caio' antes do indice que foi passado, no caso o caio ira se tornar o indice 3
console.log(nomes4);


console.log('---------------------');

//                -5        -4        -3       -2         -1     - - - como supostamente funciona o indice negativo para remocao
//                 0         1         2        3          4 
const nomes5 = ['Eduardo', 'Maria', 'Joana', 'wallace', 'rosana'];
const removido4 = nomes5.splice(3, 1, 'Caio'); // aqui no caso ele, removeu o indice que foi passado (3) e foi pedido para remover apenas (1) indice, e no indice 3 adicionou o caio que tomou o lugar do wallace . . . 
console.log(nomes5, removido4);


console.log('---------------------');

// simulando shift
//                -5        -4        -3       -2         -1     - - - como supostamente funciona o indice negativo para remocao
//                 0         1         2        3          4 
const nomes6 = ['Eduardo', 'Maria', 'Joana', 'wallace', 'rosana'];
const removidos5 = nomes6.splice(0, 1); // no caso removi o indice ZERO (0)
console.log(nomes6, removidos5);


console.log('---------------------');

// simulando push
//                -5        -4        -3       -2         -1     - - - como supostamente funciona o indice negativo para remocao
//                 0         1         2        3          4 
const nomes7 = ['Eduardo', 'Maria', 'Joana', 'wallace', 'rosana'];
nomes7.splice(nomes7.length, 0, 'Luiz', 'miranda', 'Otavio'); // para simular o push e caso o array for grande e eu nao tenha que ficar contando a quantidade de itens do array para passar o parametro, eu coloco sempre o length . . . que ele ira adicionar no final
console.log(nomes7);


console.log('---------------------');


// simulando unshift
//                -5        -4        -3       -2         -1     - - - como supostamente funciona o indice negativo para remocao
//                 0         1         2        3          4 
const nomes8 = ['Eduardo', 'Maria', 'Joana', 'wallace', 'rosana'];
nomes8.splice(0, 0, 'Luiz', 'miranda', 'Otavio'); // para simular o unshift eu passo como parametro indice zero que sempre ira adicionar no comeco
console.log(nomes8);