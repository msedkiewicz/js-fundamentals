const numbers = [1, 2, 3, 4];

//End
// numbers.push() - adding in the end
// numbers.pop() - remove from the end and return it

const last = numbers.pop();
console.log(numbers);
console.log(last);

//Beginning
// numbers.unshift() - adding at the beginning
//numbers.shift() - remove from the beginning and return it
const first = numbers.shift();
console.log(numbers);
console.log(first);

//Middle
// numbers.splice() - adding somewhere in the middle; also removing (different params)

numbers.push(4);
numbers.push(5);
numbers.unshift(1);
console.log(numbers);

const middle = numbers.splice(2, 1);
console.log(numbers);
console.log(middle);

const multiple = numbers.splice(2, 2);
console.log(numbers);
console.log(multiple);
