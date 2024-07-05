function sum(...items) {
  return items.reduce((a, b) => a + b);
}

console.log(sum(1, 2, 3, 4));
console.log(sum([1, 2, 3, 4])); // for now getting an array
