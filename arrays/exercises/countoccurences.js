const numbers = [1, 2, 3, 4, 1];

function countOcurrences(array, searchElement) {
  // let count = 0;
  // for (let element of array) {
  //   if (element === searchElement) {
  //     count++;
  //   }
  // }
  // return count;
  return array.reduce((accumulator, current) => {
    const occurence = current === searchElement ? 1 : 0;
    return accumulator + occurence;
  }, 0);
}

const countOne = countOcurrences(numbers, 1);
console.log(countOne);
const countTwo = countOcurrences(numbers, 2);
console.log(countTwo);
const countNonexistent = countOcurrences(numbers, -2);
console.log(countNonexistent);
