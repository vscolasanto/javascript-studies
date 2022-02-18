const name = 'Vinicius';

function printName() {
  const name = 'Fred'; // é utilizado no conole devido ao escopo
  console.log(name);
}

function usePrintName() {
  const name = 'Jason'; // não faz diferença já que aqui a função printName é apenas executada.
  printName();
}

usePrintName();
