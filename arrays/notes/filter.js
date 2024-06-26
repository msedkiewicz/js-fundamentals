const numbers = [1, -2, 3, 2, 6, -10];

const filteredNumbers = numbers.filter(function (value) {
  return value >= 0;
});

console.log(filteredNumbers);
