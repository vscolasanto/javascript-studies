// Funções podem ter um retorno de qualquer tipo, e também podem não retornar nada.
// podem retornar, inclusive, outra função

function createMultiplier(multiplier) {
  return function (n) {
    return n * multiplier;
  };
}

const double = createMultiplier(2);
const triplicate = createMultiplier(3);
const quadruple = createMultiplier(4);

console.log(double(3));
console.log(triplicate(3));
console.log(quadruple(3));
