
const a4 = [1, 2, 3];
const a5 = [4, 5, 6];
const a6 = a4 + a5; // desta forma ele nao concatena porque os itens sao strings
console.log(a6);


console.log('-------------------');


const a1 = [1, 2, 3];
const a2 = [4, 5, 6];
const a3 = a1.concat(a2, [7,8,9], 'Luiz');
console.log(a3);


console.log('-------------------');


const a7 = [1, 2, 3];
const a8 = [4, 5, 6];
// ... resto -> ... spread
const a9 = [...a7,...a8]
console.log(a9);


console.log('-------------------');


const a10 = [1, 2, 3];
const a11 = [4, 5, 6];
const a12 = [...a10, 'Caio', ...a11, ...[7, 8, 9]];
console.log(a12);