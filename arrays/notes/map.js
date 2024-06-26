const numbers = [1, -2, 3, 2, 6, -10];

const filteredNumbers = numbers.filter((n) => n >= 0);

const items = filteredNumbers.map((n) => "<li>" + n + "</li>");

console.log(filteredNumbers);
console.log(items);

const html = "<ul>" + items.join("") + "</ul>";
console.log(html);

const objectMapped = filteredNumbers.map((n) => {
  const obj = { value: n };
  return obj;
});

console.log(objectMapped);
