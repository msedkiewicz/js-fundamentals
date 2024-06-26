const numbers = [1, -2, 3, 2, 6, -10];

const filteredNumbers = numbers.filter((n) => n >= 0);

const items = filteredNumbers.map((n) => "<li>" + n + "</li>");

console.log(filteredNumbers);
console.log(items);

const html = "<ul>" + items.join("") + "</ul>";
console.log(html);

const objectMapped = filteredNumbers.map((n) => ({ value: n }));

console.log(objectMapped);

// chainable methods

const chained = numbers.filter((n) => n >= 0).map((n) => "<li>" + n + "</li>");

console.log(chained);

const chainedTwo = numbers
  .filter((n) => n >= 0)
  .map((n) => ({ value: n }))
  .filter((obj) => obj.value > 1)
  .map((obj) => obj.value);

console.log(chainedTwo);
