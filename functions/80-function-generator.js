// Uma função geradora serve entregar algo por partes com lazy evaluation;

function* generator1() {
  console.log('first block of code');
  yield 'value 1';
  console.log('second one');
  yield 'value 2';
}

const g1 = generator1();
console.log(g1);
console.log(g1.next().value);
// console.log(g1.next().value);

function* generator2() {
  let i = 0;

  while (true) {
    yield i;
    i++;
  }
}

const g2 = generator2();
for (let i = 0; i <= 10; i++) {
  console.log(g2.next());
}

function* generator3() {
  yield 0;
  yield 1;
  yield 2;
}

function* generator4() {
  yield* generator3();
  yield 3;
  yield 4;
  yield 5;
}

const g4 = generator4();
for (let value of g4) {
  console.log(value);
}

function* generator5() {
  yield function () {
    console.log('came from yeld1');
  };

  yield function () {
    console.log('came from yeld2');
  };
}

const g5 = generator5();
const fn1 = g5.next().value;
const fn2 = g5.next().value;

fn1();
fn2();
