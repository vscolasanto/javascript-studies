const names = ['Vinicius', 'Patrícia', 'Nathália'];
// const names = new Array('Vinicius', 'Patrícia', 'Nathália');
names[0] = 'Mariazinha';
delete names[0]; // Remove o valor mas mantém a posição vazia
console.log(names);

/* ------------------------------------------------- */

const arr = ['Maça', 'Manga', 'Melancia'];
const newArr = arr; // Atribuição por referencia, se alterar o newArr, o arr também muda;
const copyArr = [...arr]; // rest operator cria uma cópia do array/objeto

newArr.pop();

console.log(arr);
console.log(newArr);
console.log(copyArr);

/* ------------------------------------------------- */

const cars = ['Voyage', 'Gol', 'Corsa'];
const copyCars = [...cars];
const removeLast = cars.pop(); // remove o último do array e retorna o item removido
const removeFirst = copyCars.shift(); // remove o primeiro do array (desloca os demais items) e retorna o item removido
console.log(cars, removeLast);
console.log(copyCars, removeFirst);

// shift e unshift deslocam todos os items que sobraram no array
// não é recomendado para arrays extensos demais
cars.unshift('Monza'); // Adiciona um novo elemento no inicio do array
console.log(cars);

cars.push('Vectra'); // Adiciona como último elemento do array
console.log(cars);

/* ------------------------------------------------- */

const languages = ['Javascript', 'Typescript', 'Ruby', 'Node', '.NET'];
// SLICE: primeiro parametro onde começa, segundo parametro onde termina (pode ser negativo)
const newLanguages = languages.slice(0, -2);

console.log(newLanguages);

/* ------------------------------------------------- */

const name = 'Vinicius Colasanto';
const nameArray = name.split(' ');
console.log(nameArray);

const arrayName = ['Vinicius', 'Colasanto'];
const joinName = arrayName.join(' ');
console.log(joinName);
