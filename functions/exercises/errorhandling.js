function countOcurrences(array, searchElement) {
  if (!Array.isArray(array)) {
    throw new Error("Invalid Array");
  }
  return array.reduce((accumulator, current) => {
    const occurence = current === searchElement ? 1 : 0;
    return accumulator + occurence;
  }, 0);
}

try {
  const numbers = [1, 2, 3, 4, 1];
  const countTwo = countOcurrences(numbers, 2);
  console.log(countTwo);
  const countBoolean = countOcurrences(true, 2);
  console.log(countBoolean);
  const countNull = countOcurrences(null, 2);
  console.log(countNull);
  const countNumer = countOcurrences(1, 2);
  console.log(countNull);
} catch (e) {
  console.log(e.message);
}
