const numbers = [1, 2, 3, 4];

function move(array, index, offset) {
  const position = index + offset;
  if (position >= array.length) {
    console.error("Invalid offset.");
    return;
  }

  const output = [...array];
  const element = output.splice(index, 1)[0];
  output.splice(position, 0, element);
  return output;
}

const output = move(numbers, 0, 2);
console.log(output);
const outputMinus = move(numbers, 1, -2);
console.log(outputMinus);
const outputWrong = move(numbers, 0, 8);
console.log(outputWrong);
const outputWrongTwo = move(numbers, 2, -8);
console.log(outputWrongTwo);
