// Função recursiva chama ela mesma

function recursive(max) {
  console.log(max);
  if (max >= 10) return;
  max++;
  recursive(max);
}

recursive(-10);
