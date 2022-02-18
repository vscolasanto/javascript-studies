// Closure é a possibilidade que a função tem de acessar seu escopo léxico.

function returnFn() {
  const name = 'Any name';
  return function () {
    return name;
  };
}

function returnFn2(name) {
  return function () {
    return name;
  };
}

const fn = returnFn();
const fn2 = returnFn2('Vinicius');
const fn3 = returnFn2('Patrícia');

console.log(fn());
console.log(fn2());
console.log(fn3());

// No navegador é possível enxergar o escopo dessas chamadas
console.dir(fn());
console.dir(fn2());
console.dir(fn3());
