const numbers = [50, 50, 50, 50];

for (let n of numbers) {
  console.log(n);
}

let total = 0;
numbers.forEach((n) => (total += n));
console.log(total);
