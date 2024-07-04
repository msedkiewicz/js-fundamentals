function sum(a, b) {
  console.log(arguments);
  return a + b;
}

console.log(sum(1, 3));
console.log(sum(1)); // 1 + b(undefined) = NaN
console.log(sum()); // NaN
console.log(sum(1, 3, 5, 7)); // JS uses only two first parameters

function sumOfAll() {
  let total = 0;
  for (let value of arguments) {
    total += value;
  }
  return total;
}

console.log(sumOfAll(1, 3)); // 4
console.log(sumOfAll(1)); // 1
console.log(sumOfAll()); // 0
console.log(sumOfAll(1, 3, 5, 7)); // 16
