// FOR IN LÊ OS INDICES/CHAVES.

// const fruits = ['maça', 'banana', 'pera', 'uva'];

//for default
// for (let i = 0; i < fruits.length; i++) {
//   console.log(fruits[i]);
// }

// for (let index in fruits) {
//   console.log(fruits[index]);
// }

const person = {
  name: 'Vinicius',
  lastname: 'Colasanto',
  age: 33,
};

for (let key in person) {
  console.log(key, person[key]);
}
