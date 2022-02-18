// Função construtora retorna objetos

function Person(name, lastname) {
  // Atributos e métodos privados
  const id = 12;
  const privateMethod = () => {
    console.log('Can be called INSIDE a function');
  };

  // Atributos e métodos públicos
  this.name = name;
  this.lastname = lastname;

  this.publicMethod = () => {
    console.log('Can be called OUTSIDE a function with private data like id ', id);
    privateMethod();
  };
}

const p1 = new Person('Vinicius', 'Colasanto');
const p2 = new Person('Patrícia', 'Colasanto');

p1.publicMethod();
// p1.privateMethod(); // p1.privateMethod is not a function
