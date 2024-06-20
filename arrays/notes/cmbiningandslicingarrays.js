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

// objects
let somenumbers = [1, 3, 5, 7, 9, 0];

const object = [{ id: 1 }, { id: 2 }];
const combinedid = object.concat(somenumbers);
console.log(combinedid);

object[0].id = 12;
console.log(combinedid);
console.log(object);
