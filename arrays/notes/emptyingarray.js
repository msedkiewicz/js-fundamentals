let numbers = [1, 2, 3, 4, 5];
let another = numbers;

// Solution 1
numbers = [];
console.log(numbers);
console.log(another);

//Solution 2

let luckynumbers = [1, 2, 3, 4, 5];
let anotherlucky = luckynumbers;

luckynumbers.length = 0;
console.log(luckynumbers);
console.log(anotherlucky);

//Solution 3

let badnumbers = [6, 7, 8, 9, 0];
badnumbers.splice(0, badnumbers.length);
console.log(badnumbers);

//Solution 4

let somenumbers = [1, 3, 5, 7, 9, 0];

while (somenumbers.length > 0) somenumbers.pop();
console.log(somenumbers);

// objects

const object = [{ id: 1 }, { id: 2 }];
const combinedid = object.concat(somenumbers);
console.log(combinedid);

object[0].id = 12;
console.log(combinedid);
console.log(object);
