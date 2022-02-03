/*
 * Declarando a função de modo padrão function NomeDaFuncao(), acontece o Function HOISTING
 * isso significa que a função será elevado para o topo da execução quando o javascript rodar
 * ignorando se a função é chamada antes ou depois de ser declarada.
 */

sayHi();

function sayHi() {
  console.log('hi');
}

/*
 * Funções são First class objects (FCO - Objetos de primeira classe)
 * Function Expression - tratar a função como um dado;
 */

const anyData = function () {
  console.log('any data');
};

function functionExecuter(fn) {
  return fn();
}

functionExecuter(anyData); // a função deve ser chamada como um dado, não como uma função

const arrow = () => {
  console.log('Arrow Function');
};
arrow();

const obj = {
  speak: function () {
    console.log('Im speaking');
  },
  sleep() {
    console.log('Im sleeping');
  },
};

obj.speak();
obj.sleep();
