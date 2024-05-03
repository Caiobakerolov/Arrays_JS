const a1 = [10, 20, 30, 40, 50, 60, 70, 80, 90];
// for(let valor of a1) {
//   console.log(valor);
// }
a1.forEach(valor => console.log(valor));

console.log('----------------------------');

const a2 = [10, 20, 30];
let total = 0;

a2.forEach(valor1 => { total += valor1; 
});

console.log(total);