// Flasy values: undefined, null, '', false, 0, NaN

const arr1 = [true, false, 0, 12, 'Steve', null]
const arr2 = [1, 2, 3];
const arr3 = [0, 1, 2, 3, 4];
function countTruthy(array) {
  let truthyCount = 0;
  for (let value of array) {
    if (value) {
      truthyCount++;
    }
  }
  return truthyCount;
}

console.log(countTruthy(arr1));
console.log(countTruthy(arr2));
console.log(countTruthy(arr3));
