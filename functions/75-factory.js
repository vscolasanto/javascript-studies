// Factory Function
function createPerson(name, lastname, height, weight) {
  return {
    name,
    lastname,
    height,
    weight,
    get fullName() {
      return `${this.name} ${this.lastname}`;
    },
    set fullName(value) {
      value = value.split(' ');
      this.name = value.shift();
      this.lastname = value.join(' ');
    },
    get imc() {
      const i = this.weight / (this.height * this.height);
      return i.toPrecision(3);
    },
  };
}

const p1 = createPerson('Vinicius', 'Colasanto', 1.74, 88);
const p2 = createPerson('Patrícia', 'Colasanto', 1.7, 58);
const p3 = createPerson('Nathália', 'Colasanto', 0.77, 13);

p1.fullName = 'Um nome qualquer';
console.log(p1.fullName);
console.log(p2.fullName);
console.log(p3.fullName);
console.log(p1.imc);
console.log(p2.imc);
console.log(p3.imc);
