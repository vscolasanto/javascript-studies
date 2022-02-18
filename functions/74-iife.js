/**
 * IIFE - Immediately invoked function expression
 * Funções auto invocadas não conflitam com propriedades do escopo global.
 */

(function (name, age) {
  const func = 'IIFE';
  console.log(func);

  function bio(name) {
    return function (age) {
      return `${name} has ${age} years old`;
    };
  }

  const b = bio(name);
  console.log(b(age));
})('Vinicius', 33);

const name = 'Anything';
console.log(name);
