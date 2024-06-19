// Combining and slicing arrays

const first = [1, 2, 3];
const second = [4, 5, 6];

const combined = first.concat(second);
console.log(combined);

const slice = combined.slice(3, 5);
console.log(slice);

const slicetoend = combined.slice(1);
console.log(slicetoend);

const slicecopy = combined.slice();
console.log(slicecopy);
