//Retorne a soma do dobro de todos os pares
const numbers = [5, 50, 80, 1, 2, 3, 5, 8, 7, 11, 15, 22, 27];

const r = numbers
  .filter((n) => n % 2 === 0)
  .map((n) => n * 2)
  .reduce((a, p) => (a += p), 0);

console.log(r);
