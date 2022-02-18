function randomTimeout(min = 200, max = 3000) {
  const num = Math.random() * (max - min) + min;
  return Math.floor(num);
}

function f1(cb) {
  const random = randomTimeout();
  setTimeout(function () {
    console.log('f1 - ', random);
    cb && cb();
  }, random);
}

function f2(cb) {
  const random = randomTimeout();
  setTimeout(function () {
    console.log('f2 - ', random);
    cb && cb();
  }, random);
}

function f3(cb) {
  const random = randomTimeout();
  setTimeout(function () {
    console.log('f3 - ', random);
    cb && cb();
  }, random);
}

// f1();
// f2();
// f3();
// console.log('Last called');

// f1(function () {
//   f2(function () {
//     f3(function () {
//       console.log('Last called');
//     });
//   });
// });

f1(f1cb);

function f1cb() {
  f2(f2cb);
}

function f2cb() {
  f3(f3cb);
}

function f3cb() {
  console.log('last called');
}
