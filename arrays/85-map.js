// Dobre os números
const numbers = [5, 50, 80, 1, 2, 3, 5, 8, 7, 11, 15, 22, 27];

const double = numbers.map((n) => n * 2);
console.log('double', double);

// para cada elemento:
// Retorne apenas uma string com o nome da pessoa;
// Remova apenas a chave "nome" do objeto;
// Adicione uma chave id em cada objeto;
const people = [
  { name: 'Luiz', age: 62 },
  { name: 'Maria', age: 23 },
  { name: 'Eduardo', age: 55 },
  { name: 'Letícia', age: 19 },
  { name: 'Rosana', age: 32 },
];

const str = people.map((p) => p.name).join(', ');
console.log(str);
const noName = people.map((p) => ({ age: p.age }));
console.log(noName);
const withId = people.map((p, i) => ({ id: i, ...p }));
console.log(withId);
