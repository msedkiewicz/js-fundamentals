const numbers = [1, 2, 3, 4, 11, -1];

function except(array, excluded) {
  const output = [];
  for (let element of array) {
    if (!excluded.includes(element)) {
      output.push(element);
    }
  }
  return output;
}

const output = except(numbers, [1]);
const outputTwo = except(numbers, [1, 2]);
console.log(output);
console.log(outputTwo);
