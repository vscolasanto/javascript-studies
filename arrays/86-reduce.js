// Somar todos os números
// Retornar um array com os pares
// Retornar um array com o drobro dos valores
const numbers = [5, 50, 80, 1, 2, 3, 5, 8, 7, 11, 15, 22, 27];

const total = numbers.reduce((acc, val) => acc + val, 0);
console.log(total);

const filtered = numbers.reduce((acc, val) => {
  val % 2 === 0 && acc.push(val);
  return acc;
}, []);
console.log(filtered);

const double = numbers.reduce((acc, val) => {
  acc.push(val * 2);
  return acc;
}, []);

console.log(double);

// Retorne a pessoa mais velha
const people = [
  { name: 'Luiz', age: 62 },
  { name: 'Maria', age: 23 },
  { name: 'Eduardo', age: 102 },
  { name: 'Letícia', age: 66 },
  { name: 'Rosana', age: 3 },
];

const oldest = people.reduce((acc, val) => {
  if (acc.age > val.age) {
    return acc;
  }
  return val;
});
console.log(oldest);
