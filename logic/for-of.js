// DIFERENTE DO FOR CONVENCIONAL E DO FOR IN, O FOR OF RETORNA O VALOR DIRETAMENTE;

const name = 'Vinicius Colasanto';
const names = ['Vinicius', 'Patrícia', 'Nathália'];

for (let value of name) {
  console.log(value.toUpperCase());
}

for (let name of names) {
  console.log(name);
}
