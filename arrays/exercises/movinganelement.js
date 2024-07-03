const numbers = [1, 2, 3, 4];

function move(array, index, offset) {
  const output = [...array];
  const element = output.splice(index, 1)[0];
  output.splice(index + offset, 0, element);
  return output;
}

const output = move(numbers, 0, 2);
console.log(output);
const outputMinus = move(numbers, 1, -2);
console.log(outputMinus);
const outputWrong = move(numbers, 0, 8);
console.log(outputWrong);
