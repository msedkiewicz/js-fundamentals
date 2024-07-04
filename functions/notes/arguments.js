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

// Rest operator - pass varying arguments number
function sumRest(...args) {
  return args.reduce((a, b) => a + b);
}

console.log(sumRest(1, 3)); // 4
console.log(sumRest(1)); // 1
console.log(sumRest()); // error - no initial value
console.log(sumRest(1, 3, 5, 7)); // 16

function sumCart(discount, ...prices) {
  const total = prices.reduce((a, b) => a + b);
  return total * (1 - discount);
}
console.log(sumCart(0.1, 20, 35, 48));

// Rest operator MUST BE the last parameter added:discount, ...prices, someValue - won't work!
