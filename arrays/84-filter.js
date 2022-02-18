// Retorne os números maiores que 10
const numbers = [5, 50, 80, 1, 2, 3, 4, 5, 8, 7, 11, 15, 22, 9, 44, 33];

function biggerThanTenCallback(value) {
  return value > 10;
}

const biggerThanTen = numbers.filter(biggerThanTenCallback);
const biggerThanTen2 = numbers.filter((n) => n > 10);

console.log(biggerThanTen, biggerThanTen2);

// Retorne as pessoas que tem o nome com 5 letras ou mais
// Retorne as pessoas com mais de 50 anos
// Retorne as pessoas cujo nome termina com a
const people = [
  { name: 'Luiz', age: '62' },
  { name: 'Maria', age: '23' },
  { name: 'Eduardo', age: '55' },
  { name: 'Letícia', age: '19' },
  { name: 'Rosana', age: '32' },
  { name: 'Wallace', age: '47' },
];

const filteredByName = people.filter((p) => p.name.length >= 5);
const filteredByAge = people.filter((p) => p.age > 50);
const filteredlastCharacter = people.filter((p) => p.name.toLowerCase().endsWith('a'));

console.log(filteredByName);
console.log(filteredByAge);
console.log(filteredlastCharacter);
