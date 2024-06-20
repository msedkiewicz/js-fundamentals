const first = [1, 2, 3];
const second = [4, 5, 6];

const combined = [...first, ...second];
console.log(combined);

const combinedWithLetters = [...first, "a", ...second, "b"];
console.log(combinedWithLetters);

const copy = [...combined];
