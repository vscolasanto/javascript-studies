/**
 * Se não passar nenhum parametro na criação da função mas passar em sua chamada
 * ela recebe uma propriedade arguments que lista todos os parametros dentro de
 * um objeto.
 * Só funciona com a palavra reservada function...
 */

function fn() {
  let total = 0;

  for (let arg of arguments) {
    console.log(arg);
    total += arg;
  }

  console.log(total);
}
fn(12, 23, 13, 24, 14, 25);

/**
 * para pular um parametro e fazer com que ele assuma o valor padrão passado,
 * precisamos enviar undefined na chamada da função.
 */
function fn2(a, b = 2, c = 4) {
  console.log(a + b + c);
}
fn2(1, 0, 20); // 21
fn2(1, undefined, 20); // 23

function fn3({ name, lastname, age }) {
  console.log(name, lastname, age);
}
const obj = { name: 'vinicius', lastname: 'colasanto', age: 33 };
fn3({ name: 'vinicius', lastname: 'colasanto', age: 33 });
fn3(obj);

function fn4([valor1, valor2, valor3]) {
  console.log(valor1, valor2, valor3);
}
const arr = [1, 3, 'any text'];
fn4([1, 3, 'any text']);
fn4(arr);

function calculate(operator, acumulator, ...numbers) {
  for (let number of numbers) {
    if (operator === '+') acumulator += number;
    if (operator === '-') acumulator -= number;
    if (operator === '*') acumulator *= number;
    if (operator === '/') acumulator /= number;
  }
  console.log(acumulator);
}
calculate('/', 0, 10, 20, 30, 40, 50);
