const numbers = [1, 2, 3, 4, 12, 5, 6, 7, 8, 9, 10];

const empty = getMax([]);
console.log(empty);
const array = getMax([1, 2, 3, 4, 14]);
console.log(array);
const max = getMax(numbers);
console.log(max);

function getMax(array) {
  if (array.length === 0) return undefined;

  // let max = array[0];

  // for (let i = 1; i < array.length; i++) {
  //   if (array[i] > max) {
  //     max = array[i];
  //   }
  // }
  // return max;
  return array.reduce((a, b) => (a > b ? a : b));
}
