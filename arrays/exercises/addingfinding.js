const numbersone = [3, 4];

// Add element to end
numbersone.push(5, 6);
console.log(numbersone);

// Add element to beginnig
numbersone.unshift(1, 2);

// Add element to middle
numbersone.splice(2, 0, "a", "b");

// Finding elements in an array
const numberstwo = [1, 2, 3, 1, 4];

console.log(numberstwo.indexOf("a"));
console.log(numberstwo.indexOf("1"));
console.log(numberstwo.indexOf(1));
console.log(numberstwo.lastIndexOf(1));

console.log(numberstwo.indexOf(1) !== -1);
console.log(numberstwo.includes(1));
console.log(numberstwo.indexOf(1, 2)); // second parameter - from which index we start
