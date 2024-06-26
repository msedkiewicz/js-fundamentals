const numbers = [1, 2, 3];
const allPositive = numbers.every(function (value) {
  return value >= 0;
});

console.log(allPositive);

const numbersTricky = [1, -2, 3];
const areAllPositive = numbersTricky.every(function (value) {
  return value >= 0;
});

console.log(areAllPositive);

// some

const somePositive = numbersTricky.some(function (value) {
  return value >= 0;
});
console.log(somePositive);
